import { createStore } from 'zustand/vanilla'
import { devtools } from 'zustand/middleware'
import { produce } from 'immer'

import {
  ChatMessage,
  ChatNotification,
  TwitchieStore,
  Notification,
  ChatMessageTypeWithNotifications,
  NotificationType,
} from '../types'

export const DEFAULT_STATE = {
  brb: {
    away: false,
    message: undefined,
  },
  game: undefined,
  social: [],
  stream: undefined,
  status: undefined,
  notifications: [],
  chat: {
    channel: undefined,
    items: [],
  },
} as any as TwitchieStore

const createNaughtyUserFilter = (user: string) => (message: ChatMessage | ChatNotification) => {
  if (message.type !== ChatMessageTypeWithNotifications.notification) {
    return user !== message.user.name && user !== message.user.username
  }

  if (message.topic === NotificationType.subscriber_gift) {
    return user !== message.gifterName && user !== message.gifterDisplayName
  }

  if (message.topic === NotificationType.follower) {
    return user !== message.userName && user !== message.userDisplayName
  }

  return true
}

export default createStore<TwitchieStore>()(
  devtools(
    (set) => ({
      ...DEFAULT_STATE,

      addChatItem: (newItem: ChatMessage | ChatNotification) =>
        set(
          produce((state: TwitchieStore) => {
            state.chat.items.push(newItem)
          }),
        ),

      removeChatItemById: (badId: string) =>
        set(
          produce((state: TwitchieStore) => {
            state.chat.items = state.chat.items.filter((item) => item.id !== badId)
          }),
        ),

      removeChatItemByName: (naughtyUsername: string) =>
        set(
          produce((state: TwitchieStore) => {
            state.chat.items = state.chat.items.filter(createNaughtyUserFilter(naughtyUsername))
          }),
        ),

      addNotification: (newNotification: Notification) =>
        set(
          produce((state: TwitchieStore) => {
            state.notifications.push(newNotification)
          }),
        ),

      removeNotificationById: (badId: string) =>
        set(
          produce((state: TwitchieStore) => {
            state.notifications = state.notifications.filter((notification) => notification.id !== badId)
          }),
        ),
    }),
    { name: 'twitchie' },
  ),
)
