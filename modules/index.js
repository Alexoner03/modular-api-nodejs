const {Router} = require("express")
const AuthModule = require("./Auth")

const Modules = Router()

Modules.use(AuthModule.router)

module.exports = Modules