import { ChatMessage } from 'nodecg-twitchie'

import { ChatMessageTypeWithNotifications, ChatNotificationMessage } from '../../types'
import * as actions from '../actions/chat'

let id = 0

export interface ChatState {
  channel: string
  messages: Array<ChatMessage | ChatNotificationMessage>
}

const defaultState: ChatState = {
  channel: '',
  messages: [],
}

const createNaughtyUserFilter = (user: string) => (message: ChatMessage | ChatNotificationMessage) => {
  if (message.type === ChatMessageTypeWithNotifications.NOTIFICATION) {
    return
  }

  return user !== message.user.name
}

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
            type: ChatMessageTypeWithNotifications.NOTIFICATION,
          },
        ],
      }
    case actions.CHAT_MESSAGE:
      id += 1

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
