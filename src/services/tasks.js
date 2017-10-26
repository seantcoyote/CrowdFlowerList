import {url} from '../constants'

export const checkFetchStatus = (response) => {
  if (response.ok) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

const fetchTasks = () => {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(checkFetchStatus)
    .then((response) => { resolve(response.json()) })
    .catch((error) => { reject(error) })
  })
}

const sendTasks = (tasks) => {
  const options = {
    method: 'POST',
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(tasks),
    mode: "cors"
  }

  return new Promise((resolve, reject) => {
    fetch(url, options)
    .then(checkFetchStatus)
    .then((response) => { resolve(response) })
    .catch((error) => { reject(error) })
  })
}

export {
  fetchTasks,
  sendTasks
}
