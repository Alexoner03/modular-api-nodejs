const UserDao = function (UserModel) {
    return {
        getUsers() {
            return UserModel.find({})
        }
    }
}

module.exports = UserDao