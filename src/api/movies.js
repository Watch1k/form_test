const handleErrors = async (response) => {
  if (response.ok) {
    return response.json()
  }
  throw new Error(response.statusText)
}

/**
 * Get array movies
 *
 * @returns {promise}
 */
export const fetchMovies = async (queryParams = {}) => {
  const { apiKey, searchValue = '', page } = queryParams
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchValue}&page=${page}`;
  const response = await fetch(url, {
    method: 'GET',
  })

  return await handleErrors(response)
}
