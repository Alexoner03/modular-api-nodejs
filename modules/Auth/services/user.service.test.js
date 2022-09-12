const UserService = require("./user.service")

describe("User Service Test", () => {

    it("Should be call getUsers functions one time", () => {

        const mockUserDao = {
            getUsers: jest.fn().mockImplementation(() => [])
        }

        const users = UserService(mockUserDao).getUsers()

        expect(users).toHaveLength(0)
        expect(mockUserDao.getUsers).toHaveBeenCalledTimes(1)
    })
})