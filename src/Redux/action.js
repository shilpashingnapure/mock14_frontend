export const ADD = 'ADD'

export const SUB = 'SUB'

export const STORE = 'STORE'

export const COUNT = ' COUNT'
export const storeValue = (payload)=>{
    return {type:STORE , payload}
}

export const IncreadScore = (payload)=>{
    return {type:ADD , payload}
}

export const DecreadScore = (payload)=>{
    return {type:SUB , payload}
}

export const getPage = (payload)=>{
    return {type : COUNT , payload}
}