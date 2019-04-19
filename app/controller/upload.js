const path = require('path')
const sendToWormhole = require('stream-wormhole')
const Controller = require('egg').Controller

module.exports = class extends Controller {
    async upload (){
        const ctx = this.ctx;
        const stream = await ctx.getFileStream();
        const name = 'egg-multipart-test/' + path.basename(stream.filename);
        // 文件处理，上传到云存储等等
        let result
        try{
            result = {
                url:'123123',
                file:file
            }
        }finally {
            await fs.unlink(file.filepath)
        }
        ctx.body = {
            url: result.url,
            file: result.file,
            // 获取所有的字段值
            requestBody: ctx.request.body
        };

    }
}
