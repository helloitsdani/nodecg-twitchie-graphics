const SOCIAL_UPDATE = 'social/UPDATE'

const updateSocialAccounts = (accounts) => ({
  type: SOCIAL_UPDATE,
  payload: accounts,
})

export {
  SOCIAL_UPDATE,
  updateSocialAccounts,
}
