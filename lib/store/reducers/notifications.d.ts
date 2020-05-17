import { Notification } from '../../types';
import * as actions from '../actions/notifications';
export declare type NotificationsState = Notification[];
declare const _default: (state: NotificationsState | undefined, action: actions.NotificationActions) => NotificationsState;
export default _default;
