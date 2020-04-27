import React, { useContext } from "react";

import NewsContext from "./NewsContext";

function News(props) {
  const data = useContext(NewsContext);

  let URL = localStorage.getItem("Url")
    ? JSON.parse(localStorage.getItem("Url"))
    : [];

  const handleBookmark = (url) => {
    URL.push(url);
    localStorage.setItem("Url", JSON.stringify(URL));
  };

  return (
    <div>
      {data && (
        <div>
          {data.hits.map((news, i) => {
            return (
              <div>
                <button
                  className="btn btn-success float-right"
                  onClick={() => handleBookmark(news.url)}
                >
                  Add Bookmark
                </button>
                <div key={i} style={{ zIndex: "-1" }} className="card">
                  <div className="card-body">
                    <span className="card-text">
                      <h4>Title: {news.title}</h4>{" "}
                      <span>
                        Author: {news.author} &ensp; Points: {news.points}{" "}
                        &ensp; URL :{" "}
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`${news.url}`}
                        >
                          {news.url}
                        </a>
                        &ensp; Tags:{" "}
                        {news._tags.map((tag, i) => {
                          return <span key={i}>{tag}, </span>;
                        })}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default News;
