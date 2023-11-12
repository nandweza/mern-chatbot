import app from "./app.js";
import { connectToDB } from "./db/connection.js";

const port = process.env.PORT || 5000;

connectToDB()
    .then(() => {
        app.listen(port, () => 
            console.log("server running... & db connected!!!")
        );
    })
    .catch((error) => console.log(error));
