module.exports = {
    parseMsg(action,playload = {},metadata = {}){
        const meta = Object.assign({},{
            timestamp: Data.now()
        },metadata)

        return {
            meta,
            data:{
                action,
                playload
            }
        }
    }
}
