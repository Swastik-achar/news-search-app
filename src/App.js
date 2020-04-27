import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";
// import ViewBookmarks from "./Components/ViewBookmarks";
import News from "./Components/News";
import { NewsProvider } from "./Components/NewsContext";
import Form from "./Components/Form";

function App(props) {
  const [news, setNews] = useState("");

  const [values, setValues] = useState({
    title: "",
    isSearch: false,
    focus: false,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        if (values.title !== "" && values.isSearch) {
          const response = await axios.get(
            `https://hn.algolia.com/api/v1/search?query=${values.title}`
          );
          console.log(response.data);
          setNews(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [values.isSearch]);

  const handleSubmit = (values, isSearch) => {
    console.log(values);
    setValues({ title: values, isSearch });
  };

  return (
    <NewsProvider value={news}>
      <div>
        <Form handleSubmit={handleSubmit} />
        &ensp;
        <News />
      </div>
    </NewsProvider>
  );
}

export default App;
