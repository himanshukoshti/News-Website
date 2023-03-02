import React from 'react'
import './OtherNews.css'
import LeftContainerCard from './LeftContainer/LeftContainerCard'
import RightContainerCard from './RightContainer/RightContainerCard'

var NewsData = require('../news.json')

const OtherNews = () => {
    return (
        <>
            <main>
                {/* Left container */}
                <section className="main-container-left">
                    <h2>Top Stories</h2>
                    <div className="container-top-left">

                        {
                            NewsData.map((news) => {
                                return (
                                    <LeftContainerCard key={news.id} newsId={news.id} newsTitle={news.title} newsShortDesc={news.shortDesc} newsDesc={news.description} newsImage={news.image} />)
                            })
                        }

                    </div>
                </section>

                {/* Right container */}
                <section className="main-container-right">
                    <h2>Latest Stories</h2>

                    {
                        NewsData.map((news) => {
                            return (
                                <RightContainerCard key={news.id} newsId={news.id} newsTitle={news.title} newsShortDesc={news.shortDesc} newsDesc={news.description} newsImage={news.image} />)
                        })
                    }

                </section>
            </main>
        </>
    )
}

export default OtherNews