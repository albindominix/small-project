import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CharacterGrid from "./components/CharacterGrid";
import Header from "./components/Header";
import Search from "./components/Search/Search";

function App() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      // console.log(result.data)
      setItem(result.data);
      setLoading(false);
    };
    fetch();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={setQuery} item={item}/>
      <CharacterGrid loading={loading} item={item} />
    </div>
  );
}

export default App;
