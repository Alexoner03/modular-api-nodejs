const server = require("./server")

async function main() {
    await server()
}

main().catch(() => process.exit(1));