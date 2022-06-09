const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const uuid = require('uuid')
const mailService = require("./mailService")
const tokenService = require("./tokenService")
const UserDto = require("../dtos/userDto")
const ApiError = require("../exceptions/apiError")
const { ObjectId } = require("mongodb")

class UserService {
    async registration (email, password) {
        const candidate = await UserModel.findOne({email})
        if (candidate) {
            throw ApiError.BadRequest(`E-mail ${email} already registered`)
        }

        const hashPassword = await bcrypt.hash(password, 3)
        const activationLink = uuid.v4()
        const user = await UserModel.create({email, password: hashPassword, activationLink})
        
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink})
        if (!user) {
            throw ApiError.BadRequest("Activation link uncorrect")
        }
        user.activationSuccessful = true
        await user.save()
    }


    async login(email, password) {
        const user = await UserModel.findOne({email})
        if (!user) {
            throw ApiError.BadRequest(`User with email ${email} not found`)
        }
        const compairingPasssword = await bcrypt.compare(password, user.password)
        if (!compairingPasssword) {
            throw ApiError.BadRequest(`Incorrect password for user ${email}`)
        }

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    } 

    async logout(refreshToken) {
     const token = await tokenService.removeToken(refreshToken)
     return token
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }
        const user = await UserModel.findById(userData.id)
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    }

    async getAllUsers(id) {
        console.log(id);
        const users = await UserModel.findById({ _id: ObjectId(id) })
        return users
    }

    async updateProfile(id, data) {
        const profile = await UserModel.updateOne({ _id: ObjectId(id) }, {$set: {"profile": data}})
        if (!profile) {
            throw ApiError.BadRequest("User not found")
        }
        const user = await UserModel.findById({ _id: ObjectId(id) })
        return user
    }

}

module.exports = new UserService()