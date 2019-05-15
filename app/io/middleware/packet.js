module.exports = app =>{
    return async (ctx, next)=>{
        ctx.socket.emit('res','packet received!')

        if(this.packet[0] === 'exchange'){
            ctx.socket.emit('res','get you exchange info')
            await next()
        }

        ctx.socket.on('error',()=>{
            console.log(`error`)
        })
        ctx.socket.on('close',()=>{
            console.log(`close`)
        })
        await next()
    }
}
