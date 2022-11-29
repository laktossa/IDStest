import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDetail } from "../store/slicerData";


export default function RowList ({transactions, i}) {
    const navigate =  useNavigate()
    const dispatch = useDispatch()
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
    };

    const handleDetail=(id)=> {
        dispatch(getDetail(id))
        navigate(`/detail/${id}`)
    }

    return (
        <>
         <tr className="text-center">
              <td>{i+1}</td>
              <td>{transactions.productName}</td>
              <td>{transactions.amount}</td>
              <td>{formatDate(transactions.transactionDate)}</td>
              
              <td className="flex gap-2" >
                <button onClick={()=> handleDetail(transactions.id)} className="bg-blue-400 rounded-lg px-4">
                   Detail
                </button>
              </td>
            </tr>
        </>
    )
}