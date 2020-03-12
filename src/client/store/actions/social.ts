import { SocialAccounts } from '../../types'

export const SOCIAL_UPDATE = 'social/UPDATE'

export interface UpdateSocialAccountsAction {
  type: typeof SOCIAL_UPDATE
  payload: SocialAccounts
}

export type SocialActions = UpdateSocialAccountsAction

export const updateSocialAccountsAction = (accounts: SocialAccounts): SocialActions => ({
  type: SOCIAL_UPDATE,
  payload: accounts,
})
