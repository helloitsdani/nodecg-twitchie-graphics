import { ChatActionPayload, ChatBanPayload, ChatMessagePayload, ChatTimeoutPayload } from 'nodecg-twitchie';
import { Notification } from '../../types';
export declare const CHAT_MESSAGE = "chat/MESSAGE";
export declare const CHAT_NOTIFICATION = "chat/NOTIFICATION";
export declare const CHAT_JOIN_CHANNEL = "chat/JOIN_CHANNEL";
export declare const CHAT_CLEAR_USER_MESSAGES = "chat/CLEAR_USER_MESSAGES";
export interface GetMessageAction {
    type: typeof CHAT_MESSAGE;
    payload: ChatActionPayload | ChatMessagePayload;
}
export interface GetNotificationAction {
    type: typeof CHAT_NOTIFICATION;
    payload: {
        user: string;
        topic: string;
        message: string;
    };
}
export interface JoinChannelAction {
    type: typeof CHAT_JOIN_CHANNEL;
    payload: string;
}
export interface ClearChatMessagesAction {
    type: typeof CHAT_CLEAR_USER_MESSAGES;
    payload: ChatBanPayload | ChatTimeoutPayload;
}
export declare type ChatActions = GetMessageAction | GetNotificationAction | JoinChannelAction | ClearChatMessagesAction;
export declare const getMessageAction: (message: ChatActionPayload | ChatMessagePayload) => ChatActions;
export declare const getNotificationAction: (notification: Notification) => {
    type: string;
    payload: Notification;
};
export declare const joinChannelAction: (channel: string) => ChatActions;
export declare const clearUserMessagesAction: (modAction: ChatBanPayload | ChatTimeoutPayload) => ChatActions;
