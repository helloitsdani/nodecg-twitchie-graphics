import { StreamInfo } from 'nodecg-twitchie';
import * as actions from '../actions/stream';
export declare type StreamState = StreamInfo | null;
declare const _default: (state: StreamInfo | null | undefined, action: actions.UpdateStreamAction) => StreamState;
export default _default;
