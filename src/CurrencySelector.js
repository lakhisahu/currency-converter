import { useState } from "react"

function CurrencySelector({to,setTo,from,setFrom}) {
    
    return (
        <>
        

        
         <div className="box">
            <select class="form-select" aria-label="Default select example" onChange={e=>setFrom(e.target.value)}>
                <option selected>Open this to select Currency</option>
                <option value="INR">Indian rupee</option>
                <option value="USD">U.S. dollar</option>
                <option value="EUR">Euro</option>
                <option value="JPY">Japanese yen</option>
                <option value="AUD">Australian dollar</option>
                <option value="CAD">Canadian dollar</option>
                <option value="SGD">Singapore dollar</option>
                <option value="MXN">Mexican peso</option>
                <option value="BRL">Brazilian real</option>

            </select>
            </div>
            <div className="box">
            <select class="form-select" aria-label="Default select example" onChange={e=>setTo(e.target.value)}>
                <option selected>Open this to select Currency</option>
                <option value="INR">Indian rupee</option>
                <option value="USD">U.S. dollar</option>
                <option value="EUR">Euro</option>
                <option value="JPY">Japanese yen</option>
                <option value="AUD">Australian dollar</option>
                <option value="CAD">Canadian dollar</option>
                <option value="SGD">Singapore dollar</option>
                <option value="MXN">Mexican peso</option>
                <option value="BRL">Brazilian real</option>

            </select>
            </div>
            
        </>
    )
}
export default CurrencySelector