export const loginAPI = (data) => {
  const loginEndpoint = ' http://www.mocky.io/v2/5defab092f0000e7848e0c9e'
  return fetch(loginEndpoint, { method: 'POST', body: JSON.stringify(data) }).then(
    res => res.json()
  );
}
