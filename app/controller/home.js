const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx } = this
        ctx.body = {
            name: `gun ${ctx.params.id}`
        }
    }
}

module.exports = HomeController;
