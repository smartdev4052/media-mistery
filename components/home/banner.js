import { LazyLoadImage } from "react-lazy-load-image-component";
import ALink from "../features/alink";

const Banner = (props) =>   {
    return (
        <div className="banner banner-overlay banner-sm banner-ad content-right align-center">
            <figure className="mb-0 lazy-media">
                <div className="lazy-overlay"></div>
                <LazyLoadImage
                    alt="banner"
                    src=""
                    threshold={ 200 }
                    width="100%"
                    height="auto"
                    effect="blur"
                />
            </figure>

            <div className="banner-content">
                <h4 className="banner-title">{props.title}</h4>
                <h4 className="banner-price"><span className="price">Price Start From ${props.price}</span></h4>
                <ALink href="/shop/sidebar/list" className="banner-link">ORDER NOW</ALink>
            </div>
        </div>
    )
}

export default Banner;