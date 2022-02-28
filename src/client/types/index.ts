import {
  FollowInfo,
  NewChatterInfo,
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

export type SocialAccounts = SocialAccount[]

export enum NotificationType {
  SUBSCRIBER = 'subscriber',
  SUBSCRIBER_GIFT = 'subscriber_gift',
  COMMUNITY_GIFT = 'community_gift',
  FOLLOWER = 'follower',
  NEW_CHATTER = 'new_chatter',
}

export type SubscriberNotification = {
  id?: string
  topic: NotificationType.SUBSCRIBER
} & SubscriberInfo

export type SubscriberGiftNotification = {
  id?: string
  topic: NotificationType.SUBSCRIBER_GIFT
} & SubscriberGiftInfo

export type CommunityGiftNotification = {
  id?: string
  topic: NotificationType.COMMUNITY_GIFT
} & SubscriberCommunityGiftInfo

export type FollowerNotification = {
  id?: string
  topic: NotificationType.FOLLOWER
} & FollowInfo

export type NewChatterNotification = {
  id?: string
  topic: NotificationType.NEW_CHATTER
} & NewChatterInfo

export type Notification =
  | SubscriberNotification
  | SubscriberGiftNotification
  | CommunityGiftNotification
  | FollowerNotification
  | NewChatterNotification

export interface Cutout {
  top: number
  left: number
  bottom: number
  right: number
  height: number
  width: number
}

export type Timer = string

export enum ChatMessageTypeWithNotifications {
  ACTION = 'action',
  MESSAGE = 'message',
  NOTIFICATION = 'notification',
}

export type ChatNotificationMessage = Notification & {
  type: ChatMessageTypeWithNotifications.NOTIFICATION
}
