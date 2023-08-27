import sendRequest from "./send-request";
const BASE_URL = "/api/user/chats";

export async function sendMessage(chatInfo) {
  return sendRequest(BASE_URL, "POST", chatInfo);
}

export async function getMessages(ids) {
  return sendRequest(`${BASE_URL}/${ids.senderId}/${ids.receiverId}`);
}
