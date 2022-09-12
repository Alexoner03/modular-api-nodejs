const UserService = function (UserDao) {
    return {
        getUsers() {
            return UserDao.getUsers()
        }
    }
}

module.exports = UserService