module.exports = (sequelize, DataTypes) => {
    const Advertisement = sequelize.define('Advertisement', {
        companyName    :  DataTypes.STRING,
        contactDetails :  DataTypes.TEXT,
        email          :  DataTypes.STRING,
        logo           :  DataTypes.STRING,
        imageURL       :  DataTypes.STRING,
        website        :  DataTypes.STRING,
        address        :  DataTypes.STRING,
        category       :  DataTypes.STRING
    })
    return Advertisement
}



