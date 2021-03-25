/* Reducer */
const dataInitial = {
    names: [],
  }

  const GET_NAMES = 'GET_NAMES';

  export default  function nameReducer(state = dataInitial, action){

    switch(action.type){
      case GET_NAMES:
        return {...state, names: action.payload}

      default:
        return state
    }
  }
  export const getNamesActions = (action) => (dispatch, getState) => {
    try {
      dispatch({
        type: GET_NAMES,
        payload: action
      })
    } catch(error) {
      console.log(error)
    }
  }