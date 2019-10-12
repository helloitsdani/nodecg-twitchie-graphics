import { OverlayState } from '../reducers'

const getNotifications = (state: OverlayState) => state.notifications

const getNextNotification = (state: OverlayState) => getNotifications(state)[0]

export { getNotifications, getNextNotification }
