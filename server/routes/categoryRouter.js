const Router = require('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')

router.post('/', categoryController.create)//для того чтобы создавать категории
router.get('/', categoryController.getAll)////для того чтобы получать категории
router.delete('/', categoryController.delete)////для того чтобы удалять категории

module.exports = router//этот роутер из этого файла мы экспортируем