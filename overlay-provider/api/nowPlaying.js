import twitchie from '../../twitchie'

import { updateNowPlaying } from '../actions/nowPlaying'

export default (dispatch) => {
  const dispatchUpdateNowPlaying = ({ game } = {}) => {
    dispatch(updateNowPlaying(game))
  }

  twitchie.channel.info.on(
    'change',
    dispatchUpdateNowPlaying,
  )
}
