export const signupAPI = (data) => {
  const signupEndpoint = ' http://www.mocky.io/v2/5defab092f0000e7848e0c9e'

  return fetch(signupEndpoint, { method: 'POST', body: JSON.stringify(data) }).then(
    res => res.json()
  );
}
