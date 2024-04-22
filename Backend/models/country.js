"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('world', 'Wilton24', '12345678', {
    host: 'localhost',
    dialect: 'mariadb',
    port: 3306,
});
class Country extends sequelize_1.Model {
}
Country.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    country_code: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    country_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Country',
    timestamps: false,
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize.sync();
    console.log('Countries model synchronized successfully');
}))();
exports.default = Country;
