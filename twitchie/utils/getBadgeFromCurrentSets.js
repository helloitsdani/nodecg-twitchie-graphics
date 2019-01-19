import replicants from '../replicants'
import getBadge from './getBadge'

const getCheermoteFromCurrentSets = (name) => (
  getBadge(
    name,
    replicants.chat.badges.value,
  )
)

export default getCheermoteFromCurrentSets
