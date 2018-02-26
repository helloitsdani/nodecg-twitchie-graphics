const updateSocialLinks = (service, username) => ({
  type: 'SOCIAL_UPDATE',
  payload: {
    service,
    username,
  },
})

export {
  updateSocialLinks,
}
