import * as actions from '../actions/chat'

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
    case actions.CHAT_MESSAGE:
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
    case actions.CLEAR_USER_MESSAGES:
      return {
        ...state,
        messages: state.messages.filter(
          createNaughtyUserFilter(user)
        ),
      }
    case actions.CHAT_CHANNEL_JOIN:
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
