import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/journals';

export const getAll = () =>  request.get(baseUrl);

export const create = (journalEntry) => request.post(baseUrl, journalEntry);



