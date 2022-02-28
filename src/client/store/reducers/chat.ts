import { ChatMessageTypeWithNotifications, ChatMessage, ChatNotification, NotificationType } from '../../types'
import * as actions from '../actions/chat'

let id = 0

export interface ChatState {
  channel: string
  items: (ChatMessage | ChatNotification)[]
}

const defaultState: ChatState = {
  channel: '',
  items: [],
}

const createNaughtyUserFilter = (user: string) => (message: ChatMessage | ChatNotification) => {
  if (message.type !== ChatMessageTypeWithNotifications.notification) {
    return user !== message.user.name
  }

  if (message.topic === NotificationType.community_gift) {
    return user !== message.gifter
  }

  if (message.topic === NotificationType.subscriber_gift) {
    return user !== message.name && user !== message.gifter
  }

  if (message.topic === NotificationType.follower) {
    return user !== message.from_name
  }

  return user !== message.name
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export default (state: ChatState = defaultState, action: actions.ChatActions): ChatState => {
  switch (action.type) {
    case actions.CHAT_NOTIFICATION:
      id += 1

      return {
        ...state,
        items: [
          ...state.items,
          {
            ...action.payload,
            id: `notification-${action.payload.id ?? id}`,
            type: ChatMessageTypeWithNotifications.notification,
          },
        ],
      }

    case actions.CHAT_MESSAGE:
      id += 1

      return {
        ...state,
        items: [
          ...state.items,
          {
            ...action.payload.message,
            id: `message-${action.payload.message.id ?? id}`,
            type: ChatMessageTypeWithNotifications[action.payload.message.type],
          },
        ],
      }

    case actions.CHAT_REMOVE_MESSAGE:
      return {
        ...state,
        items: state.items.filter((message) => message.id !== action.payload.messageId),
      }

    case actions.CHAT_CLEAR_USER_MESSAGES:
      return {
        ...state,
        items: state.items.filter(createNaughtyUserFilter(action.payload.user)),
      }

    case actions.CHAT_JOIN_CHANNEL:
      return action.payload !== state.channel
        ? {
            channel: action.payload,
            items: [],
          }
        : state

    default:
      return state
  }
}
