module.exports = {
    keys:'eggTestCookie',
    bodyParser: {
        jsonLimit: '1mb',
        formLimit: '1mb'
    },
    multipart: {
        mode: 'file'
    },
    io: {
        namespace: {
            '/': {
                connectionMiddleware: [ 'auth' ]
            },
            '/test': {
                connectionMiddleware: [ 'auth' ]
            }
        }
    }
}
