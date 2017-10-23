export const checkFetchStatus = (response) => {
  console.log('response:', response)
  if (response.ok) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

export const getFetchData = (response) => {
  return response.json()
}
