var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DataTypes, Model } from 'sequelize';
import sequelize from '../connection.js';
class Country extends Model {
}
Country.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    country_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country_name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'country',
});
// Create the table in the database
sequelize.sync({ force: true })
    .then(() => {
    console.log('User table created successfully.');
})
    .catch((error) => {
    console.error('Error creating user table:', error);
});
// Usage example:
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield sequelize.authenticate();
        console.log('Connection has been established successfully.');
        // Create a new user
        const newCountry = yield Country.create({
            id: 2,
            country_code: 'AF',
            country_name: 'sdfasdf'
        });
        console.log('New country created:', newCountry.toJSON());
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}))();
export default Country;
