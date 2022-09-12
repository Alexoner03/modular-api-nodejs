const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)

const extendNativeObjects = () => {
    Object.defineProperty(String.prototype, 'capitalize', {
        value: function() {
            return this.charAt(0).toUpperCase() + this.slice(1);
        },
        enumerable: false
    });
}

module.exports = {
    asyncHandler,
    extendNativeObjects
}