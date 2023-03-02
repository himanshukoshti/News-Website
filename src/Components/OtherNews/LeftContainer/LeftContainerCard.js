import React from 'react'
import { NavLink } from "react-router-dom";

const LeftContainerCard = ({ newsId, newsTitle, newsShortDesc, newsDesc, newsImage }) => {
    return (
        <>
            <article key={newsId}>
                <img src={newsImage} className='container-top-left-img' />

                <div>
                    <h3>{newsTitle}</h3>

                    <p>{newsShortDesc}</p>

                    <NavLink
                        to={`/news/${newsId}`}
                        state={{
                            newsId,
                            newsTitle,
                            newsShortDesc,
                            newsDesc,
                            newsImage,
                        }}>
                        Read more<span>{">>"}</span>
                    </NavLink>
                </div>
            </article>
        </>
    )
}

export default LeftContainerCard