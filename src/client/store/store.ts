import { SetState, GetState, Mutate, StoreApi } from 'zustand'
import create from 'zustand/vanilla'
import { devtools } from 'zustand/middleware'

import { TwitchieStore } from '../types'

export const DEFAULT_STATE = {
  brb: {
    away: false,
    message: undefined,
  },
  game: undefined,
  social: [],
  stream: undefined,
  notifications: [],
  chat: {
    channel: undefined,
    items: [],
  },
}

export default create<
  TwitchieStore,
  SetState<TwitchieStore>,
  GetState<TwitchieStore>,
  Mutate<StoreApi<TwitchieStore>, [['zustand/devtools', never]]>
>(
  devtools(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_, __, ___) => DEFAULT_STATE,
    { name: 'twitchie' },
  ),
)
