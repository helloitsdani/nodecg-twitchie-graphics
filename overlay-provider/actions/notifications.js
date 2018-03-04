const QUEUE_NOTIFICATION = 'notifications/QUEUE_NOTIFICATION'
const CLEAR_NOTIFICATION = 'notifications/CLEAR_NOTIFICATION'

const queueNotification = ({
  user,
  topic,
  scale,
  message,
}) => ({
  type: QUEUE_NOTIFICATION,
  payload: {
    user,
    topic,
    scale,
    message,
  },
})

const clearNotification = id => ({
  type: CLEAR_NOTIFICATION,
  payload: {
    id,
  },
})

export {
  QUEUE_NOTIFICATION,
  CLEAR_NOTIFICATION,
  queueNotification,
  clearNotification,
}
