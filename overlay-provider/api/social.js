import twitchie from '../../twitchie'

import { updateSocialLinks } from '../actions/social'

export default (dispatch) => {
  twitchie.social.twitter.on(
    'change',
    (newTwitter) => {
      dispatch(updateSocialLinks('twitter', newTwitter))
    }
  )

  twitchie.channel.info.on(
    'change',
    ({ name } = {}) => {
      dispatch(updateSocialLinks('twitch', name))
    }
  )
}
