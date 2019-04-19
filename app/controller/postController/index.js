const Controller = require('egg').Controller

class PostController extends Controller{
    async listPosts() {
        assert.strictEqual(this.ctx.request.body.title, 'controller')
        assert.strictEqual(this.ctx.request.body.content, 'this is content')
    }
}

module.exports = PostController
