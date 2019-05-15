const Controller = require(`egg`).Controller

const server = require('http').createServer();
const net = require('net')
const port = 8601
const host = 'openbarrage.douyutv.com'

const roomidList = []
const clientList = []
const invList = []
const userList = []

let client = undefined
let timeClock = undefined

class danMuController extends Controller{
    async login (ctx) {
         const message = this.ctx.packet[1].payload;
         const { app, socket, logger, helper } = ctx;
         console.log(message);

         if(message.type==='login'){

             client= new net.Socket();

             client.setEncoding('binary');

             client.connect(port,host,()=>{

                 client.write(bufferMsg(`type@=loginreq/roomid@=${message.rid}/`))

                 timeClock = setInterval(()=>{
                     client.write(bufferMsg('type@=mrkl/\0'))

                 },45000)

                 //208114

                 client.write(bufferMsg(`type@=joingroup/rid@=${message.rid}/gid@=-9999/`))
             })

             client.on('data',(data)=>{
                 const resStr = Buffer.from(data, 'binary').toString('utf8');

                 if (!resStr.match(/type@=chatmsg\//))
                     return
                 const uid = resStr.match(/uid@=([^\/]*)\//)[1]
                 const nn = resStr.match(/nn@=([^\/]*)\//)[1]
                 const txt = resStr.match(/txt@=([^\/]*)\//)[1]
                 const danMu = {
                     txt: txt,
                     usrUid: uid,
                     usrNickName: nn
                 }

                 this.ctx.socket.emit('res',danMu)
                 //this.ctx.socket.emit('res',resStr)
             });
             client.on('error',function(error){
                 console.log('error:'+error);
             });
             client.on('close',function(){
                 console.log('Connection closed');
             });
         }

         //客户端断开连接
         socket.on('disconnect',()=>{
             console.log(`disconnect`)
             clearContent()
         })
         //客户端timeout
         socket.on('connect_timeout',()=> {
             console.log(`connect_timeout `)
             clearContent()
         })
         socket.on('error',()=> {
             console.log(`error `)
             socket.destroy()
         })
    }
}
// buffer数据格式 TCP需要2字节
function bufferMsg(str){
    const strBuf = Buffer.from(`${ str}\0`, 'utf8')
    const data_length = strBuf.length + 8
    const code = 689
    const headBuf = Buffer.alloc(12);
    headBuf.writeUInt32LE(data_length, 0)
    headBuf.writeUInt32LE(data_length, 4)
    headBuf.writeUInt32LE(code, 8)
    return Buffer.concat(Array.of(headBuf, strBuf))
}

//清楚房间定时器
function clearContent(){
    clearInterval(timeClock)
    client.write(bufferMsg(`type@=logout/`))
}

//新建房间
function createRoom(rid){
    return rid
}


module.exports = danMuController
