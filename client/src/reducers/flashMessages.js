import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../actions/types'
// import shortid from 'shortid';
import { findIndex } from 'lodash'

export default (state = [], action = {}) => {
  let newState = null
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      newState = [
        ...state, {
          // id: shortid.generate(),
          type: action.message.type,
          text: action.message.text
        }
      ]
      break
    case DELETE_FLASH_MESSAGE:
      const index = findIndex(state, { id: action.id });
      if (index >= 0) {
        newState = [
          ...state.slice(0, index),
          ...state.slice(index + 1)
        ]
      }
      break
    default:
      newState = state;
  }
  return newState
}