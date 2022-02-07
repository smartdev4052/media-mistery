import { connect } from "react-redux";
import SelectBox from "~/components/media/selectBox";

const BuyForm = (props) =>  {
    const Ratings = props.ratings;
    return(
        <div className="product-details">
            <h1 className="product-title" style={{textTransform: "capitalize"}}>{ props.name }</h1>
            <div className="ratings-container">
                <div className="ratings">
                    <div className="ratings-val" style={ { width: Ratings[props.pName][props.current] * 20 + '%' } }></div>
                    
                </div>
                <span className="ratings-text">( 2 Reviews )</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="product-price">$72.00</span>
            </div>
            <SelectBox name={props.name} type="Type"/>
            <SelectBox name={props.name} type="Quantity"/>
            <SelectBox name={props.name} type="Country"/>
            <input type="text" className="form-control"placeholder="Linked in Profile Url*" required />
            <div className="product-details-action">
                <a
                    href="#"
                    className={ `btn-product btn-cart` }
                >
                    <span>add to cart</span>
                </a>
                <div className="details-action-wrapper">
                    <a href="#" className="btn-product btn-wishlist" ><span>Buy Now</span></a>
                </div>
            </div >
        </div>
    );
}

const mapStateToProps = (state) =>  ({
    ratings: state.ratings
})

export default connect(mapStateToProps, null)(BuyForm);