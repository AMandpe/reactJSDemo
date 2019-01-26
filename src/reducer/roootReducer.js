const initState = {
  posts: [
      {id: '1', title: 'Egg', body: 'eat egg'},
      {id: '2', title: 'mango', body: 'eat mango'},
      {id: '3', title: 'chicken', body: 'eat chicken'}
  ]
}

const rootReducer = (state = initState, action) => {
  return state
}

export default rootReducer