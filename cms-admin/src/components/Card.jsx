import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function Card () {
    const navigate = useNavigate()
    const {detail, status} = useSelector((state)=> {
        return state.transaction
      })
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
    };

    return (
        <>
        <div className="border-2 rounded-2xl">
            <div className="m-5 flex flex-col items-center">
                <h1>Product Name : {detail.productName}</h1>
                <h1>Amount : {detail.amount}</h1>
                <h1>Customer Name : {detail.customerName}</h1>
                <h1>Status : {detail.status }</h1>
                <h1>Transaction Date : {formatDate(detail.transactionDate)}</h1>
                <span className="flex justify-center gap-3 mt-3" >
                    <button className="bg-blue-400 rounded-lg px-4" >Edit</button>
                    <button onClick={()=> navigate("/")} className="bg-red-400 rounded-lg px-4" >Back</button>
                </span>
            </div>
        </div>
        </>
    )
    }