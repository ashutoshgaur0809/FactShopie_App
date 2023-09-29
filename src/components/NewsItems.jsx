import React from "react";

// export class NewsItems extends Component {
  const NewsItems = (props) => {

    let { title, description, imgUrl, newsUrl, author, date, source } = props; // this.props; we not use this bcoz of we use func based comp
    return (
      <div className="my-3">
        <div className="card">
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">
            {source}   
          </span>
          <img
            src={
              !imgUrl
                ? "https://www.livemint.com/lm-img/img/2023/07/11/600x338/Nepal-Helicopter-0_1689065200873_1689065226109.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            {/*yaha date ka object banaya uspe togmtstring apply kiya           */}
            <p className="card-text">
              <small className="text-primary">
                By {!author ? "Ashutosh" : author} on
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItems;
