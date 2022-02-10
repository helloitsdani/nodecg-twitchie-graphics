import { type StreamInfo } from 'nodecg-twitchie'

export const STREAM_UPDATE = 'stream/UPDATE'

export interface UpdateStreamAction {
  type: typeof STREAM_UPDATE
  payload: StreamInfo
}

export type StreamActions = UpdateStreamAction

export const updateStreamInfoAction = (accounts: StreamInfo): StreamActions => ({
  type: STREAM_UPDATE,
  payload: accounts,
})
