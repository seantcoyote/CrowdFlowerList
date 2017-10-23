import {checkFetchStatus} from '../services/fetch'
import {url} from '../constants'

const fetchTasks = () => {
  const mode = (process.env.NODE_ENV === 'production') ? 'same-origin' : 'cors'
  const httpHeaders = new Headers({
    "Content-Type": "application/json"
  })
  const options = {
    method: 'get',
    headers: httpHeaders
  }

  const request = new Request(url, options)

  return new Promise((resolve, reject) => {
    fetch(request)
    .then(checkFetchStatus)
    .then((response) => { resolve(response) })
    .catch((error) => { reject(error) })
  })
}

const getTasks = () => {
  return new Promise((resolve, reject) => {
    resolve({ // Test data
      tasks: {
        1: {
          id: 1,
          title: 'Buy new surfboard'
        },
        2: {
          id: 2,
          title: 'Hike the ridge'
        },
        3: {
          id: 3,
          title: 'Do dishes'
        }
      }
    })
    // let req = new XMLHttpRequest()
    // req.onload = () => {
    //   if (req.status === 200) {
    //     let data = JSON.parse(req.response)
    //     resolve(data)
    //   } else {
    //     reject(Error("Failed to fetch chapters manifest due to server error:" + req.status))
    //   }
    // }
    // req.onerror = () => {
    //   reject(Error("Failed to fetch chapters manifest due to network error."))
    // }
    // req.open("GET", `${url}?course_id=${courseID}&jwt=${jwt}`)
    // req.send()
  })
}

export {
  fetchTasks,
  getTasks
}
