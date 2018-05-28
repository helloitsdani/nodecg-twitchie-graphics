import * as actions from '../actions/notifications'

let currentNotificationId = 0

const defaultState = []

const createNotificationFilter = (idToRemove) => (notification) => (
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
    case actions.QUEUE_NOTIFICATION:
      currentNotificationId += 1

      return [
        ...state,
        {
          id: currentNotificationId,
          user,
          topic,
          scale,
          message,
        },
      ]
    case actions.CLEAR_NOTIFICATION:
      return state.filter(
        createNotificationFilter(id)
      )
    default:
      return state
  }
}
