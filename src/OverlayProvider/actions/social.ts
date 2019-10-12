import { SocialAccounts } from '../../types'

const SOCIAL_UPDATE = 'social/UPDATE'

interface UpdateSocialAccountsAction {
  type: typeof SOCIAL_UPDATE
  payload: SocialAccounts
}

type SocialActions = UpdateSocialAccountsAction

const updateSocialAccounts = (accounts: SocialAccounts): SocialActions => ({
  type: SOCIAL_UPDATE,
  payload: accounts,
})

export { SOCIAL_UPDATE, updateSocialAccounts, SocialActions }
