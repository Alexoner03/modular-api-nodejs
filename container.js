const {createContainer, Lifetime, asValue, InjectionMode} = require('awilix')
const {extendNativeObjects} = require("./modules/Shared/functions/helpers.util")

extendNativeObjects()

const container = createContainer()

container.loadModules([
        [
            'modules/**/*.model.js',
            {
                register: asValue
            }
        ],
        "modules/**/*.service.js",
        "modules/**/*.controller.js",
        "modules/**/*.dao.js",
        "modules/**/*.router.js"
    ],
    {
        formatName: name => name.split(".").map(word => word.capitalize()).join(""),
        resolverOptions: {
            lifetime: Lifetime.SINGLETON,
            injectionMode: InjectionMode.CLASSIC
        }
    }
)

module.exports = container