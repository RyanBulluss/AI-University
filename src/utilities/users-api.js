import sendRequest from "./send-request";
const BASE_URL = "/api/users";

export async function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export async function login(userData) {
  return sendRequest(`${BASE_URL}/login`, 'POST', userData);
}

export async function demo() {
  return sendRequest(`${BASE_URL}/demo`, 'POST', {});
}

export async function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export async function updateUserImage(newUrl) {
  return sendRequest(`${BASE_URL}/image`, 'PUT', newUrl);
}

export async function updateLevel(newLevel) {
  return sendRequest(`${BASE_URL}/level`, 'PUT', newLevel);
}

export async function getAllStudents() {
  return sendRequest(BASE_URL);
}

export async function getOneStudent(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function premiumUser(userId) {
  return sendRequest(`${BASE_URL}/premium`, 'PUT', userId);
}

