import { ApiClient } from "chat-app-protos/Chatapp_apiservice_v1ServiceClientPb";
import { config } from "../config";

export const apiClient = new ApiClient(config.envoyUrl);
