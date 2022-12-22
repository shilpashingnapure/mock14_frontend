import { useSelector } from "react-redux"
import { store } from "../Redux/store"

export const Result = ()=>{
    const {correct , wrong , total} = useSelector((s)=> s)
    let per = (correct / total) * 100
    return (
        <>
        <h1>result</h1>
        <table>
            <tr>
                <th>correct answer</th>
                <th>worng answer</th>
                <th>total score</th>
                <th>percentage</th>
            </tr>
            <tr>
                <td>{correct}</td>
                <td>{wrong}</td>
                <td>{correct}</td>
                <td>{per}% </td>
            </tr>
        </table>
        </>
    )
}