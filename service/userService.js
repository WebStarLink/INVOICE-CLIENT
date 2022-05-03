const UserModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const uuid = require('uuid')
const mailService = require("./mailService")
const tokenService = require("./tokenService")
const UserDto = require("../dtos/userDto")
const ApiError = require("../exceptions/apiError")

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
        user.activationLink = true
        await user.save()
    }


    async login(email, password) {
        const user = await UserModel.findOne({email})
        if (!user) {
            throw ApiError.BadRequest(`User with email ${email} not found`)
        }
        const compairingPasssword = await bcrypt.compare(password, user.password)
        if (!compairingPasssword) {
            throw ApiError.BadRequest(`Incorrect password`)
        }

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    } 

}

module.exports = new UserService()