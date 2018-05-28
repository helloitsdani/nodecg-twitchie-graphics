import twitchie from '../../twitchie'

import { updateChannelInfo } from '../actions/channel'

export default (dispatch) => {
  const dispatchUpdateChannelInfo = ({ game, status } = {}) => {
    const newChannelInfo = {
      game,
      status,
    }

    dispatch(updateChannelInfo(newChannelInfo))
  }

  twitchie.channel.info.on(
    'change',
    dispatchUpdateChannelInfo,
  )
}
