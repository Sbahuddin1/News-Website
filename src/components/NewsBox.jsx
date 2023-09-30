/* eslint-disable react/prop-types */
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from "react";

export default function NewsBox(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  NewsBox.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  NewsBox.defaultProps = {
    country: "us",
    pageSize: 12,
    category: "general",
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.YOUR_apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `SGR NEWS | ${props.category}`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.YOUR_apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="my-4 container">
      {props.category != "general" ? (
        <h1 className="text-center">{`Top ${props.category} news`}</h1>
      ) : (
        <h1 className="text-center">Top Headlines</h1>
      )}
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length != totalResults}
        loader={<Spinner />}
      >
        <div className="my-4 container ">
          <div className="row ">
            {articles.map((e) => {
              return (
                <div
                  className=" n-box d-flex justify-content-evenly col-md-4 my-5"
                  key={e.ur}
                >
                  <NewsItem
                    title={e.title ? e.title : ""}
                    description={
                      e.title == "[Removed]"
                        ? (e.description = "")
                        : e.description
                        ? e.description.slice(0, 170)
                        : ""
                    }
                    imgUrl={e.urlToImage ? e.urlToImage : "/noImage.jpg"}
                    newsUrl={e.url}
                    date={
                      e.title == "[Removed]"
                        ? (e.publishedAt = "")
                        : e.publishedAt
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}
