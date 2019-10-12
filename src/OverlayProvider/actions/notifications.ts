import { Notification } from '../../types'

const QUEUE_NOTIFICATION = 'notifications/QUEUE_NOTIFICATION'
const CLEAR_NOTIFICATION = 'notifications/CLEAR_NOTIFICATION'

interface QueueNotificationAction {
  type: typeof QUEUE_NOTIFICATION
  payload: Notification
}

interface ClearNotificationAction {
  type: typeof CLEAR_NOTIFICATION
  payload: string
}

type NotificationActions = QueueNotificationAction | ClearNotificationAction

const queueNotification = (notification: Notification): NotificationActions => ({
  type: QUEUE_NOTIFICATION,
  payload: notification,
})

const clearNotification = (id: string): NotificationActions => ({
  type: CLEAR_NOTIFICATION,
  payload: id,
})

export { QUEUE_NOTIFICATION, CLEAR_NOTIFICATION, queueNotification, clearNotification, NotificationActions }
