import { ChatActionPayload, ChatBanPayload, ChatMessagePayload, ChatTimeoutPayload } from 'nodecg-twitchie'

import { Notification } from '../../types'

const CHAT_MESSAGE = 'chat/MESSAGE'
const CHAT_NOTIFICATION = 'chat/NOTIFICATION'
const CHAT_JOIN_CHANNEL = 'chat/JOIN_CHANNEL'
const CHAT_CLEAR_USER_MESSAGES = 'chat/CLEAR_USER_MESSAGES'

interface GetMessageAction {
  type: typeof CHAT_MESSAGE
  payload: ChatActionPayload | ChatMessagePayload
}

interface GetNotificationAction {
  type: typeof CHAT_NOTIFICATION
  payload: {
    user: string
    topic: string
    message: string
  }
}

interface JoinChannelAction {
  type: typeof CHAT_JOIN_CHANNEL
  payload: string
}

interface ClearChatMessagesAction {
  type: typeof CHAT_CLEAR_USER_MESSAGES
  payload: ChatBanPayload | ChatTimeoutPayload
}

type ChatActions = GetMessageAction | GetNotificationAction | JoinChannelAction | ClearChatMessagesAction

const getMessage = (message: ChatActionPayload | ChatMessagePayload): ChatActions => ({
  type: CHAT_MESSAGE,
  payload: message,
})

const getNotification = (notification: Notification) => ({
  type: CHAT_NOTIFICATION,
  payload: notification,
})

const joinChannel = (channel: string): ChatActions => ({
  type: CHAT_JOIN_CHANNEL,
  payload: channel,
})

const clearUserMessages = (modAction: ChatBanPayload | ChatTimeoutPayload): ChatActions => ({
  type: CHAT_CLEAR_USER_MESSAGES,
  payload: modAction,
})

export {
  CHAT_MESSAGE,
  CHAT_NOTIFICATION,
  CHAT_JOIN_CHANNEL,
  CHAT_CLEAR_USER_MESSAGES,
  getMessage,
  getNotification,
  joinChannel,
  clearUserMessages,
  ChatActions,
}
