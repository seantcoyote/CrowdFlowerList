import {updateSessionEvents} from '../actions/sessionActions'
import {checkFetchStatus} from '../services/fetch'
import {messageServiceInterval} from '../constants/'

let messageServiceIntervalID

const saveEvents = (sessionID, url, courseID, jwt, eventsJSON) => {
  let mode
  let options

  const urlString = `${url}?course_id=${courseID}&session_id=${sessionID}&jwt=${jwt}`

  let httpHeaders = new Headers({
    "Content-Type": "application/json"
  })

  mode = (process.env.NODE_ENV === 'production') ? 'same-origin' : 'cors'

  options = {
    method: 'post',
    headers: httpHeaders,
    mode: mode,
    body: eventsJSON
  }

  const request = new Request(urlString, options)

  return new Promise((resolve, reject) => {
    fetch(request)
    .then(checkFetchStatus)
    .then((response) => { resolve(response) })
    .catch((error) => { reject(error) })
  })
}

let sendMessages = (store, sessionID, sessionConfig) => { // "let" because it needs to be bound to args later
  console.log('Msg service running...')

  const events = store.getState().sessionData.sessionEvents
  let newEvents = events.filter(event => event.saved === false)

  if (newEvents.length > 0) {
    // Remove unnecessary 'saved' keys before sending data
    newEvents = newEvents.map(event => {
      let updatedEvent = {}
      Object.keys(event)
      .filter(key => key !== 'saved')
      .forEach(key => {
        updatedEvent[key] = event[key]
      })
      return updatedEvent
    })
    const newEventsObject = {'events': newEvents}
    const eventsData = JSON.stringify(newEventsObject)

    saveEvents(sessionID, sessionConfig.endpoints.events, sessionConfig.courseID, sessionConfig.jwt, eventsData)
    .then(() => {
      let updatedEvents = events.map(event => {
        let updated = newEvents.filter(newEvent => newEvent.id === event.id)
        if (updated) {
          return {...event, saved: true}
        }
        return event
      })
      store.dispatch(updateSessionEvents(updatedEvents)) // Update 'saved' to true
    })
    .catch(error => { throw error })
  }
}

const startMessageService = (store, sessionConfig, sessionID) => {
  sendMessages = sendMessages.bind(null, store, sessionID, sessionConfig)
  messageServiceIntervalID = setInterval(sendMessages, messageServiceInterval)
}

const stopMessageService = () => {
  clearInterval(messageServiceIntervalID)
  console.log('Events Message Service stopped.')
}

export {
  startMessageService,
  stopMessageService
}
