import {ADD , SUB , STORE, COUNT} from './action'

const initalState = {
    score : 0 ,
    wrong : 0 ,
    correct : 0
}

export const reducer = (store = initalState , {type , payload})=>{
    switch(type){
        case STORE:
            return {...store , info:payload}
        case ADD:
            return {...store , correct : store.correct + payload }
        case SUB:
            return {...store , wrong : store.wrong + payload }
        case COUNT:
            return {...store , total : payload}

        default:
            return store
    }
}