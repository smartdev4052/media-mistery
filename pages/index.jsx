import Reveal from 'react-awesome-reveal';
import { useQuery } from "@apollo/client";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Apollo And Queries
import withApollo from '~/server/apollo';
import { GET_HOME_DATA } from '~/server/queries';

// Import Custom Component
import ALink from '~/components/features/alink';
// import BlogCollection from '~/components/partials/home/blog-collection';
// import ConsoleCollection from '~/components/partials/home/console-collection';
// import NewCollection from '~/components/partials/home/new-collection';
// import SpecialCollection from '~/components/partials/home/special-collection';

import Card from '~/components/features/accordion/card';
import Accordion from '~/components/features/accordion/accordion';
import Question from '~/components/Question';

// Import Utils
import { catFilter } from '~/utils';
import { fadeIn } from '~/utils/data';
import Banner from '~/components/home/banner';

function Home () {
    const { data, loading, error } = useQuery( GET_HOME_DATA );
    const products = data && data.homeData.products;
    const consoleProducts = catFilter( data && data.homeData.products, [ 'console', 'accessories' ] );
    const posts = data && data.homeData.posts;

    // if ( error ) {
    //     return <div></div>
    // }

    return (
        <div className={ `main home-page skeleton-body skel-shop-products ${loading ? '' : 'loaded'}` }>
            <div className="mb-2"></div>
            <div className="container">
                <hr className="mb-4" />
                <div className="row">
                    <div className="col-12">
                        <div className="banner banner-big">
                            <ALink href="#">
                                <div className="lazy-overlay"></div>

                                <LazyLoadImage
                                    alt="banner"
                                    height={ 470 }
                                    width={ 300 }
                                    src=""
                                    threshold={ 200 }
                                    effect="black-and-white"
                                />
                            </ALink>

                            <div className="banner-content">
                                <h3 className="banner-title text-white">We Help You To Grow Your Social Network</h3>
                                <p className="d-none d-lg-block">Media Mister is proud to offer a comprehensive range of social media enhancement services for all purposes.</p>

                                <ALink href="#" className="btn btn-primary btn-rounded"><span>Order Now</span><i className="icon-long-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <p>Media Mister is the only resource you'll ever need to win on the world's biggest social platforms. We cover all social media marketing needs under one roof, with a dynamic range of services available at rock-bottom prices.</p>
                    <br/>
                    <p> Our experience and expertise cover all types of promotional products for Facebook, Instagram, YouTube, Twitter, LinkedIn, SoundCloud, and all other popular networks. With Media Mister, you can boost your campaign in an instant with 100% authentic social proof of guaranteed quality. </p>
                    <br/>
                    <p>Likes, Followers, Views, Comments, Reposts, Retweets, Mentions – whatever you need, you'll find it right here at an unbeatable price. Browse the full range of services available on the Media Mister website, or chat anytime if you would like to discuss placing a custom order.</p>
                </div>
            </div>

            <div className="container">
                <h2 className="text-center"> Most Purchased Services </h2>
                <div className="row justify-content-center">
                    <div className="col-sm-6 col-md-4">
                        <Banner title="Instagram Followers" price="19.99"/>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <Banner title="YouTube Views" price="13" />
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <Banner title="Twitter Followers" price="2"/>
                    </div>
                </div>
            </div>
            
            <hr className="mb-6" />

            <div className="page-content">
                <div className="container">

            <h2 className="title mb-4 text-center">
            Why Choose Media Mister?
                </h2>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="icon-box icon-box-circle text-center">
                                <span className="icon-box-icon">
                                    <i className="icon-info-circle"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Experience and Expertise</h3>

                                    <p>The team at Media Mister brings decades of combined experience to every project we take on. To date, we've supported more than 50,000 customers from all over the world with a dynamic range of authentic social signals for the world's most competitive platforms.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="icon-box icon-box-circle text-center">
                                <span className="icon-box-icon">
                                    <i className="icon-star-o"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">The Personal Touch</h3>

                                    <p>Each and every service provided by Media Mister is performed 100% manually. We provide high-impact social signals from real people with active and authentic accounts – no bots, no automation, and a strict no-spam policy. When we say we deliver 'real' social signals, we mean it!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="icon-box icon-box-circle text-center">
                                <span className="icon-box-icon">
                                    <i className="icon-heart-o"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Targeted Services</h3>
                                    <p>If looking to tap into a specific geographic market, we can help. Media Mister provides a wide range of targeted services, including Likes, Followers, Views, Comments, Reposts, Retweets, and Mentions from a variety of major international markets worldwide.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="icon-box icon-box-circle text-center">
                                <span className="icon-box-icon">
                                    <i className="icon-info-circle"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Privacy & Safety</h3>

                                    <p>We never ask our customers to disclose any of their sensitive data or login credentials in order to provide our services. Everything takes place 100% off-site, and we always go the extra mile to ensure total safety and discretion for every customer we work with.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="icon-box icon-box-circle text-center">
                                <span className="icon-box-icon">
                                    <i className="icon-star-o"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Money-Back Guarantee</h3>

                                    <p>Your satisfaction is our top priority at Media Mister. If we fail to get the job done as promised, we'll give you a full refund of the initial purchase price. No questions and no excuses – we either get the job done right, or you won't pay us a penny!</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="icon-box icon-box-circle text-center">
                                <span className="icon-box-icon">
                                    <i className="icon-heart-o"></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">Great Customer Support</h3>
                                    <p>You can trust the team at Media Mister to provide you with the honest and objective advice you need to choose the perfect products for your promotional campaign. We're always on hand to answer any questions you may have and explain in detail how our services work.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

{/* {
            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <NewCollection products={ products } />
            </Reveal>} */}

            {/* {<Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 } triggerOnce>
                <ConsoleCollection products={ consoleProducts } />
            </Reveal> */}
            {/* <BlogCollection posts={ posts } /> */}

            <hr className="mb-6" />
            <div className="page-content">
                <div className="container">
                    <h2 className="title text-center mb-3">How Does Media Mister Work?</h2>

                    <Accordion adClass="accordion-rounded">
                        <Card title="Select Your Social Network" adClass="card-box card-sm bg-light">
                            Choose from dozens of popular social networks using the links at the top of the page.
                        </Card>

                        <Card title="Choose a Package" adClass="card-box card-sm bg-light">
                            Find the service you need and select the size of the package you would like to purchase.
                        </Card>

                        <Card title="Enter Details" adClass="card-box card-sm bg-light">
                        Enter the URL of your content or your social media username when prompted.
                        </Card>

                        <Card title="Check Out" adClass="card-box card-sm bg-light"  >
                        Complete the secure online payment process, and we'll begin delivering your order.
                        </Card>
                    </Accordion>
                </div>
            </div>

            <Question position="home" />            

        </div>
    )
}

export default withApollo( { ssr: typeof window == 'undefined' } )( Home );