const UserController = function (UserService) {
    return {
        async getUsers(req, res) {

            const users = await UserService.getUsers()

            res.json({
                data: users
            })
        }
    }
}

module.exports = UserController