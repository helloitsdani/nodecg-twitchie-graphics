const getCheermote = (
  name,
  bits,
  {
    type = 'animated',
    background = 'light',
    size = '4',
  } = {},
  cheermotes,
) => {
  const alt = `${name}${bits}`

  if (!Object.keys(cheermotes).includes(name)) {
    return {
      alt,
    }
  }

  const cheermote = cheermotes[name].tiers.reduce(
    (previousTier, tier) => (
      bits >= tier.min_bits
        ? tier
        : previousTier
    )
  )

  const { color } = cheermote
  let url

  try {
    url = cheermote.images[background][type][size]

    if (!url) {
      throw new TypeError('Invalid extra options supplied')
    }
  } catch (e) {
    const {
      scales: [defaultScale],
      states: [defaultState],
      backgrounds: [defaultBackground],
    } = cheermotes[name]

    url = cheermote.images[defaultBackground][defaultState][defaultScale]
  }

  return {
    color,
    url,
    alt,
  }
}

export default getCheermote
