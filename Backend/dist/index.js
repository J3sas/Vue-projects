var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import dotenv from "dotenv";
import Country from './database/models/Country.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.get("/", (req, res) => {
    res.send('Shaman king to the earth');
});
// app.get("/all-countries", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
//     try {
//         const allCountries = yield Country.findAll();
//         res.status(200).send(allCountries);
//     }
//     catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }));
app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
