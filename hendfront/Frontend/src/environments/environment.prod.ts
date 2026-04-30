/** Build production : ajuster l’URL si le backend n’est pas sur le même hôte. */
export const environment = {
  production: true,
  apiUrl: 'http://localhost:8555/courses/api',
  coursesLegacyUrl: 'http://localhost:8555/courses',
};
