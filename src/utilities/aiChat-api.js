import sendRequest from "./send-request";
const BASE_URL = "/api/ai/chats";

export async function sendQuestion(chatInfo) {
  return sendRequest(BASE_URL, "POST", chatInfo);
}

export async function getMessages(ids) {
  return sendRequest(`${BASE_URL}/${ids.student}/${ids.teacher}`);
}

export async function sendAnswer(info) {
  return sendRequest(`${BASE_URL}/ai`, 'POST', info);
}