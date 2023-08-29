import sendRequest from "./send-request";
const BASE_URL = "/api/notes";

export async function createNote(input) {
  return sendRequest(BASE_URL, 'POST', input);
}