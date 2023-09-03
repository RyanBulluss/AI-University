import sendRequest from "./send-request";
const BASE_URL = "/api/notebooks";

export async function getUserNotebooks(userId) {
  return sendRequest(`${BASE_URL}/${userId}`);
}

export async function createNotebook(input) {
  return sendRequest(BASE_URL, 'POST', input);
}

export async function deleteNotebook(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'POST');
}

export async function fillLibrary() {
  return sendRequest(`${BASE_URL}/library`);
}

export async function publish(id) {
  console.log(id)
  return sendRequest(`${BASE_URL}/publish/${id}`, 'POST');
}