import twitchie, { createReplicant } from '../../twitchie'

import { updateSocialLinks } from '../actions/social'

export default (dispatch) => {
  const twitter = createReplicant('social.twitter')

  twitter.on(
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
