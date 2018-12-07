import twitchie from '../../twitchie'

import { updateSocialAccounts } from '../actions/social'

export default (dispatch) => {
  const dispatchSocialAccountsUpdate = (
    (newAccounts) => dispatch(updateSocialAccounts(newAccounts))
  )

  twitchie.social.on(
    'change',
    dispatchSocialAccountsUpdate,
  )
}
