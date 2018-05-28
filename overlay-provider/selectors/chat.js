const getChat = (state) => (
  state.chat
)

const getChatChannel = (state) => (
  getChat(state).channel
)

const getChatMessages = (state) => (
  getChat(state).messages
)

export {
  getChat,
  getChatChannel,
  getChatMessages,
}
