import { StoreApi } from 'zustand'
import { produce } from 'immer'

import {
  NotificationType,
  ChatMessageTypeWithNotifications,
  ChatMessage,
  ChatNotification,
  TwitchieStore,
} from '../types'
import twitchie from '../twitchie'
import { DEFAULT_STATE } from './store'

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

const bindStoreToAPIEvents = (store: StoreApi<TwitchieStore>) => {
  let eventId = 0

  twitchie.graphics.brb.on('change', (newBRB) => {
    store.setState({ brb: newBRB ?? DEFAULT_STATE.brb })
  })

  twitchie.game.info.on('change', (newGame) => {
    store.setState({ game: newGame ?? DEFAULT_STATE.game })
  })

  twitchie.graphics.social.on('change', (newAccounts) => {
    store.setState({ social: newAccounts ?? DEFAULT_STATE.social })
  })

  twitchie.stream.info.on('change', (newStream) => {
    store.setState({ stream: newStream ?? DEFAULT_STATE.stream })
  })

  /* Chat */
  twitchie.channel.id.on('change', (channel, oldChannel) => {
    if (channel === oldChannel) {
      return
    }

    store.setState({
      chat: {
        ...DEFAULT_STATE.chat,
        channel,
      },
    })
  })

  twitchie.on('chat.message', ({ message: newMessage }) => {
    store.setState(
      produce((state: TwitchieStore) => {
        state.chat.items.push({
          ...newMessage,
          id: `message-${newMessage.id ?? ++eventId}`,
          type: ChatMessageTypeWithNotifications.message,
        })
      }),
    )
  })

  twitchie.on('chat.action', ({ message: newMessage }) => {
    store.setState(
      produce((state: TwitchieStore) => {
        state.chat.items.push({
          ...newMessage,
          id: `message-${newMessage.id ?? ++eventId}`,
          type: ChatMessageTypeWithNotifications.action,
        })
      }),
    )
  })

  /* Chat Moderation */
  twitchie.on('chat.removeMessage', ({ messageId }) => {
    store.setState(
      produce((state: TwitchieStore) => {
        state.chat.items = state.chat.items.filter((message) => message.id !== messageId)
      }),
    )
  })

  twitchie.on('chat.ban', ({ user }) => {
    store.setState(
      produce((state: TwitchieStore) => {
        state.chat.items = state.chat.items.filter(createNaughtyUserFilter(user))
      }),
    )
  })

  twitchie.on('chat.timeout', ({ user }) => {
    store.setState(
      produce((state: TwitchieStore) => {
        state.chat.items = state.chat.items.filter(createNaughtyUserFilter(user))
      }),
    )
  })

  /* Notifications */
  twitchie.on('user.new', (newChatter) => {
    store.setState(
      produce((state: TwitchieStore) => {
        state.notifications.push({
          id: `notification-${++eventId}`,
          topic: NotificationType.new_chatter,
          ...newChatter,
        })
      }),
    )
  })

  twitchie.on('user.follower', (follower) => {
    store.setState(
      produce((state: TwitchieStore) => {
        state.notifications.push({
          id: `notification-${++eventId}`,
          topic: NotificationType.follower,
          ...follower,
        })
      }),
    )
  })

  twitchie.on('user.subscription', (subscriber) => {
    store.setState(
      produce((state: TwitchieStore) => {
        state.notifications.push({
          id: `notification-${++eventId}`,
          topic: NotificationType.subscriber,
          ...subscriber,
        })
      }),
    )
  })

  twitchie.on('user.subscription.gift', (gift) => {
    store.setState(
      produce((state: TwitchieStore) => {
        state.notifications.push({
          id: `notification-${++eventId}`,
          topic: NotificationType.subscriber_gift,
          ...gift,
        })
      }),
    )
  })

  twitchie.on('user.subscription.community', (gifts) => {
    store.setState(
      produce((state: TwitchieStore) => {
        state.notifications.push({
          id: `notification-${++eventId}`,
          topic: NotificationType.community_gift,
          ...gifts,
        })
      }),
    )
  })
}

export default bindStoreToAPIEvents
