const {Category}= require('../models/models')
const ApiError = require('../error/ApiError')
class CategoryController {
    async create(req, res) {
        //поскольку это пост запрос у него есть тело
        const {ID_Category} = req.body
        const {Name} = req.body
        const category = await Category.create({ID_Category, Name})
        return res.json(category)
    }

    async getAll(req, res) {
        const categories = await Category.findAll()
        return res.json(categories)
    }

    async delete(req, res) {
        
    }
}

//на выходе из этого файла у нас будет новый объект, созданный из этого класса
module.exports = new CategoryController()