import {
  ChatMessage as TwitchieChatMessage,
  FollowInfo,
  GameInfo,
  NewChatterInfo,
  StreamInfo,
  SubscriberGiftInfo,
  SubscriberInfo,
  PredictionInfo,
  GoalInfo,
  PollInfo,
} from 'nodecg-twitchie'

export interface BRBStatus {
  away: boolean
  message?: string
}

export interface SocialAccount {
  service: string
  username: string
}

export enum NotificationType {
  subscriber = 'subscriber',
  subscriber_gift = 'subscriber_gift',
  follower = 'follower',
  new_chatter = 'new_chatter',
  generic = 'generic',
}

export type SubscriberNotification = {
  id?: string
  topic: NotificationType.subscriber
} & SubscriberInfo

export type SubscriberGiftNotification = {
  id?: string
  topic: NotificationType.subscriber_gift
} & SubscriberGiftInfo

export type FollowerNotification = {
  id?: string
  topic: NotificationType.follower
} & FollowInfo

export type NewChatterNotification = {
  id?: string
  topic: NotificationType.new_chatter
} & NewChatterInfo

export type GenericNotification = {
  id?: string
  topic: NotificationType.generic
  subject: string
  message: string
}

export type Notification =
  | SubscriberNotification
  | SubscriberGiftNotification
  | FollowerNotification
  | NewChatterNotification
  | GenericNotification

export enum ChatMessageTypeWithNotifications {
  action = 'action',
  message = 'message',
  notification = 'notification',
}

export type ChatNotification = Notification & {
  type: ChatMessageTypeWithNotifications.notification
}

export type ChatMessage = Omit<TwitchieChatMessage, 'type'> & {
  type: ChatMessageTypeWithNotifications.message | ChatMessageTypeWithNotifications.action
}

export interface TwitchieStore {
  stream: StreamInfo | undefined
  game: GameInfo | undefined
  status: string | undefined

  brb: BRBStatus
  social: SocialAccount[]

  chat: {
    channel: string | undefined
    items: (ChatMessage | ChatNotification)[]
  }
  addChatItem: (newItem: ChatMessage | ChatNotification) => void
  removeChatItemById: (badId: string) => void
  removeChatItemByName: (naughtyUsername: string) => void

  notifications: Notification[]
  addNotification: (newNotification: Notification) => void
  removeNotificationById: (badId: string) => void

  goal: GoalInfo
  poll: PollInfo
  prediction: PredictionInfo
}
