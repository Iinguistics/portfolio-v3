import React from 'react';
import Layout from "../components/layout";
import { FiList, FiGithub, FiActivity } from "react-icons/fi";
import { FaCodepen } from "react-icons/fa";
import ctdiMp4 from '../data/project/video/ctdi.mp4';
import stockMp4 from '../data/project/video/stock-project.mp4';
import forkMp4 from '../data/project/video/fork.mp4';
import {Link} from 'gatsby'


const more = () => {
    return (
        <Layout>
         {/* stock search */}
        <div className="rn-project-details-area rn-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="portfolio-content">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="content-left">
                                            <Link to="/#portfolio" className="link-button mb-4"><span>Go Back</span></Link>
                                                <div className="page-top">
                                                    <h1 className="title_holder">Stock Search</h1>
                                                </div>
                                                <h3 className="mt--20">Details</h3>
                                                <ul className="list_holder">
                                                    <li><span className="icon"><FiList />Stack:</span><span className="projectinfo">React, React-chartjs, Alpha Vantage API</span></li>
                                                    <li><span className="icon"><FiGithub />Code:</span><span className="projectinfo"><a href="https://github.com/Iinguistics/stocks-api-react" target= "_blank" rel="noopener noreferrer">Visit Repo</a></span></li>
                                                    <li><span className="icon"><FiActivity />Live Site:</span><span className="projectinfo"><a href="https://stock-api.netlify.app/" target= "_blank" rel="noopener noreferrer">Visit Site</a></span></li>
                                                </ul>
                                                <p className="mt--20">Search for a stock symbol to find out the latest $ price.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="thumbnail mt--90 mt_md--40 mt_sm--40 ">
                                    <video autoPlay muted loop className="w-100"> <source src={stockMp4}  type="video/mp4"/>
                                     Sorry, your browser doesn't support embedded videos.
                                     </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           {/* ctdi  */}
            <div className="rn-project-details-area rn-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="portfolio-content">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="content-left">
                                                <div className="page-top">
                                                    <h1 className="title_holder">CTDI</h1>
                                                </div>
                                                <h3 className="mt--20">Details</h3>
                                                <ul className="list_holder">
                                                    <li><span className="icon"><FiList />Stack:</span><span className="projectinfo">Vue, Google Maps, Google Charts, Three.js</span></li>
                                                    <li><span className="icon"><FiGithub />Code:</span><span className="projectinfo"><a href="https://github.com/Iinguistics/ctdi" target= "_blank" rel="noopener noreferrer">Visit Repo</a></span></li>
                                                </ul>
                                                <p className="mt--20">Focused on learning UI libraries, threejs,hovereffect, blotterjs, animejs & google charts to name a few.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="thumbnail mt--90 mt_md--40 mt_sm--40 ">
                                    <video autoPlay muted loop className="w-100"> <source src={ctdiMp4}  type="video/mp4"/>
                                     Sorry, your browser doesn't support embedded videos.
                                     </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

              {/* fork restaurant  */}
            <div className="rn-project-details-area rn-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="portfolio-content">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="content-left">
                                                <div className="page-top">
                                                    <h1 className="title_holder">Fork Restaurant</h1>
                                                </div>
                                                <h3 className="mt--20">Details</h3>
                                                <ul className="list_holder">
                                                    <li><span className="icon"><FiList />Stack:</span><span className="projectinfo">PHP / Laravel, Bootstrap, MySQL, Apache</span></li>
                                                    <li><span className="icon"><FiGithub />Code:</span><span className="projectinfo"><a href="https://github.com/Iinguistics/restaurant" target= "_blank" rel="noopener noreferrer">Visit Repo</a></span></li>
                                                </ul>
                                                <p className="mt--20">Focused on learning PHP / Laravel, MySQL, Apache & the blade template engine. Customer's can place their order, or book a private event. Employees can log in & view the submitted order's & event's, once the order is complete they can remove it from their list.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="thumbnail mt--90 mt_md--40 mt_sm--40 ">
                                    <video autoPlay muted loop className="w-100"> <source src={forkMp4}  type="video/mp4"/>
                                     Sorry, your browser doesn't support embedded videos.
                                     </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rn-project-details-area rn-section-gap bg-color-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner">
                                <div className="portfolio-content">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-12">
                                            <div className="content-left">
                                                <div className="page-top">
                                                    <h1 className="title_holder">Even More</h1>
                                             </div>
                                             <h3 className="mt--20">Codepen local weather app(vanilla js)</h3>
                                                <ul className="list_holder">
                                                    <li><span className="icon"><FaCodepen />Code:</span><span className="projectinfo"><a href="https://codepen.io/iinguistics/pen/ExNxpyB" target= "_blank" rel="noopener noreferrer">Visit Codepen</a></span></li>
                                                </ul>
                                                <h3 className="mt--20">Codepen quote generator(vanilla js)</h3>
                                                <ul className="list_holder">
                                                    <li><span className="icon"><FaCodepen />Code:</span><span className="projectinfo"><a href="https://codepen.io/iinguistics/pen/BazVzzY" target= "_blank" rel="noopener noreferrer">Visit Codepen</a></span></li>
                                                </ul>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default more
