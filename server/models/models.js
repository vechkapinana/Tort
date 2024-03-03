const sequelize = require('../bd')
//Oписание типов
const {DataTypes}=require('sequelize')

const Client = sequelize.define('Client', {
    ID_Client: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Login: {type: DataTypes.STRING, unique: true, allowNull: false},
    Password: {type: DataTypes.STRING},
    Surname: {type: DataTypes.STRING, allowNull: false},
    Name: {type: DataTypes.STRING, allowNull: false},
    Patronymic: {type: DataTypes.STRING},
    Phone_number: {type: DataTypes.INTEGER, unique: true, allowNull: false}
})

const Order = sequelize.define('Order', {
    ID_Order: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    ID_Client: {type: DataTypes.INTEGER},
    ID_Status: {type: DataTypes.INTEGER},
    DataD: {type: DataTypes.DATE},
    Interval: {type: DataTypes.TIME},
    ID_Address: {type: DataTypes.INTEGER},
    Cost: {type: DataTypes.FLOAT},
    DataS: {type: DataTypes.DATE},
    Coment:{type: DataTypes.STRING}
})

const Product_Order = sequelize.define('Product_Order', {
    ID_Product_Order: {type: DataTypes.INTEGER, primaryKey: true},
    ID_Order: {type: DataTypes.INTEGER},
    ID_Product: {type: DataTypes.INTEGER}
})

const Product = sequelize.define('Product', {
    ID_Product: {type: DataTypes.INTEGER, primaryKey: true},
    ID_Category: {type: DataTypes.INTEGER},
    Name: {type: DataTypes.STRING, allowNull: false},
    Grade: {type: DataTypes.FLOAT, defaultValue: 0},
    Compound: {type: DataTypes.STRING, allowNull: false},
    Exp: {type: DataTypes.STRING, allowNull: false},
    Av: {type: DataTypes.BOOLEAN}
})

const Cost_Product = sequelize.define('Cost_Product', {
    ID_Product: {type: DataTypes.INTEGER, primaryKey: true},
    Weight: {type: DataTypes.FLOAT, allowNull: false},
    Price: {type: DataTypes.FLOAT, allowNull: false}
})

const Category = sequelize.define('Category', {
    ID_Category: {type: DataTypes.INTEGER, primaryKey: true},
    Name: {type: DataTypes.STRING, allowNull: false}
})

const Review = sequelize.define('Review', {
    ID_Review: {type: DataTypes.INTEGER, primaryKey: true},
    ID_Client: {type: DataTypes.INTEGER},
    ID_Product: {type: DataTypes.INTEGER},
    Text: {type: DataTypes.STRING},
    Photo: {type: DataTypes.BLOB},
    DateS: {type: DataTypes.DATE},
    Grade: {type: DataTypes.FLOAT}
})

const Status = sequelize.define('Status', {
    ID_Status: {type: DataTypes.INTEGER, primaryKey: true},
    Name: {type: DataTypes.STRING}
})

const Address = sequelize.define('Address', {
    ID_Address: {type: DataTypes.INTEGER, primaryKey: true},
    Street: {type: DataTypes.STRING, allowNull: false},
    House: {type: DataTypes.INTEGER, allowNull: false},
    Apartment: {type: DataTypes.INTEGER, allowNull: false},
    Floor: {type: DataTypes.STRING}
})

Order.hasMany(Status)
Status.belongsTo(Order)

Address.hasMany(Order)
Order.belongsTo(Address)

Client.hasMany(Order)
Order.belongsTo(Client)

Client.hasMany(Review)
Review.belongsTo(Client)

Order.hasMany(Product_Order)
Product_Order.belongsTo(Order)

Product.hasMany(Review)
Review.belongsTo(Product)

Product.hasMany(Product_Order)
Product_Order.belongsTo(Product)

Product.hasMany(Cost_Product)
Cost_Product.belongsTo(Product)

Category.hasMany(Product)
Product.belongsTo(Category)

module.exports = {
    Order,
    Client,
    Status,
    Address,
    Review,
    Product_Order,
    Product,
    Category,
    Cost_Product
}

// module.exports = {
//     up: (queryInterface, Sequelize) =>
//       queryInterface.changeColumn('Product', 'Name', {
//         type: Sequelize.STRING,
//         allowNull: false,
//       }),
  
//     down: (queryInterface, Sequelize) =>
//       queryInterface.changeColumn('Product', 'Name', {
//         type: Sequelize.INTEGER, // Измените PREVIOUS_TYPE на предыдущий тип
//         allowNull: false,
//       }),
//   };

//какой тип будет у фото???