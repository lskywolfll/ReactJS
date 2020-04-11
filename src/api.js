const BASE_URL = 'http://localhost:3001';

async function callApi(endpoint, options = {}) {
  options.headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  badges: {
    list() {
      // throw new Error('500: Server Error');
      return callApi('/asistant');
    },
    create(badge) {
      // throw Error('Server error');
      return callApi(`/asistant`, {
        method: 'POST',
        body: JSON.stringify(badge),
      });
    },
    read(badgeId) {
      return callApi(`/asistant/${badgeId}`);
    },
    update(badgeId, updates) {
      return callApi(`/asistant/${badgeId}`, {
        method: 'PUT',
        body: JSON.stringify(updates),
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(badgeId) {
      return callApi(`/asistant/${badgeId}`, {
        method: 'DELETE',
      });
    },
  },
};

export default api;
