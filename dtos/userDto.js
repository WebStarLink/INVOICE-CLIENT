module.exports = class UserDto {
    email;
    id; 
    activationSuccessful;

    constructor(model) {
        this.email = model.email
        this.id = model._id
        this.activationSuccessful = model.activationSuccessful
    }
}