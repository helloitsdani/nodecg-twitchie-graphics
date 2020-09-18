import { ChatMessage } from 'nodecg-twitchie';
import { ChatNotificationMessage } from '../../types';
import * as actions from '../actions/chat';
export interface ChatState {
    channel: string;
    messages: (ChatMessage | ChatNotificationMessage)[];
}
declare const _default: (state: ChatState | undefined, action: actions.ChatActions) => ChatState;
export default _default;
