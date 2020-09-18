import { StreamInfo } from 'nodecg-twitchie';
export declare const STREAM_UPDATE = "stream/UPDATE";
export interface UpdateStreamAction {
    type: typeof STREAM_UPDATE;
    payload: StreamInfo;
}
export declare type StreamActions = UpdateStreamAction;
export declare const updateStreamInfoAction: (accounts: StreamInfo) => UpdateStreamAction;
