module.exports = app => {
    return async (ctx, next) => {
        const { app, socket, logger, helper } = ctx;

        await next();
    }
};
