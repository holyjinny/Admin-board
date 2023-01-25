import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

/**
 * @description DATA IMPORTS
 */
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStats from "./models/ProductStats.js";
import Transaction from "./models/Transaction.js";
import OverallStat from "./models/OverallStat.js";
import { dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat } from "./data/index.js";

/**
 * @description CONFIGURATION
 */
dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/**
 * @description ROUTES
 */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/**
 * @description MONGOOSE
 */
const PORT = process.env.PORT || 9000;

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`서버 포트 : ${PORT}`));

    /**
     * @description ONLY ADD DATA ONE TIME
     */
    // User.insertMany(dataUser);
    // Product.insertMany(dataProduct);
    // ProductStats.insertMany(dataProductStat);
    // Transaction.insertMany(dataTransaction);
    // OverallStat.insertMany(dataOverallStat);
}).catch((error) => console.error(`연결 실패 : ${error}`));