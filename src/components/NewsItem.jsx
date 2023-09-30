export default function NewsItem(props) {
  // eslint-disable-next-line react/prop-types
  const { title, description, imgUrl, newsUrl, date } = props;
  return (
    <div>
      <div className="card" style={{ width: "18rem", height: "35rem" }}>
        <img src={imgUrl} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              {new Date(date).toUTCString()}{" "}
            </small>
          </p>
          {title == "[Removed]" ? (
            ""
          ) : (
            <a
              href={newsUrl}
              className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              Read More
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
