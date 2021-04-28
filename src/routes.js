const URL = 'https://front-test.beta.aviasales.ru';
const routes = {
  getSearchIdPath: () => [URL, 'search'].join('/'),
  getTicketsPath: (id) => [URL, `tickets?searchId=${id}`].join('/'),
};
export default routes;
