import React, { useState, useEffect } from "react";
import Newsitem from "./Newsitem.jsx";
import Spinner from "./Spinner.jsx"; // Keep this if it’s an image
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({
  country = "us",
  pageSize = 8,
  category = "general",
  setProgress,
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ff63d2562da944f09b22c13eb20aafce&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    setProgress(30);
    let parseData = await data.json();
    setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    setProgress(100); //
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(category)} - NewsLite`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=ff63d2562da944f09b22c13eb20aafce&page=${page}&pageSize=${pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0px", marginTop: "90px" }}>
        NewsLite - Top {capitalizeFirstLetter(category)} Headlines
      </h1>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func,
};

export default News;
