import { Link } from "react-router-dom";

const Integration = () => {
    return (
        <div>
            <section className="integration">
                <div className="container">
                    <h4 className="subtitle-homepage">Integrate with ease</h4>
                    <h2 className="title-homepage">Build the payment experience that works for you.</h2>
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <img src="https://www.paymentwall.com/uploaded/files/PW20_integration_api.png?1" width="460" alt="" />
                            <h3 className="title-homepage title-homepage--sm">One Single API</h3>
                            <p className="text-homepage text-homepage--sm">With one single API integration, you get instant access to all our services and over 150 local payment methods.</p>
                            <Link to="https://docs.paymentwall.com/" className="link-homepage">Read our Documentation</Link>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img src="https://www.paymentwall.com/uploaded/files/PW20_integration_plugins.png?1" width="460" alt="" />
                            <h3 className="title-homepage title-homepage--sm">Plugins and Integrations</h3>
                            <p className="text-homepage text-homepage--sm">Minimize development time with the help of our ready-to-use plugins for Shopify, WooCommerce, Magento, and more.</p>
                            <Link to="https://docs.paymentwall.com/modules/shopify/config" className="link-homepage">Browse Plugins</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Integration;