import * as request from "./requester";

const baseUrl = 'http://localhost:3030/data/journals';

export const getAll = () =>  request.get(baseUrl);

export const getAllByOwner = (ownerId) =>  request.get(`${baseUrl}?where=_ownerId%3D%22${ownerId}%22`);

export const getAllShared = () =>  request.get(`${baseUrl}?where=blog%3Dtrue`);

export const getOne = (entryId) => request.get(`${baseUrl}/${entryId}`);

export const create = (journalEntry) => request.post(baseUrl, journalEntry);

export const edit = (entryId, journalEntry) => request.put(`${baseUrl}/${entryId}`, journalEntry);

export const del = (entryId) => request.del(`${baseUrl}/${entryId}`);


