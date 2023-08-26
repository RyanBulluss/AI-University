import sendRequest from "./send-request";
const BASE_URL = "/api/teachers";

export async function getAllTeachers() {
  return sendRequest(BASE_URL);
}

export async function createTeacher(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}