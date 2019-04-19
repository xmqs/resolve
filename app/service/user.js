/*
const Service = require('egg').Serviece

class UserService extends Service{

}
*/

const Service = require('egg').Service

class UserService extends Service{
    async find (id){
        return `Test`
    }
}

module.exports = UserService
