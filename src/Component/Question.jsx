import { useState } from "react"
import { useDispatch } from "react-redux"
import { IncreadScore , DecreadScore } from "../Redux/action"


export const Question = ({no , question , incorrect_answers , correct_answer})=>{

    const dispatch = useDispatch()

    function handleChoice(value){
        if(value == correct_answer){
            alert('corret')
            dispatch(IncreadScore(1))
        }else{
            alert('wrong')
            dispatch(DecreadScore(1))
        }
        console.log(value , correct_answer)


    }

    return <>
    <div>
                    <h2>{no}. {question}</h2>
                    <ul>

                        {incorrect_answers.map((value,index)=>{
                            return <li key={index} onClick={()=> handleChoice(value)}
                            >{value}</li>
                        })}
                        <li onClick={()=> handleChoice(correct_answer)} >{correct_answer}</li>
                    </ul>
                </div>
    </>
}