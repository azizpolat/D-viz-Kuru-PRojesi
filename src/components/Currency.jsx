// import { useState } from "react";
// import "../css/currency.css";
// import { FaArrowCircleRight } from "react-icons/fa";
// import axios from 'axios';



// let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
// let API_KEY = "fca_live_eAi3FElNETblNNxAW6yJC1xZbm8OBu9RljMlnT9c";



// function Currency() {
//   const [amount, setAmount] = useState();
//   const [fromCurrency, setFromCurrency] = useState("USD");
//   const [toCurrency, setToCurrency] = useState("TRY");
//   const [result, setResult] = useState(0);

//   const exchange = async() => {
//     // console.log(amount);
//     // console.log(fromCurrency);
//     // console.log(toCurrency);
//     const responce = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
//      const result =  (responce.data.data[toCurrency] * amount).toFixed(2)
//     setResult(result)

//   };

//   return (
//     <div className="currency-div">
//       <div className="baslık">
//         <h3>DÖVİZ KURU UYGULAMASI</h3>
//       </div>

//       <div className="orta-body">
//         <input
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//           type="number"
//           className="amount"
//         />

//         <select
//           onChange={(e) => setFromCurrency(e.target.value)}
//           className="from-currency-option"
//         >
//           <option value="">USD</option>
//           <option value="">EUR</option>
//           <option value="">TRY</option>
//         </select>

//         <FaArrowCircleRight style={{ fontSize: 25, marginRight: 10 }} />

//         <select
//           onChange={(e) => setToCurrency(e.target.value)}
//           className="to-currency-option">
        
//           <option value="">TRY</option>
//           <option value="">USD</option>
//           <option value="">EUR</option>
//         </select>
//         <input
//           value={result}
//           onChange={(e) => setResult(e.target.value)}
//           type="number"
//           className="result"
//         />
//       </div>
//       <div>
//         <button onClick={exchange} className="cevir">
//           ÇEVİR
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Currency;


import { useState } from "react";
import "../css/currency.css";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_eAi3FElNETblNNxAW6yJC1xZbm8OBu9RljMlnT9c";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
      const result = (response.data.data[toCurrency] * amount).toFixed(2);
      setResult(result);
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
    }
  };

  return (
    <div className="currency-div">
      <div className="baslık">
        <h3>DÖVİZ KURU UYGULAMASI</h3>
      </div>

      <div className="orta-body">
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className="amount"
        />

        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
        </select>

        <FaArrowCircleRight style={{ fontSize: 25, marginRight: 10 }} />

        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option value="TRY">TRY</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        <input
          value={result}
          readOnly
          type="number"
          className="result"
        />
      </div>
      <div>
        <button onClick={exchange} className="cevir">
          ÇEVİR
        </button>
      </div>
    </div>
  );
}

export default Currency;
