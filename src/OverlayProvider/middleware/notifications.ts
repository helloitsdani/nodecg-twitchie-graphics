import { AnyAction, Middleware } from 'redux'

import { Notification } from '../../types'
import * as chatActions from '../actions/chat'
import * as notificationActions from '../actions/notifications'

interface NotificationAction {
  type: string
  payload: Notification
}

const isNotificationAction = ({ type }: AnyAction) => type === notificationActions.QUEUE_NOTIFICATION

const notificationMiddleware: Middleware = () => next => (action: AnyAction | NotificationAction) => {
  if (!isNotificationAction(action)) {
    return next(action)
  }

  const { payload } = action as NotificationAction
  const chatAction = chatActions.getNotification(payload)

  return next(chatAction)
}

export default notificationMiddleware
