import RowList from "./RowList";

import { useSelector } from "react-redux"

export default function Table () {

    const {transactions} = useSelector((e)=> {
        return e.transaction
    })
 
    return (
        <>
        <table className="w-full">
            <thead>
                <tr className="">
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Amount</th>
                    <th>Transaction Date</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((e, i)=> {
                    return <RowList key={e.id} i={i} transactions={e}/>
                })}
            </tbody>
        </table>
        </>
    )
}