import { useState } from "react"
import { useDispatch } from "react-redux"
import {useNavigate } from 'react-router-dom'
import { storeValue } from "../Redux/action"

export const Home = ()=>{
    const [ level , setValue] = useState('easy')
    let navigate = useNavigate()
    const dispatch = useDispatch()
    function handleQuiz(e){
        e.preventDefault()
        let from = e.target
        let info = {
            category : from[0].value ,
            difficulty : level
        }

        dispatch(storeValue(info))
        navigate('/quiz')


    }
    return (
        <>
        <div>
            <h1>Set Up Your Quiz !</h1>
            <form onSubmit={(e)=>handleQuiz(e)}>
                <label>
                    Category
                </label>
                <select>
                    <option value='General Knowledge'>General Knowledge</option>
                    <option value='Sports'>Sports</option>
                    <option value='Geography'>Geography</option>
                </select>
                <label>
                    Difficulty
                </label>
                <div className="level">
                    <input type='radio' name='difficulty' checked onChange={()=> setValue('Easy')}/>
                    <label>Easy</label>
                    <input type='radio' name='difficulty' onChange={()=> setValue('medium')}/>
                    <label>Medium</label>
                    <input type='radio' name='difficulty' onChange={()=> setValue('hard')}/>
                    <label>Hard</label>
                </div>
                {/* <label>Number of questions</label>
                <input type='number' /> */}
                <input type='submit' value='start'/>
            </form>
        </div>
        </>
    )
}