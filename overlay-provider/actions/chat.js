const getMessage = (user, message) => ({
  type: 'CHAT_MESSAGE',
  payload: {
    user,
    message,
  },
})

const joinChannel = channel => ({
  type: 'CHAT_CHANNEL_JOIN',
  payload: {
    channel,
  },
})

const clearUserMessages = user => ({
  type: 'CLEAR_USER_MESSAGES',
  payload: {
    user,
  },
})

export {
  getMessage,
  joinChannel,
  clearUserMessages,
}
