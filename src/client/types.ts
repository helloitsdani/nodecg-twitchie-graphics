import {
  ChatMessage as TwitchieChatMessage,
  FollowInfo,
  GameInfo,
  NewChatterInfo,
  StreamInfo,
  SubscriberCommunityGiftInfo,
  SubscriberGiftInfo,
  SubscriberInfo,
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
  community_gift = 'community_gift',
  follower = 'follower',
  new_chatter = 'new_chatter',
}

export type SubscriberNotification = {
  id?: string
  topic: NotificationType.subscriber
} & SubscriberInfo

export type SubscriberGiftNotification = {
  id?: string
  topic: NotificationType.subscriber_gift
} & SubscriberGiftInfo

export type CommunityGiftNotification = {
  id?: string
  topic: NotificationType.community_gift
} & SubscriberCommunityGiftInfo

export type FollowerNotification = {
  id?: string
  topic: NotificationType.follower
} & FollowInfo

export type NewChatterNotification = {
  id?: string
  topic: NotificationType.new_chatter
} & NewChatterInfo

export type Notification =
  | SubscriberNotification
  | SubscriberGiftNotification
  | CommunityGiftNotification
  | FollowerNotification
  | NewChatterNotification

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
  brb: BRBStatus
  game: GameInfo | undefined
  social: SocialAccount[]
  stream: StreamInfo | undefined
  notifications: Notification[]
  chat: {
    channel: string | undefined
    items: (ChatMessage | ChatNotification)[]
  }
}
