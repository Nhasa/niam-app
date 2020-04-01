import { ADD_CUSTOMER, FETCH_CUSTOMERS }  from '../actions/types'

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return [...state, action.payload]
    case FETCH_CUSTOMERS:
      return action.payload
    default:
      return state;
  }
}