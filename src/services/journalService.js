import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/journals';

export const getAll = () =>  request.get(baseUrl);

export const getOne = (entryId) => request.get(`${baseUrl}/${entryId}`);

export const create = (journalEntry) => request.post(baseUrl, journalEntry);

export const edit = (entryId, journalEntry) => request.put(`${baseUrl}/${entryId}`, journalEntry);


