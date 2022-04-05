import { BASE_SERVER_URL, SERVER_PATH } from '../constant/path';

const postServer = (baseUrl) => (path) => async (bodyData) => {
  const response = await fetch(`${baseUrl}/${path}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyData),
  });

  return [response.ok, await response.json()];
};

const postLocalServer = postServer(BASE_SERVER_URL);

export const postLoginServer = postLocalServer(SERVER_PATH.LOGIN);
export const postRegisterServer = postLocalServer(SERVER_PATH.REGISTER);
