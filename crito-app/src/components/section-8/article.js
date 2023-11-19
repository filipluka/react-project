import React from 'react';
import image1 from '../../images/article_news/image1.jpg';
import image2 from '../../images/article_news/image2.jpg';
import image3 from '../../images/article_news/image3.jpg';

function Article() {
    return (
        <div className="article">
            <div className="article-title-box">
                <p className="paragraph-red">Article & News</p>
                <div className="team-title-box">
                    <h2>Get Every Single Articles & News</h2>
                    <button className="button-article-transparent team-title-box-button"><span>Browse
                        Articles</span></button>
                </div>
            </div>
            <div className="article-box-container">
                <div className="article-box">
                    <div className="overlay-date-box">
                        <h3>25</h3>
                        <p>Mar</p>
                    </div>
                    <img src={image1} alt="article-img" />
                    <p className="paragraph-grey no-margin-p">Business</p>
                    <h3>How To Use Digitalization In The classNameroom</h3>
                    <p className="paragraph-grey no-margin-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam ut viverra mi.</p>
                </div>
                <div className="article-box">
                    <div className="overlay-date-box">
                        <h3>17</h3>
                        <p>Mar</p>
                    </div>
                    <img src={image2} alt="article-img" />
                    <p className="paragraph-grey no-margin-p">Business</p>
                    <h3>How To Implement Chatt GPT In Your Projects</h3>
                    <p className="paragraph-grey no-margin-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam ut viverra mi.</p>
                </div>
                <div className="article-box">
                    <div className="overlay-date-box">
                        <h3>13</h3>
                        <p>Mar</p>
                    </div>
                    <img src={image3} alt="article-img" />
                    <p className="paragraph-grey no-margin-p">Business</p>
                    <h3>The Guide To Support Modern CSS Design</h3>
                    <p className="paragraph-grey no-margin-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam ut viverra mi.</p>
                </div>
            </div>
            <ul className="container-dots">
                <li className="link active"><a href="#"></a></li>
                <li className="link"><a href="#"></a></li>
                <li className="link"><a href="#"></a></li>
                <li className="link"><a href="#"></a></li>
                <li className="link"><a href="#"></a></li>
            </ul>
        </div>

    );
}

export default Article;