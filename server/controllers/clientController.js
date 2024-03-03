const ApiError = require('../error/ApiError')
class ClientController {
    async registration(req, res) {

    }

    async login(req, res) {
        
    }

    async check(req, res, next) {
        const {ID_Client} = req.query//получаем параметр строки запроса
        if(!ID_Client){
           return next(ApiError.badRequest('Не задан id'))
        }
        res.json(ID_Client)
    }
}

//на выходе из этого файла у нас будет новый объект, созданный из этого класса
module.exports = new ClientController()