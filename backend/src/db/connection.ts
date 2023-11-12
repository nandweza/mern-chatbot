import { connect, disconnect } from "mongoose";

async function connectToDB() {
    try {
        await connect(process.env.MONGODB_URL);
    } catch (error) {
        console.log(error);
        throw new Error("Cannot connect to mongodb");
    }
}

async function disconnectFromDB() {
    try {
        await disconnect();
    } catch (error) {
        console.log(error);
        throw new Error("Failed to disconnect from db.");
    }
}

export { connectToDB, disconnectFromDB };
