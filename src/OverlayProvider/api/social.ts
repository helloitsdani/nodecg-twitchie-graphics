import { createReplicant } from 'nodecg-twitchie'

import { Dispatch } from 'redux'
import { SocialAccounts } from '../../types'
import { updateSocialAccounts } from '../actions/social'

export default (dispatch: Dispatch) => {
  const socialAccounts = createReplicant<SocialAccounts>(nodecg, 'social', {
    defaultValue: [],
    persistent: true,
  })

  socialAccounts.on('change', newAccounts => {
    dispatch(updateSocialAccounts(newAccounts || []))
  })
}
