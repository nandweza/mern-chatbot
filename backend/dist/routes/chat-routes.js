import { Router } from "express";
import { verifyToken } from "../utils/token-manager.js";
import { chatCompletionValidator, validate } from "../utils/validators.js";
import { generateChatComplition } from "../controllers/chat-controllers.js";
//protected api
const chatRoutes = Router();
chatRoutes.post("/new", validate(chatCompletionValidator), verifyToken, generateChatComplition);
export default chatRoutes;
//# sourceMappingURL=chat-routes.js.map