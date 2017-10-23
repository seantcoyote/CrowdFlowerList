// import fetch from 'isomorphic-fetch' // TODO: Use fetch instead of XHR

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
  getTasks
}
