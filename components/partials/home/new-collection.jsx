import { LazyLoadImage } from 'react-lazy-load-image-component';

// Import Custom Component
import ALink from '~/components/features/alink';
import ProductTwelve from '~/components/features/products/product-twelve';
import OwlCarousel from '~/components/features/owl-carousel';

// Import Custom Utils
import { attrFilter } from '~/utils';

function NewCollection ( props ) {
    const { products } = props;

    return (
        <div className="container">
            <div className="heading heading-flex mb-2 mb-lg-3">
                <div className="heading-left">
                    <h2 className="title mb-0">Games Coming Soon</h2>
                </div>

                <div className="heading-right">
                    <ALink href="/shop/sidebar/list" className="title-link">View more products <i className="icon-long-arrow-right"></i></ALink>
                </div>
            </div>
            <div className="games-soon">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="products">
                            <div className="row">
                                {
                                    products ?
                                        attrFilter( products, 'new' ).slice( 0, 6 ).map( ( item, index ) =>
                                            <div className="col-6 col-md-4" key={ "Latest:" + index } >
                                                <ProductTwelve product={ item } />
                                            </div>
                                        )
                                        :
                                        new Array( 6 ).fill( 1 ).map( ( item, index ) => (
                                            <div className="skel-pro col-6 col-md-4" key={ "Skeleton" + index }></div>
                                        ) )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 order-first">
                        <OwlCarousel adClass="owl-simple games-banners-slider" options={ { nav: false, responsive: { 992: { items: 1 }, 768: { items: 2, margin: 20 } } } }>
                            <div className="banner banner-overlay product-banner mb-0">
                                <ALink href="/shop/sidebar/list" className="position-static lazy-media">
                                    <figure className="mb-0">
                                        <div className="lazy-overlay"></div>
                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/home/banners/banner-9.jpg"
                                            threshold={ 200 }
                                            width="100%"
                                            height="auto"
                                            effect="blur"
                                        />
                                    </figure>
                                </ALink>
                                <div className="banner-content align-items-center center">
                                    <h4 className="banner-subtitle text-white">Out 14 May 2019</h4>
                                    <img className="banner-title-img" src="images/home/banners/banner-9-title.png" alt="Banner-9" />
                                    <h4 className="banner-price">$29.99</h4>
                                    <ALink href="/shop/sidebar/list" className="banner-link">Pre-Order Now<i className="icon-long-arrow-right"></i></ALink>
                                </div>
                            </div>

                            <div className="banner banner-overlay product-banner mb-0">
                                <ALink href="/shop/sidebar/list" className="position-static lazy-media">
                                    <figure className="mb-0">
                                        <div className="lazy-overlay"></div>
                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/home/banners/banner-10.jpg"
                                            threshold={ 200 }
                                            width="100%"
                                            height="auto"
                                            effect="blur"
                                        />
                                    </figure>
                                </ALink>
                                <div className="banner-content">
                                    <h4 className="banner-subtitle text-white">Out 14 May 2019</h4>
                                    <img className="banner-title-img" src="images/home/banners/banner-10-title.png" alt="Banner-10" />
                                    <h4 className="banner-price">$79.99</h4>
                                    <ALink href="/shop/sidebar/list" className="banner-link">Pre-Order Now<i className="icon-long-arrow-right"></i></ALink>
                                </div>
                            </div>

                            <div className="banner banner-overlay product-banner mb-0">
                                <ALink href="/shop/sidebar/list" className="position-static lazy-media">
                                    <figure className="mb-0">
                                        <div className="lazy-overlay"></div>
                                        <LazyLoadImage
                                            alt="banner"
                                            src="images/home/banners/banner-11.jpg"
                                            threshold={ 200 }
                                            width="100%"
                                            height="auto"
                                            effect="blur"
                                        />
                                    </figure>
                                </ALink>

                                <div className="banner-content align-items-center center">
                                    <h4 className="banner-subtitle text-white">Out 14 May 2019</h4>
                                    <img className="banner-title-img" src="images/home/banners/banner-11-title.png" alt="Banner-11" />
                                    <h4 className="banner-txt">Main Game & Kombat Pack</h4>
                                    <img className="banner-title-img" src="images/home/banners/banner-11-subtitle.png" alt="Banner-11" />
                                    <h4 className="banner-price mt-1">$99.99</h4>
                                    <ALink href="/shop/sidebar/list" className="banner-link">Pre-Order Now<i className="icon-long-arrow-right"></i></ALink>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCollection;
