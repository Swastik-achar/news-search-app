import React, { useState } from "react";
import ViewBookmarks from "./ViewBookmarks";
import "../App.css";

function Form(props) {
  const [status, setStatus] = useState(false);

  const [values, setValues] = useState({
    title: "",
    isSearch: false,
    focus: false,
  });

  const handleFocus = () => setValues({ focus: !values.focus });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(false);
    props.handleSubmit(values.title, !values.isSearch);
    setValues({ title: values.title, isSearch: !values.isSearch });
  };

  let searches = localStorage.getItem("search")
    ? JSON.parse(localStorage.getItem("search"))
    : [];

  const handleSave = () => {
    searches.push(values.title);
    localStorage.setItem("search", JSON.stringify(searches));
  };
  return (
    <div>
      <div className="Nav">
        <span className="header">Hacker News</span>
        <button
          className="btn btn-dark float-right bookmark"
          onClick={() => setStatus(true)}
        >
          View Bookmarks
        </button>
        {status && <ViewBookmarks />}
        <div style={{ marginTop: "-13px", marginLeft: "100px" }}>
          <form onSubmit={handleSubmit}>
            <div className="d-flex justify-content-center">
              <div className="form-group">
                <input
                  style={{ height: "35px" }}
                  type="search"
                  placeholder="Search..."
                  value={values.title}
                  onFocus={handleFocus}
                  className="form-control form-control-lg form-control-borderless"
                  onChange={(e) => setValues({ title: e.target.value })}
                />
                {values.focus && (
                  <div
                    style={{
                      boxShadow: "5px 10px 18px #888888",
                      width: "auto",
                      height: "auto",
                      backgroundColor: "white",
                      borderRadius: "5px",
                     
                    }}
                  >
                    {searches.map((search, i) => {
                      return (
                        <dl
                          key={i}
                          className="search"
                          onClick={() =>
                            setValues({ title: search, focus: !values.focus })
                          }
                        >
                          &ensp;{search}
                        </dl>
                      );
                    })}
                  </div>
                )}
              </div>{" "}
              &ensp;
              <button
                type="button"
                className="btn btn-success"
                onClick={handleSave}
                style={{ height: "35px" }}
              >
                Save Search
              </button>{" "}
              &ensp;
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
                style={{ height: "36px" }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
