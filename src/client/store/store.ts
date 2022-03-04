import { SetState, GetState, Mutate, StoreApi } from 'zustand'
import create from 'zustand/vanilla'
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
  notifications: [],
  chat: {
    channel: undefined,
    items: [],
  },
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

// it seems to be a known issue that typing gets really
// weird when using zustand's devtools--this is the closest
// we can get, but it doesn't infer completely yet
export default create<
  TwitchieStore,
  SetState<TwitchieStore>,
  GetState<TwitchieStore>,
  Mutate<StoreApi<TwitchieStore>, [['zustand/devtools', never]]>
>(
  devtools(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, _, __) => ({
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
