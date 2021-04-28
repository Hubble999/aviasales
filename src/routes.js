const URL = 'https://front-test.beta.aviasales.ru';
export default {
  getSearchIdPath: () => [URL, 'search'].join('/'),
  getTicketsPath: (id) => [URL, `tickets?searchId=${id}`].join('/'),
};
