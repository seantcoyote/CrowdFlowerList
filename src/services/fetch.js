export const checkFetchStatus = (response) => {
  if (response.ok) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

export const getFetchData = (response) => {
  return response.json()
}
