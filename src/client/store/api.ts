import { StoreApi } from 'zustand'

import { NotificationType, ChatMessageTypeWithNotifications, TwitchieStore } from '../types'
import twitchie from '../twitchie'
import { DEFAULT_STATE } from './store'

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

  twitchie.stream.status.on('change', (newStatus) => {
    store.setState({ status: newStatus ?? DEFAULT_STATE.status })
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
    store.getState().addChatItem({
      ...newMessage,
      id: `message-${newMessage.id ?? ++eventId}`,
      type: ChatMessageTypeWithNotifications.message,
    })
  })

  twitchie.on('chat.action', ({ message: newMessage }) => {
    store.getState().addChatItem({
      ...newMessage,
      id: `message-${newMessage.id ?? ++eventId}`,
      type: ChatMessageTypeWithNotifications.action,
    })
  })

  /* Chat Moderation */
  twitchie.on('chat.removeMessage', ({ messageId }) => {
    store.getState().removeChatItemById(messageId)
  })

  twitchie.on('chat.ban', ({ user }) => {
    store.getState().removeChatItemByName(user)
  })

  twitchie.on('chat.timeout', ({ user }) => {
    store.getState().removeChatItemByName(user)
  })

  /* Notifications */
  twitchie.on('ritual.new', (newChatter) => {
    store.getState().addNotification({
      ...newChatter,
      id: `notification-${++eventId}`,
      topic: NotificationType.new_chatter,
    })
  })

  twitchie.on('user.follower', (follower) => {
    store.getState().addNotification({
      ...follower,
      id: `notification-${++eventId}`,
      topic: NotificationType.follower,
    })
  })

  twitchie.on('user.subscription', (subscriber) => {
    store.getState().addNotification({
      ...subscriber,
      id: `notification-${++eventId}`,
      topic: NotificationType.subscriber,
    })
  })

  twitchie.on('user.subscription.gift', (gift) => {
    store.getState().addNotification({
      ...gift,
      id: `notification-${++eventId}`,
      topic: NotificationType.subscriber_gift,
    })
  })

  /* Goals */
  twitchie.on('goal.begin', (goal) => {
    store.setState((state) => ({ ...state, goal }))
  })

  twitchie.on('goal.progress', (goal) => {
    store.setState((state) => ({ ...state, goal }))
  })

  twitchie.on('goal.end', (goal) => {
    store.setState((state) => ({ ...state, goal }))
  })

  /* Polls (rhymes with goals but is different) */
  twitchie.on('poll.begin', (poll) => {
    store.setState((state) => ({ ...state, poll }))
  })

  twitchie.on('poll.progress', (poll) => {
    store.setState((state) => ({ ...state, poll }))
  })

  twitchie.on('poll.end', (poll) => {
    store.setState((state) => ({ ...state, poll }))
  })

  /* Predictions */
  twitchie.on('prediction.begin', (prediction) => {
    store.setState((state) => ({ ...state, prediction }))
  })

  twitchie.on('prediction.progress', (prediction) => {
    store.setState((state) => ({ ...state, prediction }))
  })

  twitchie.on('prediction.lock', (prediction) => {
    store.setState((state) => ({ ...state, prediction }))
  })

  twitchie.on('prediction.end', (prediction) => {
    store.setState((state) => ({ ...state, prediction }))
  })
}

export default bindStoreToAPIEvents
