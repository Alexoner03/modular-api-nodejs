const UserDAO = require("./user.dao")

describe("User Dao Test", () => {

    it("Should be call find function one time", () => {

        const mockUserModel = {
            find: jest.fn().mockImplementation(() => [])
        }

        const users = UserDAO(mockUserModel).getUsers()

        expect(users).toHaveLength(0)
        expect(mockUserModel.find).toHaveBeenCalledTimes(1)
    })
})