import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import '../App.css'

const News = ({category, country}) => {
    const [apidata, setApidata] = useState([])
    const [loading, setLoading] = useState(true)
    const apiKey = '9fd30ce1bc294f84bea3b4dd87bcbb1a';
    const defaultImageSrc = 'https://ichef.bbci.co.uk/news/1024/branded_news/14A09/production/_132098448_indgettyimages-1491467124-1.jpg';

    useEffect(() => {
        const newsdata = async() =>{
            try {
                let response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`)
                
                let data = await response.json();
                setApidata(data);
                console.log(data.articles[0]);
                setLoading(false);
                
            } catch (error) {
                console.error('News Not Loading!' , error);
                setLoading(false);
            }
            
        }
        newsdata();
    }, [category , country])
    
  return (

    <> 
    {loading ? (
        // Render a spinner or loading indicator while data is being loaded
        <Box className='boxloading' sx={{ display: 'flex' }}>
      <CircularProgress />
        </Box>
      ) : (
        <div className="cardsitem">
          {apidata.articles &&
            apidata.articles.map((article) => (
              <div className="card mx-5 my-5" style={{ width: '18rem' }} key={article.id}>
                <img src={article.urlToImage || defaultImageSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">
                    {article.description
                      ? article.description.split(' ').slice(0, 10) + '...'
                      : 'No Description available'}
                  </p>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Read More..
                  </a>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
};


export default News