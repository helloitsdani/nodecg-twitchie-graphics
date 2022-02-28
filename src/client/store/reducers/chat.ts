import { type ChatMessage } from 'nodecg-twitchie'

import { ChatMessageTypeWithNotifications, ChatNotificationMessage, NotificationType } from '../../types'
import * as actions from '../actions/chat'

let id = 0

export interface ChatState {
  channel: string
  messages: (ChatMessage | ChatNotificationMessage)[]
}

const defaultState: ChatState = {
  channel: '',
  messages: [],
}

const createNaughtyUserFilter = (user: string) => (message: ChatMessage | ChatNotificationMessage) => {
  if (message.type !== ChatMessageTypeWithNotifications.NOTIFICATION) {
    return user !== message.user.name
  }

  if (message.topic === NotificationType.COMMUNITY_GIFT) {
    return user !== message.gifter
  }

  if (message.topic === NotificationType.SUBSCRIBER_GIFT) {
    return user !== message.name && user !== message.gifter
  }

  if (message.topic === NotificationType.FOLLOWER) {
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
        messages: [
          ...state.messages,
          {
            ...action.payload,
            id: `notification-${id}`,
            type: ChatMessageTypeWithNotifications.NOTIFICATION,
          },
        ],
      }

    case actions.CHAT_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            ...action.payload.message,
            id: `message-${id}`,
          },
        ],
      }

    case actions.CHAT_REMOVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((message) => message.id !== action.payload.messageId),
      }

    case actions.CHAT_CLEAR_USER_MESSAGES:
      return {
        ...state,
        messages: state.messages.filter(createNaughtyUserFilter(action.payload.user)),
      }

    case actions.CHAT_JOIN_CHANNEL:
      return action.payload !== state.channel
        ? {
            channel: action.payload,
            messages: [],
          }
        : state

    default:
      return state
  }
}
