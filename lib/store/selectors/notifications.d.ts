import { OverlayState } from '../reducers';
declare const getNotifications: (state: OverlayState) => import("../reducers/notifications").NotificationsState;
declare const getNextNotification: (state: OverlayState) => import("../..").Notification;
export { getNotifications, getNextNotification };
