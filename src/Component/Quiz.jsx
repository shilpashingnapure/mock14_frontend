import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { store } from "../Redux/store"
import { Question } from "./Question"

import { useDispatch } from "react-redux"
import { getPage } from "../Redux/action"
export const Quiz = ()=>{
    console.log(store.getState())
    const info = useSelector((s)=> s.info)
    const [questions , setquestions] = useState([])
    const [isloading , setloading] = useState(true)
    const [currentPage , setCurrentPage] = useState(1)
    const [lastPage , setlastPage] = useState(0)
    const dispatch = useDispatch()
    let navigate = useNavigate()
    console.log(info , lastPage)
    useEffect(()=>{
        fetch(`https://mock14-backend-imka.onrender.com/questions?category=${info.category}&difficulty=${info.difficulty}`).then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            setloading(false)
            setquestions(res)
            setlastPage(res.length)
            dispatch(getPage(res.length))
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    if(isloading){
        return <div>loading</div>
    }

    function handlePagination(){
        if(currentPage-1 == lastPage-1){
            console.log('end')
            navigate('/result')

        }else{
            setCurrentPage(currentPage + 1)
        }
        console.log(currentPage-1 , lastPage)


    }
    return (
        <>
        <h1>Weclome to questions</h1>
        <div>
            <span>Category</span>
            <span>{info.category}</span>
            <span>Level</span>
            <span>{info.difficulty}</span>
        </div>
        <div className="question_div">
        {currentPage-1 < lastPage ? <Question question={questions[currentPage-1].question}  incorrect_answers={questions[currentPage-1].incorrect_answers}
            correct_answer = {questions[currentPage-1].correct_answer} no={currentPage}/>: ''}

        <div className="pagination">
        <span>{currentPage} of {lastPage} Questions</span>
        <button onClick={handlePagination}>{currentPage-1 == lastPage-1 ? 'Submit' : 'Next'}</button>
        </div>
    </div>
    </>
    )

}