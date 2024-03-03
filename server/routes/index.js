const Router = require('express')
const router = new Router()
const categoryRouter = require('./categoryRouter')
const clientRouter = require('./clientRouter')
const productRouter = require('./productRouter')

router.use('/category', categoryRouter)//подроутеры (указваем url)
router.use('/client', clientRouter)
router.use('/product', productRouter)

module.exports = router//этот роутер из этого файла мы экспортируем