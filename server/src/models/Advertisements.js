module.exports = (sequelize, DataTypes) => {
    const Advertisement = sequelize.define('Advertisement', {
        companyName    :  DataTypes.STRING,
        contactDetails :  DataTypes.STRING,
        email          :  DataTypes.STRING,
        logo           :  DataTypes.TEXT,
        imageURL       :  DataTypes.TEXT,
        website        :  DataTypes.TEXT,
        address        :  DataTypes.STRING,
        category       :  DataTypes.STRING
    })
    return Advertisement
}    