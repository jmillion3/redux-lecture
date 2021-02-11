const initialState = {
    user: {}
}

// Action type
const LOGIN_USER = "LOGIN_USER"

// Action Creator
export function loginUser(user){
    return {
        type: LOGIN_USER,
        payload: user
    }
}

// Reducer Function
export default function reducer(state = initialState, action){
    switch(action.type){
        case LOGIN_USER:
            return {...state, user: action.payload} 
        default:
            return state;
    }
}
