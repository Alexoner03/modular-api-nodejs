const {Router} = require("express")
const container = require("../../container");
const userRouter = container.resolve("UserRouter")
const services = container.resolve("UserService")

const router = Router()

router.use("/user", userRouter)

const AuthModule = {
    router,
    services
}

module.exports = AuthModule