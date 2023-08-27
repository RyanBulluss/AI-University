import sendRequest from "./send-request";
const BASE_URL = "/api/user/chats";

export async function sendMessage(chatInfo) {
  return sendRequest(BASE_URL, "POST", chatInfo);
}
