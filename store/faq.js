const initialState = {
    home:   {
        title: "",
        questions: [{
            title: "Does Media Mister Offer Best Prices on the Web?",
            content : "We're constantly comparing our prices with those of our closest competitors, in order to ensure the best possible deal for our customers. However, we refuse to compromise on the quality or authenticity of the products and services we provide. If you find a better like-for-like deal on 100% authentic social signals, contact our customer support team anytime."
        },
        {
            title: "Are your Likes, Followers, Views, Comments, etc. Stable?",
            content : "Media Mister guarantees only the highest quality social signals sourced from real people with active and authentic accounts. All products we provide are therefore highly stable, though for added reassurance come with a market-leading retention warranty. If you encounter any issues during the warranty period, we'll ensure they are corrected free of charge."
        },
        {
            title: "Is it Legal to Buy These Kinds of Social Media Services?",
            content : "Absolutely – there is nothing illegal about buying any of the services we provide. We also ensure that our products and services comply with the terms and conditions set out by the social networks in question. As we exclusively provide 100% real Likes, Followers, Views, Comments, Reposts, Retweets, and so on, they are 100% safe and legal."
        },
        {
            title: "What is the Estimated Delivery Time?",
            content : "Delivery times vary in accordance with the size and complexity of the order. However, we always do our best to ensure orders are processed and delivered within 1 to 2 working days. You will begin seeing the results of your purchase within a few minutes, with the remaining balance following shortly afterward."
        },
        {
            title: "Do You Require Any Sensitive Data for Buying the Services?",
            content : "We strongly recommend avoiding promotional services that require the disclosure of passwords or any other sensitive information. All of the services we provide take place 100% off-site, so there is no justification for requesting passwords at any time. Under no circumstances should you share your account passwords with any service provider for any reason."
        },
        {
            title: "How Will My Payment Data Be Handled?",
            content : "All Payments are processed via Stripe and CoinPayments. 256-bit SSL encryption is used to safeguard all personal data, credit card details, and general payment information throughout the transaction process. We, therefore, offer the reassurance of a 100% safe and secure purchasing environment at Media Mister."
        },
        {
            title: "Will I Get Any Additional Support from Media Mister?",
            content : "You can count on Media Mister to provide all the support you need before, during, and after your purchase. If looking to learn more about how our services work, we'd be delighted to hear from you any time. Even if you're not yet ready to place an order, we'd be happy to answer any questions you have on the benefits of buying social signals."
        },
        {
            title: "If I Don't Receive My Order, What Should I Do?",
            content : "We always do our best to process and deliver orders within 1 to 2 working days. If we expect this timeframe to be exceeded, you'll be notified during the purchase process. If you still have not received your order by the specified date, contact our customer support team right away to request a refund."
        },
        ],
        foot: "For more information on any of the above or to discuss any aspect of the services we provide in more detail, reach out to a member of the team at Media Mister today."
    }
}

const FaqReducer = (state = initialState, action) =>   {
    switch(action.type) {
        default: return state;
    }
}

export default FaqReducer;