import React,{useEffect,useState} from "react";
import NewsItems from "./NewsItems";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


// import Spiner from './Spiner';

const News = (props) => {

  const capitalFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
 
 
 const updateNews = async()=>{
    props.setProgress(10);//pass setprogress as props
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3c4a3d7bb77548eaa06365391d509ac2&page=
    ${page}&pageSize=${props.pageSize}`;
    // propssetState({loading:true});
    setLoading(true)
    let data = await fetch(url); //fetch api takes url and return promise(output)
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log(parsedData);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    
    
   
    props.setProgress(100);

  }

   useEffect(() => {
    document.title = `${capitalFirstLetter(props.category)} - News Monkey`
     updateNews();
   
     
   }, [])
   
 

 const fetchMoreData = async () => {
  // setState({page: setState.page + 1});
   
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3c4a3d7bb77548eaa06365391d509ac2&page=
    ${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    // setState({loading:true});
    let data = await fetch(url); //fetch api takes url and return promise(output)
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
   
  };

    return (
      <div className="container my-3">
        <h1 className="text-center" style={{marginTop:'90px'}}>
           Top {props.category} Headlines
        </h1>
        {/* <Spiner/> */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<h4>Loading...</h4>}
        >
         <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                {/*yaha ternary oprator use liya hai if title != null ho toh -> slice ho jaaye 
            else title = null ho toh vo ->" "*/}
                <NewsItems
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
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


export default News;
