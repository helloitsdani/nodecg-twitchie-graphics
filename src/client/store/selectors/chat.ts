import { OverlayState } from '../reducers'

const getChat = (state: OverlayState) => state.chat

const getChatChannel = (state: OverlayState) => getChat(state).channel

const getChatItems = (state: OverlayState) => getChat(state).items

export { getChat, getChatChannel, getChatItems }
