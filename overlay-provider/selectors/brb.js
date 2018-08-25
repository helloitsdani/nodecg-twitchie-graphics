const getBRB = (state) => (
  state.brb
)

const isAway = (state) => (
  getBRB(state).isAway
)

const getMessage = (state) => (
  getBRB(state).message
)

export {
  getBRB,
  isAway,
  getMessage,
}
