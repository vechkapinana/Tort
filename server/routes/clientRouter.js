const Router = require('express')
const router = new Router()
const clientController = require('../controllers/clientController')

router.post('/registration', clientController.registration)//регистрация
router.post('/login', clientController.login)//авторизация
router.get('/auth', clientController.check)//будем проверять авторизован пользователь или нет

//router.get('/auth',(req, res) => {// все маршруты указанные от роутера к роутеру плюсуются и мы можем с ними работать
//    res.json({message: 'WORK!!!'})// в роутере писать не надо функции, надо разделять логику
//})


module.exports = router//этот роутер из этого файла мы экспортируем