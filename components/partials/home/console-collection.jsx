import ProductTwelve from '~/components/features/products/product-twelve';
import OwlCarousel from '~/components/features/owl-carousel';

import { productSlider } from '~/utils/data';
import ALink from '~/components/features/alink';

function ConsoleCollection ( props ) {
    const { products } = props;

    return (
        <div className="container">
            <div className="heading heading-flex mb-3">
                <div className="heading-left mb-2">
                    <h2 className="title">Consoles & Accessories</h2>
                </div>

                <div className="heading-right mb-2">
                    <ALink href="/shop/sidebar/list" className="title-link">View more products <i className="icon-long-arrow-right"></i></ALink>
                </div>
            </div>

            <OwlCarousel adClass="owl-simple carousel-with-shadow console-carousel carousel-equal-height" options={ productSlider }>
                {
                    products.length > 0 ?
                        products.slice( 0, 6 ).map( ( item, index ) =>
                            <ProductTwelve product={ item } key={ "Latest:" + index } />
                        )
                        :
                        new Array( 6 ).fill( 1 ).map( ( item, index ) => (
                            <div className="skel-pro" key={ "Skeleton" + index }></div>
                        ) )
                }
            </OwlCarousel>

            <div className="mb-5"></div>
        </div>
    )
}

export default ConsoleCollection;
