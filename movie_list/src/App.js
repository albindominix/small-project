import React, { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout";

import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [item, setItem] = useState([]);
  const [query,setQuery]=useState("")
const [filtered,setFiltered]=useState([])
  useEffect(() => {
    fetchCall();
  }, []);

  const fetchCall = async () => {
    let url="https://imdb-api.com/en/API/Top250Movies/k_0t12rfr3";
    if(query!==''){
      console.log(query)
      url="https://imdb-api.com/en/API/Top250Movies/k_0t12rfr3"
    }
    const res = await fetch(url);
    const data = await res.json();
    setItem(data.items);
    console.log(data.items);
    setFiltered(data.items)
  };

  console.log(filtered)
  return (
    <>
      <Header />
      <Search setFiltered={setFiltered} getQuery={setQuery}item={item}/>
      <Layout item={item} filtered={filtered} />
    </>
  );
}

export default App;
