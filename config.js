import dotenv from "dotenv";

dotenv.config();

export const config = {
    PORT: process.env.PORT,
    ATLAS_URI: process.env.ATLAS_URI
}
