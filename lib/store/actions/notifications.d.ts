import { Notification } from '../../types';
export declare const QUEUE_NOTIFICATION = "notifications/QUEUE_NOTIFICATION";
export declare const CLEAR_NOTIFICATION = "notifications/CLEAR_NOTIFICATION";
export interface QueueNotificationAction {
    type: typeof QUEUE_NOTIFICATION;
    payload: Notification;
}
export interface ClearNotificationAction {
    type: typeof CLEAR_NOTIFICATION;
    payload: string;
}
export declare type NotificationActions = QueueNotificationAction | ClearNotificationAction;
export declare const queueNotificationAction: (notification: Notification) => NotificationActions;
export declare const clearNotificationAction: (id: string) => NotificationActions;
