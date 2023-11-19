import React from 'react';
import cassandra from '../../images/team/cassandra.jpg';
import amanda from '../../images/team/amanda.jpg';
import jack from '../../images/team/jack.jpg';

function Client() {
    return (
        <div className='client'>
            <div className="team-white-background">
                <p className="paragraph-red team-white-background-p">Testimonial</p>
                <h2>What Out Client Says</h2>
                <div className="client-boxes">
                    <div className="client-box">
                        <p className="red-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                        <p className="paragraph-grey">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                            tellus urna, sodales id diam in, ullamcorper pretium dolor. In arcu odio, interdum nec
                            lobortis et, varius nec orci. Aliquam ut viverra mi. Nunc laoreet nunc eget dolor
                            sodales eleifend."</p>
                        <div className="client-box-img-block">
                            <img src={cassandra} />
                            <div className="client-box-name">
                                <p><b>Cassandra Warren</b></p>
                                <p className="paragraph-red">Business Manager, Dorfus</p>
                            </div>
                        </div>
                    </div>
                    <div className="client-box">
                        <p className="red-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                        <p className="paragraph-grey">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                            tellus urna, sodales id diam in, ullamcorper pretium dolor. In arcu odio, interdum nec
                            lobortis et, varius nec orci. Aliquam ut viverra mi. Nunc laoreet nunc eget dolor
                            sodales eleifend."</p>
                        <div className="client-box-img-block">
                            <img src={amanda} />
                            <div className="client-box-name">
                                <p><b>Amanda Tulling</b></p>
                                <p className="paragraph-red">Senior Developer, Square</p>
                            </div>
                        </div>
                    </div>
                    <div className="client-box">
                        <p className="red-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
                        <p className="paragraph-grey">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                            tellus urna, sodales id diam in, ullamcorper pretium dolor. In arcu odio, interdum nec
                            lobortis et, varius nec orci. Aliquam ut viverra mi. Nunc laoreet nunc eget dolor
                            sodales eleifend."</p>
                        <div className="client-box-img-block">
                            <img src={jack} />
                            <div className="client-box-name">
                                <p><b>Jack McDogglas</b></p>
                                <p className="paragraph-red">Key Account Manager, Gobona</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="button-animated button-black"><span>All Reviews</span></button>
            </div>
        </div>
    );
}

export default Client;



