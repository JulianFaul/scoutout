module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        productName    :  DataTypes.STRING
    })
    return Product
}    