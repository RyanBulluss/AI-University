import sendRequest from "./send-request";
const BASE_URL = "/api/subjects";

export async function getAllSubjects() {
  return sendRequest(BASE_URL);
}
