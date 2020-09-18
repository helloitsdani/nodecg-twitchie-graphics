export interface BRBStatus {
    away: boolean;
    message?: string;
}
export interface SocialAccount {
    service: string;
    username: string;
}
export declare type SocialAccounts = SocialAccount[];
export interface Notification {
    id?: string;
    user: string;
    topic: string;
    scale?: number;
    message?: string;
}
export interface Cutout {
    top: number;
    left: number;
    bottom: number;
    right: number;
    height: number;
    width: number;
}
export declare type Timer = string;
export declare enum ChatMessageTypeWithNotifications {
    ACTION = "action",
    MESSAGE = "message",
    NOTIFICATION = "notification"
}
export declare type ChatNotificationMessage = Notification & {
    type: ChatMessageTypeWithNotifications.NOTIFICATION;
};
