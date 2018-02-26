import replicants from '../replicants'
import getCheermote from './getCheermote'

const getCheermoteFromCurrentSets = (name, bits, options) => (
  getCheermote(
    name,
    bits,
    options,
    replicants.chat.cheermotes.value,
  )
)

export default getCheermoteFromCurrentSets
