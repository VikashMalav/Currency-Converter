'use client'
import React, { useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from './components';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ArrowDownward } from '@mui/icons-material';
const Page = () => {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState('');

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convertHandler = () => {
    setConvertedAmount(parseFloat(amount * currencyInfo[to]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    convertHandler();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full backdrop-blur-md ">
        <h1 className="text-2xl font-semibold text-blue-600 mb-4 rounded-lg">Currency Converter</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <InputBox
              label="From"
              placeholder='Enter Amount'
              amount={amount}
              currencyOptions={options}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
            />
          </div>
          <div className='flex items-center justify-center'>
            <button
            type="button"
            className="bg-blue-500 text-white rounded-full  hover:bg-blue-600 transition duration-300 ease-in-out mb-4"
            onClick={swap}
          >
            <ArrowUpwardIcon/><ArrowDownward/>
          </button>
          </div>
          
          <div className="mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options.filter((currency)=>currency!==from)}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
            />
          </div>
          <div className='flex items-center justify-center'>
          <button
            type="submit"
            className="w-full bg-green-500 text-white rounded-lg py-2 px-4  hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
