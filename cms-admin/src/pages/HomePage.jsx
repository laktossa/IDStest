import Table from "../components/Table";

import {useDispatch, useSelector} from "react-redux"
import { useEffect } from "react";
import { getStatus, getTrx } from "../store/slicerData";


export default function HomePage() {
  const dispatch = useDispatch()
  const {loading} = useSelector((state)=> {
    return state.transaction
  })
  
  useEffect(()=> {
    dispatch(getStatus())
    dispatch(getTrx())
  }, [])
  
  return (
    <>
    {loading ? (
      <div className="flex justify-center items-center">
        <h1>LOL</h1>
      </div>
      ) : (
      <div>
        <h1 className="font-bold text-4xl text-center mt-2 mb-5">Transaction List</h1>
        <div className="grid grid-cols-12" >
          <div className="col-start-3 col-end-11" >
            <Table/>
          </div>
        </div>
      </div>
      )}
    
    </>
  );
}
