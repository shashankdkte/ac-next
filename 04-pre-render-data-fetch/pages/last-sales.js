import { useState, useEffect } from "react";

function LastSales(props) {
  const [sales, setSales] = useState();
  const [loading, setIsLoading] = useState(false);
  const transformedData = [];

  useEffect(() => {
    setIsLoading(true);
    fetch("https://ac-nextjs-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json")
      .then(response => response.json())
      .then(data => {
        for (let key in data)
        {
         transformedData.push({id:key,username:data[key].username ,volume:data[key].volume}) 
        }
        setSales(transformedData);
        setIsLoading(false);
      })
  },[])

  if (loading)
  {
    return <p>Loading...</p>
  }
  
  if (!sales)
  {
    return <p>NO data yet</p>
    }
  return <>
    <ul>
      {sales.map(sale => {
        return (
          <li key={sale.id}>{sale.username} - {sale.volume}</li>
        )
      })}
    </ul>
  </>
}

export default LastSales;