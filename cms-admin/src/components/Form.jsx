import { useState } from "react"

export default function Form () {
    const [input, setInput] = useState({
        id: 0,
        productID : "",
        productName : "",
        amount : 0,
        customerName : "",
        status : 0,
        transactionDate : new Date(),
        createBy : customerName,
        createOn : new Date()
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        let newInput = {
        ...input,
        [name]: value,
    };
    setInput(newInput);
    console.log(input)
    }
    return (
        <>
        <form className="flex flex-col w-[30%] gap-2">
            <label className="ml-1" >Product ID</label>
            <input onChange={handleInput} name="productID" className="border-2 rounded-xl px-3" type="number" />
            <label className="ml-1" >Product Name</label>
            <input onChange={handleInput} name="productName" className="border-2 rounded-xl px-3" type="text" />
            <label className="ml-1" >Amount</label>
            <input onChange={handleInput} name="amount" className="border-2 rounded-xl px-3" type="number" />
            <label className="ml-1" >Customer Name</label>
            <input onChange={handleInput} name="customerName" className="border-2 rounded-xl px-3" type="text" />
            <label className="ml-1" >Status</label>
            <input onChange={handleInput} name="status" className="border-2 rounded-xl px-3" type="text" />
            <span className="flex justify-center mt-4 gap-8" >
            <button className=" w-[30%] border-2 rounded-lg bg-red-400 shadow-xl hover:bg-red-500"> Cancel</button>
            <button className=" w-[30%] border-2 rounded-lg bg-blue-400 shadow-xl hover:bg-blue-500"> Submit</button>
            </span>
        </form>
        </>
    )
}