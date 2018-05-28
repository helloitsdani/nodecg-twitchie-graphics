const getBRB = (state) => (
  state.brb
)

const isAway = (state) => (
  getBRB(state).isAway
)

const getBRBMessage = (state) => (
  getBRB(state).message
)

export {
  getBRB,
  isAway,
  getBRBMessage,
}
