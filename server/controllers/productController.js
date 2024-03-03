const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')
class ProductController {
    async create(req, res) {
        const {ID_Product, ID_Category, Name, Compound, Exp, Av} = req.body
            const product = await Product.create({ID_Product, ID_Category, Name, Compound, Exp, Av})
            return res.json(product)
        // try{
        //     const {ID_Product, ID_Category, Name, Compound, Exp} = req.body
        //     const product = await Product.create({ID_Product, ID_Category, Name, Compound, Exp})
        //     return res.json(product)
        // } catch(e){
        //     next(ApiError.badRequest(e.message))
        // }
    }

    //можно сделать постраничное разбиение для большого голичества товаров
    async getAll(req, res) {
        const {ID_Category} = req.body
        let products
        if (!ID_Category){//если не указан, то выводим все товары, иначе те которые указаны
            products = await Product.findAll()
        }
        else {
            products = await Product.findAll({where:{ID_Category}})
        }
        return res.json(products)
    }

    async getOne(req, res) {
        const {ID_Product} = req.params
        const product = await Product.findOne(
            {where: {ID_Product}}
        )
        return res.json(product)
    }
}

//на выходе из этого файла у нас будет новый объект, созданный из этого класса
module.exports = new ProductController()