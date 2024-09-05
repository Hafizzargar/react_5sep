import "./App.css";
import { useEffect, useState } from "react";
import Disp from "./compenents/disp";

function App() {
  let [data, setdata] = useState([]);


  
  let [fd, setfd] = useState([]);

  // useEffect to fetch data
  useEffect(() => {
    let fxn = async () => {
      try {
        let datafetch = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        let dataget = await datafetch.json();
        console.log(dataget);
        setdata(dataget);
        setfd(dataget);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fxn();
  }, []);

  // input function to filter data
  function input_cge(e) {
    let inp1 = e.target.value;
    //do not use  inp made from let [inp,setinp]=useState('') it work as asynco so it delay or  

    let data_arr = fd.filter(el => {
      return el.name.toLowerCase().includes(inp1.toLowerCase());
    });

    setdata(data_arr);
  }

  function sortbymktcap() {
    const sortp = [...fd].sort((a, b) => {
      return b.market_cap - a.market_cap;
    });
    setdata(sortp);
  }

  function sortbyper() {
    const sortp = [...fd].sort((a, b) => {
      return b.atl_change_percentage - a.atl_change_percentage;
    });
    setdata(sortp);
  }

  return (
    <div className="App">
      <div className="controls">
        <input
          type="text"
          placeholder="Search By Name or Symbol"
          onChange={input_cge}
        />
        <button onClick={sortbymktcap}>Sort By Mkt Cap</button>
        <button onClick={sortbyper}>Sort by percentage</button>
      </div>
      {data.map((e, i) => (
        <div key={i}>
          <Disp e={e} i={i} />
        </div>
      ))}
    </div>
  );
}

export default App;
