import { Notification } from '../../types'
import * as actions from '../actions/notifications'

export type NotificationsState = Notification[]

let id = 0

const defaultState: NotificationsState = []

const createNotificationFilter = (idToRemove: string) => (notification: Notification) => notification.id !== idToRemove

// eslint-disable-next-line @typescript-eslint/default-param-last
export default (state: NotificationsState = defaultState, action: actions.NotificationActions): NotificationsState => {
  switch (action.type) {
    case actions.QUEUE_NOTIFICATION:
      id += 1

      return [
        ...state,
        {
          ...action.payload,
          id: `notification-${id}`,
        },
      ]

    case actions.CLEAR_NOTIFICATION:
      return state.filter(createNotificationFilter(action.payload))

    default:
      return state
  }
}
