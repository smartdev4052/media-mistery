import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';

import ProductTwelve from '~/components/features/products/product-twelve';
import OwlCarousel from '~/components/features/owl-carousel';

import { attrFilter } from '~/utils';
import { productSlider } from '~/utils/data';

function SpecialCollection ( props ) {
    const { products } = props;

    return (
        <Tabs defaultIndex={ 0 } selectedTabClassName="show" >
            <div className="bg-light pt-3 pb-5 mb-5 special-collection">
                <div className="container">
                    <TabList className="nav nav-pills nav-border-anim nav-big justify-content-center mb-3">
                        <Tab className="nav-item">
                            <span className="nav-link">Now Trending</span>
                        </Tab>

                        <Tab className="nav-item">
                            <span className="nav-link">New Releases</span>
                        </Tab>

                        <Tab className="nav-item">
                            <span className="nav-link">Best-Rated</span>
                        </Tab>
                    </TabList>

                    <div className="tab-content">
                        <TabPanel>
                            <OwlCarousel adClass="owl-simple carousel-with-shadow carousel-equal-height" options={ productSlider }>
                                {
                                    products ?
                                        attrFilter( products, 'featured' ).slice( 0, 8 ).map( ( item, index ) =>
                                            <ProductTwelve product={ item } key={ "Latest:" + index } />
                                        )
                                        :
                                        new Array( 8 ).fill( 1 ).map( ( item, index ) => (
                                            <div className="skel-pro" key={ "Skeleton" + index }></div>
                                        ) )
                                }
                            </OwlCarousel>
                        </TabPanel>

                        <TabPanel>
                            <OwlCarousel adClass="owl-simple carousel-with-shadow" options={ productSlider }>
                                {
                                    products ?
                                        attrFilter( products, 'new' ).slice( 0, 8 ).map( ( item, index ) =>
                                            <ProductTwelve product={ item } key={ "Latest:" + index } />
                                        )
                                        :
                                        new Array( 8 ).fill( 1 ).map( ( item, index ) => (
                                            <div className="skel-pro" key={ "Skeleton" + index }></div>
                                        ) )
                                }
                            </OwlCarousel>
                        </TabPanel>

                        <TabPanel>
                            <OwlCarousel adClass="owl-simple carousel-with-shadow" options={ productSlider }>
                                {
                                    products ?
                                        attrFilter( products, 'top' ).slice( 0, 8 ).map( ( item, index ) =>
                                            <ProductTwelve product={ item } key={ "Latest:" + index } />
                                        )
                                        :
                                        new Array( 8 ).fill( 1 ).map( ( item, index ) => (
                                            <div className="skel-pro" key={ "Skeleton" + index }></div>
                                        ) )
                                }
                            </OwlCarousel>
                        </TabPanel>
                    </div>
                </div>
            </div>
        </Tabs>
    )
}

export default SpecialCollection;
