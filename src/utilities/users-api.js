import sendRequest from "./send-request";
const BASE_URL = "/api/users";

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(userData) {
  return sendRequest(`${BASE_URL}/login`, 'POST', userData);
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export async function updateUserImage(newUrl) {
  return sendRequest(`${BASE_URL}/image`, 'PUT', newUrl);
}

export async function getAllStudents() {
  return sendRequest(BASE_URL);
}