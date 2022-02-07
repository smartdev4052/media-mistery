
const FeatureCard = (props) =>  {
    const {img, name} = props;
    return (
        <div className="product product-sm">
            <figure className="product-media">
                <img
                    alt="Product"
                    className="product-image"
                />
            </figure>

            <div className="product-body">
                <h5 className="product-title">
                    { name }
                </h5>
            </div>
        </div>
    )
}

export default FeatureCard;