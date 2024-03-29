import {legacy_createStore as createStore} from 'redux'


const counterReducer = (state= {counter: 0}, action)=>{
    if (action.type === 'increment') {
        return{
            counter: state.counter+1
        }
    }
    if (action.type === 'decrement') {
        return{
            counter: state.counter-1
        }
    }
    if (action.type === 'increase') {
        return{
            counter: state.counter + action.value
        }
    }
    if (action.type === '') {
        
    }
    return state

}


export const store = createStore(counterReducer)

