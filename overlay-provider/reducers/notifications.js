let currentNotificationId = 0

const defaultState = {
  queue: [],
}

const createNotificationFilter = idToRemove => notification => (
  notification.id !== idToRemove
)

export default (
  state = defaultState,
  {
    type,
    payload: {
      id,
      user,
      topic,
      scale,
      message,
    } = {},
  },
) => {
  switch (type) {
    case 'QUEUE_NOTIFICATION':
      currentNotificationId += 1

      return {
        ...state,
        queue: [
          ...state.queue,
          {
            id: currentNotificationId,
            user,
            topic,
            scale,
            message,
          },
        ],
      }
    case 'CLEAR_NOTIFICATION':
      return {
        ...state,
        queue: state.queue.filter(
          createNotificationFilter(id)
        ),
      }
    default:
      return state
  }
}
