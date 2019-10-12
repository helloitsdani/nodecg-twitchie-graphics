import { Notification } from '../../types'

export const QUEUE_NOTIFICATION = 'notifications/QUEUE_NOTIFICATION'
export const CLEAR_NOTIFICATION = 'notifications/CLEAR_NOTIFICATION'

export interface QueueNotificationAction {
  type: typeof QUEUE_NOTIFICATION
  payload: Notification
}

export interface ClearNotificationAction {
  type: typeof CLEAR_NOTIFICATION
  payload: string
}

export type NotificationActions = QueueNotificationAction | ClearNotificationAction

export const queueNotificationAction = (notification: Notification): NotificationActions => ({
  type: QUEUE_NOTIFICATION,
  payload: notification,
})

export const clearNotificationAction = (id: string): NotificationActions => ({
  type: CLEAR_NOTIFICATION,
  payload: id,
})
