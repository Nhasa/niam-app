import { ADD_CUSTOMER }  from '../actions/types'

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return [...state, action.payload]
    default:
      return state
  }
}