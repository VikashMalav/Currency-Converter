import React, { useEffect ,useState} from 'react'

const useCurrencyInfo = (currency) => {

  const [data, setdata] = useState({})

  useEffect(() => {
    const fetchData = async () => {

      fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setdata(res[currency]))
      // console.log(res)
    }
    fetchData()

  }, [currency])

  return data
}

export default useCurrencyInfo