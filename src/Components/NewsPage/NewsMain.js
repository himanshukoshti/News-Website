import React from 'react'
import { useLocation } from "react-router-dom";
import './NewsMain.css'

const NewsMain = () => {
    const { state } = useLocation();
    let i = 1

    return (
        <>
            <div className='news-container'>
                <div className='news-title'>
                    <h1>{state.newsTitle}</h1>
                </div>
                <div className="news-image">
                    <img src={state.newsImage} />
                </div>
                <div className="news-description">
                    {
                        state.newsDesc.split('\n').map(c => <p key={i++}> {c} <br/></p>)
                    }
                </div>
            </div>
        </>
    )
}

export default NewsMain