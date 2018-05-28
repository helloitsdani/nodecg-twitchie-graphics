const CHAT_MESSAGE = 'chat/MESSAGE'
const CHAT_JOIN_CHANNEL = 'chat/JOIN_CHANNEL'
const CHAT_CLEAR_USER_MESSAGES = 'chat/CLEAR_USER_MESSAGES'

const getMessage = (user, message, topic) => ({
  type: CHAT_MESSAGE,
  payload: {
    user,
    message,
    topic,
  },
})

const joinChannel = (channel) => ({
  type: CHAT_JOIN_CHANNEL,
  payload: {
    channel,
  },
})

const clearUserMessages = (user) => ({
  type: CHAT_CLEAR_USER_MESSAGES,
  payload: {
    user,
  },
})

export {
  CHAT_MESSAGE,
  CHAT_JOIN_CHANNEL,
  CHAT_CLEAR_USER_MESSAGES,
  getMessage,
  joinChannel,
  clearUserMessages,
}
