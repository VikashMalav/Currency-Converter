import React, { useId } from 'react'

const InputBox = ({ label, placeholder, amount, onAmountChange, onCurrencyChange, currencyOptions = [], currencyDisable = false, selectCurrency = 'usd', amountDisable = false }) => {
    let amountInputId = useId()
    return (
        <>
            <div >
                <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor={amountInputId}>
                    {label}
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                        type='number'
                        className=" block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id={amountInputId}
                        placeholder={placeholder}
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                        disabled={amountDisable}
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                        <select
                            className="h-full rounded-md border-0 bg-transparent py-0 pl-4 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            value={selectCurrency}
                            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                            disabled={currencyDisable}>
                            {currencyOptions?.map((currency) => (
                                <option key={currency} value={currency}>{currency.toUpperCase()}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InputBox