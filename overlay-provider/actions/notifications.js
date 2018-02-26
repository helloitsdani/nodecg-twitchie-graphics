const queueNotification = ({
  user,
  topic,
  scale,
  message,
}) => ({
  type: 'QUEUE_NOTIFICATION',
  payload: {
    user,
    topic,
    scale,
    message,
  },
})

const clearNotification = id => ({
  type: 'CLEAR_NOTIFICATION',
  payload: {
    id,
  },
})

export {
  queueNotification,
  clearNotification,
}
