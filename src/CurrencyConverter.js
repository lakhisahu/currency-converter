import { useState } from "react";
import AmountInput from "./AmountInput";
import CurrencySelector from "./CurrencySelector";
import axios from "axios";

function CurrencyConverter() {
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [amount, setAmount] = useState('')
    const [convertedVal, setconvertedVal] = useState('')
    const APIKEY = "b0a13ddf45c3c302a4fb4c46";
    function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }
    async function submitBtn() {
        if (from == undefined || from == "" || to == undefined || to == "" || amount == undefined || amount == "") {
            const alertPlaceholder = document.getElementById('card')

  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-danger alert-dismissible" role="alert">`,
    `   <div>Please Enter All The Fields</div>`,
    '   <button type="button" class="btn-close" id="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')
  const closebtn = document.getElementById('btn-close');
  if(closebtn!=null){
      closebtn.click();
  }

  alertPlaceholder.append(wrapper)
  return;



        }
        if(!isNumber(amount)){
            const alertPlaceholder = document.getElementById('card')

  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-danger alert-dismissible" role="alert">`,
    `   <div>amount should be a number</div>`,
    '   <button type="button" class="btn-close" id="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')
 const closebtn = document.getElementById('btn-close');
 if(closebtn!=null){
     closebtn.click();
 }

  alertPlaceholder.append(wrapper)
  return;
        }
       
        var result = await axios.get(`https://v6.exchangerate-api.com/v6/${APIKEY}/pair/${from}/${to}/${amount}`)
        console.log(result.data);
        setconvertedVal(result.data.conversion_result);
    }
    return (
        <>
         <div id="card"></div>
            
            <div className="card" >
               
                <h4>{convertedVal}</h4>
                <div >
                    <CurrencySelector from={from} setFrom={setFrom} to={to} setTo={setTo} />
                </div>
                <div>
                    <AmountInput amount={amount} setAmount={setAmount} />

                </div>
                <button className="btn btn-info mt-5" onClick={submitBtn}>Submit</button>
            </div>

        </>
    )
}
export default CurrencyConverter;