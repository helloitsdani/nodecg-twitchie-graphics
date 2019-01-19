const getBadge = (
  toFind,
  badges,
) => {
  const badge = badges[toFind]

  return badge
    ? badge.alpha
    : null
}

export default getBadge
