import { StreamInfo } from 'nodecg-twitchie'

import * as actions from '../actions/stream'

export type StreamState = StreamInfo | null

const defaultState: StreamState = null

export default (state: StreamState = defaultState, action: actions.StreamActions): StreamState => {
  switch (action.type) {
    case actions.STREAM_UPDATE:
      return action.payload
    default:
      return state
  }
}
