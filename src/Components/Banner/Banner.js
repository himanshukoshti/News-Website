import React from 'react'
import './Banner.css'
import HotTopic from './HotTopic/HotTopic'

var NewsData = require('../news.json')

const TopSection = () => {
    return (
        <>
            <section className="banner">
                <div className="banner-main-content">
                    <h2>GET THE WORLD'S LATEST TECH NEWS</h2>
                    <h3>World's Leading Tech News Portal</h3>

                    <button>
                        <a href="/">Know More</a>
                    </button>

                    <div className="current-news-head">
                        <h3>Apple Glasses: What we expect, what we think we are <span>by scott stein</span></h3>

                        <h3>What's it's like to have Elon Musk's old phone number <span>by abrar al-heeti</span></h3>

                        <h3>Watch the exact moment Chris Pratt accidentally deletes 51, 000 emials <span>by goel fashingbauer</span></h3>

                        <h3>Richard Branson's Virgin Orbit will launch a rocket from midair Sunday <span>by eric mack</span></h3>
                    </div>
                </div>

                <div className="banner-sub-content">
                    {
                        NewsData.map((news) => {
                            if (news.id <= 4) {
                                return (
                                    <HotTopic key={news.id} newsId={news.id} newsTitle={news.title} newsShortDesc={news.shortDesc} newsDesc={news.description} newsImage={news.image} />
                                )
                            }
                        })
                    }

                </div>
            </section>

            <hr></hr>
        </>
    )
}

export default TopSection