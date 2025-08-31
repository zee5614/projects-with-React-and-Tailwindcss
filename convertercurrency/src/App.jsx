import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import InputBox from './components'

function App() {
const [amount, setAmount] = useState(0)
const [from, setFrom] = useState('USD')
const [to, setTo] =  useState('INR')
const [convertedAmount, setConvertedAmount] = useState(0)

const currencyInfo = useCurrencyInfo(from);
const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
const convert = () => {
  if (!currencyInfo || !currencyInfo[to]) return;
  const result = Number(amount) * currencyInfo[to];
  setConvertedAmount(isNaN(result) ? 0 : result);
};

  return (
   <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
    style={{backgroundImage: "url('/money.jpg')"}}
    >
   <div className='w-full'>
   <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop:blur-sm bg-white/30'>
   
   <form onSubmit={(e) => {
     e.preventDefault()
     convert()

   }}>
    <div className='w-full mb-1'>
     <InputBox
     label="from"
     amount={amount}
     currencyOptions={options}
     onCurrencyChange={(currency) => setFrom (currency)}
     onAmountChange={(amount) => setAmount (amount)}
     selectedCurrency={from}

     
     />

    </div>
    <div className='relative w-full mb-2'>
      <button type='button'
      className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
      onClick={swap}
      >Swap

      </button>
       <div className='w-full mb-1'>
     <InputBox
     label="to"
     amount={convertedAmount}
     currencyOptions={options}
     onCurrencyChange={(currency) => setTo (currency)}
     selectedCurrency={to}
     amountDisabled={true}

     
     />
     </div>
    </div>
    
    <button className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
    type='submit'
    >Convert {from} to {to}</button>
   </form>
   </div>

   </div>

   </div>
  )
}

export default App
