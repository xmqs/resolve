module.exports = app => {
    const {router, controller, io} = app;
    router.get('/needgzip/:id', app.controller.home.index);
    router.get('/roominfo/:id', app.controller.roomInfo.index.getRoomInfo)

    router.resources('/api/user', controller.user.index)

    router.get('/formdata', app.middleware.report, controller.formdata.index.info)

    router.get('/fromdataUper', app.middlewares.uppercase(), controller.formdata.index.info)

    router.redirect('/red', '/api/user', 302)

    router.get('/search', controller.redirect.index.index)

    router.post('/postcontroller', controller.postController.index.listPosts)

    router.post('/upload', controller.upload.upload)

    io.of('/test').route('chat', app.io.controllers.chat.login)
}
