import React from 'react'
import { NavLink } from "react-router-dom";

const RightContainerCard = ({ newsId, newsTitle, newsShortDesc, newsDesc, newsImage }) => {
    return (
        <>
            <article>
                <h4>Just in </h4>
                <div>
                    <h2>{newsTitle}</h2>

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
                <img src={newsImage} />
            </article>
        </>
    )
}

export default RightContainerCard