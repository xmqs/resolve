const Controller = require('egg').Controller

class RoomController extends Controller{
    async getRoomInfo(){
        const { ctx } = this
        ctx.body = {
            roomInfo:`9999`
        }
    }
}

module.exports = RoomController
