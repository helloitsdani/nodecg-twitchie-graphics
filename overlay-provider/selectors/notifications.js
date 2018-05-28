const getNotifications = (state) => (
  state.notifications
)

const getNextNotification = (state) => (
  getNotifications(state)[0]
)

export {
  getNotifications,
  getNextNotification,
}
