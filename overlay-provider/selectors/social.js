const getSocialAccounts = (state) => (
  state.social
)

const getTwitter = (state) => (
  getSocialAccounts(state).twitter
)

const getTwitch = (state) => (
  getSocialAccounts(state).twitch
)

export {
  getSocialAccounts,
  getTwitter,
  getTwitch,
}
