const SOCIAL_UPDATE = 'social/UPDATE'

const updateSocialLinks = (service, username) => ({
  type: SOCIAL_UPDATE,
  payload: {
    service,
    username,
  },
})

export {
  SOCIAL_UPDATE,
  updateSocialLinks,
}
