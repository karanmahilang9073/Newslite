import React from 'react'

const Newsitem = (props) => {

    let { title, description, imgUrl, newsUrl, author, date, source } = props;
    

    return (
      <div className='my-3'>
        <div className="card">
        <div style={{ display: 'flex',justifyContent:'flex-end', position:'absolute', right:'0'  }}>
          <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
          <img src={!imgUrl ? "https://ichef.bbci.co.uk/news/1024/branded_news/7ea0/live/49a59bf0-ad4a-11ef-949f-237b8d27da64.jpg" : imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}......</p>
            <p className="card-text"><small className="text-body-secondary">by {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel='noopener noreferrer' target='_blank' className="btn btn-sm btn-dark">read more</a>
          </div>
        </div>
      </div>
    )
  }


export default Newsitem
