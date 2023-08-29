import sendRequest from "./send-request";
const BASE_URL = "/api/notebooks";

export async function getUserNotebooks(userId) {
  return sendRequest(`${BASE_URL}/${userId}`);
}

export async function createNotebook(input) {
  return sendRequest(BASE_URL, 'POST', input);
}
