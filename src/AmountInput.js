function AmountInput({amount,setAmount}){
    return(
        <>
        <div className="box">
            <input type="text" className="form-control" placeholder="Enter Amount" onChange={e=>setAmount(e.target.value)}/>
        </div>
        </>
    )
}
export default AmountInput;