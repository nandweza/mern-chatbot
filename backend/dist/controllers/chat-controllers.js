import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";
import { OpenAIApi } from "openai";
export const generateChatComplition = async (req, res, next) => {
    const { message } = req.body;
    try {
        const user = User.findById(res.locals.jwtData.id);
        if (!user)
            return res
                .status(401)
                .json({ message: "User not registered or Token mulfunctioned" });
        //grab chats of user
        const chats = (await user).chats.map(({ role, content }) => ({
            role,
            content
        }));
        chats.push({ content: message, role: "user" });
        (await user).chats.push({ content: message, role: "user" });
        //send all chats with new one to openAI API
        const config = configureOpenAI();
        const openai = new OpenAIApi(config);
        //get latest response
        const chatResponse = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: chats,
        });
        (await user).chats.push(chatResponse.data.choices[0].message);
        (await user).save();
        return res.status(200).json({ chats: (await user).chats });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
//# sourceMappingURL=chat-controllers.js.map