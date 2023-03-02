import React from 'react'
import { NavLink } from "react-router-dom";

const HotTopic = ({ newsId, newsTitle, newsShortDesc, newsDesc, newsImage }) => {
    return (
        <div className="hot-topic" key={newsId}>
            <div className='img-div'>
                <img src={newsImage}/>
            </div>

            <div className="hot-topic-content">
                <h2>{newsTitle}</h2>
                <NavLink
                    to={`/news/${newsId}`}
                    state={{
                        newsId,
                        newsTitle,
                        newsShortDesc, 
                        newsDesc, 
                        newsImage, 
                    }}>
                    Read more
                </NavLink>
            </div>
        </div>
    )
}

export default HotTopic