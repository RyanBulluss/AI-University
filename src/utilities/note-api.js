import sendRequest from "./send-request";
const BASE_URL = "/api/notes";

export async function createNote(input) {
  return sendRequest(BASE_URL, 'POST', input);
}

export async function deleteNote(notebookId, noteId) {
  return sendRequest(`${BASE_URL}/${notebookId}/${noteId}`, 'POST');
}