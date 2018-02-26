let id = 0

const defaultState = {
  channel: '',
  messages: [],
}

const createNaughtyUserFilter = user => message => (
  user.id !== message.user.id
)

export default (
  state = defaultState,
  {
    type,
    payload: {
      user,
      message,
      channel,
    } = {},
  }
) => {
  switch (type) {
    case 'CHAT_MESSAGE':
      id += 1

      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id,
            user,
            message,
          },
        ],
      }
    case 'CLEAR_USER_MESSAGES':
      return {
        ...state,
        messages: state.messages.filter(
          createNaughtyUserFilter(user)
        ),
      }
    case 'CHAT_CHANNEL_JOIN':
      return (channel !== state.channel)
        ? {
          channel,
          messages: [],
        }
        : state
    default:
      return state
  }
}
