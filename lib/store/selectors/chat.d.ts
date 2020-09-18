import { OverlayState } from '../reducers';
declare const getChat: (state: OverlayState) => import("../reducers/chat").ChatState;
declare const getChatChannel: (state: OverlayState) => string;
declare const getChatMessages: (state: OverlayState) => (import("nodecg-twitchie").ChatMessage | import("../..").ChatNotificationMessage)[];
export { getChat, getChatChannel, getChatMessages };
