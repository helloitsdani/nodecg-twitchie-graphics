import {
  type ChatRemoveMessagePayload,
  type ChatActionPayload,
  type ChatBanPayload,
  type ChatMessagePayload,
  type ChatTimeoutPayload,
} from 'nodecg-twitchie'

import { Notification } from '../../types'

export const CHAT_MESSAGE = 'chat/MESSAGE'
export const CHAT_NOTIFICATION = 'chat/NOTIFICATION'
export const CHAT_JOIN_CHANNEL = 'chat/JOIN_CHANNEL'
export const CHAT_REMOVE_MESSAGE = 'chat/REMOVE_MESSAGE'
export const CHAT_CLEAR_USER_MESSAGES = 'chat/CLEAR_USER_MESSAGES'

export interface GetMessageAction {
  type: typeof CHAT_MESSAGE
  payload: ChatActionPayload | ChatMessagePayload
}

export interface GetNotificationAction {
  type: typeof CHAT_NOTIFICATION
  payload: Notification
}

export interface JoinChannelAction {
  type: typeof CHAT_JOIN_CHANNEL
  payload: string
}

export interface ChatRemoveMessageAction {
  type: typeof CHAT_REMOVE_MESSAGE
  payload: ChatRemoveMessagePayload
}

export interface ClearChatMessagesAction {
  type: typeof CHAT_CLEAR_USER_MESSAGES
  payload: ChatBanPayload | ChatTimeoutPayload
}

export type ChatActions =
  | GetMessageAction
  | GetNotificationAction
  | JoinChannelAction
  | ChatRemoveMessageAction
  | ClearChatMessagesAction

export const getMessageAction = (message: ChatActionPayload | ChatMessagePayload): ChatActions => ({
  type: CHAT_MESSAGE,
  payload: message,
})

export const getNotificationAction = (notification: Notification) => ({
  type: CHAT_NOTIFICATION,
  payload: notification,
})

export const joinChannelAction = (channel: string): ChatActions => ({
  type: CHAT_JOIN_CHANNEL,
  payload: channel,
})

export const removeMessageAction = (modAction: ChatRemoveMessagePayload): ChatActions => ({
  type: CHAT_REMOVE_MESSAGE,
  payload: modAction,
})

export const clearUserMessagesAction = (modAction: ChatBanPayload | ChatTimeoutPayload): ChatActions => ({
  type: CHAT_CLEAR_USER_MESSAGES,
  payload: modAction,
})
