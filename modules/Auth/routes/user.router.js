const {Router} = require("express")
const {asyncHandler} = require("../../Shared/functions/helpers.util")

const UserRouter = function (UserController) {
    const router = Router()

    router.get("/", asyncHandler(UserController.getUsers))

    return router
}

module.exports = UserRouter