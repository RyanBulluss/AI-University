import sendRequest from "./send-request";
const BASE_URL = "/api/teachers";

export async function getAllTeachers() {
  return sendRequest(BASE_URL);
}