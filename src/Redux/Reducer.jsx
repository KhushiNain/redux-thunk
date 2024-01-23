const initialState={
    user:[],
    error:""
  }

  const reducer=(state=initialState,action)=>{
    switch(action.type){
      case "show_data":
        let newstate={...state,user:action.payload}
        return newstate
      case "error":
        return{
          ...state,
          error:action.payload
        }
        default:
          return state
    }
  }

  export default reducer;