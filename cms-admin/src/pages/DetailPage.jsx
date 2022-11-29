import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Card from "../components/Card"
import { getDetail, getStatus } from "../store/slicerData"

export default function DetailPage () {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {loading, detail, status} = useSelector((state)=> {
        return state.transaction
      })
    useEffect(()=> {
        dispatch(getStatus())
        dispatch(getDetail(id))
    
    },[])
    return (
        
        <>
        {loading ? (
      <div className="flex justify-center items-center">
        <h1>LOL</h1>
      </div>
      ) : (
      <div>
        <h1 className="font-bold text-4xl text-center mt-2 mb-5">Detail Page</h1>
        <div className="grid grid-cols-12">
          <div className="col-start-3 col-end-11" >
            <div className="flex justify-center items-center">
                <Card detail={detail} status={status}/>
            </div>
          </div>
        </div>
      </div>
      )}
    
        </>
    )
}