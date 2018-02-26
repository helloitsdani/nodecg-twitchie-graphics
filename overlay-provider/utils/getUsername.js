const getUsername = user => (
  user.display_name || user.name
)

export default getUsername
