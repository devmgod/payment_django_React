import { Link } from "react-router-dom";

const Links = () => {
    return (
        <div>
            <section className="links">
                <div className="container">
                    <ul>
                        <li><Link to="https://www.paymentwall.com/products/brick" className="link-homepage">Accept <span className="show-md">Credit Card Payments</span><span className="show-sm">Cards</span></Link></li>
                        <li><Link to="https://www.paymentwall.com/payment-methods" className="link-homepage"><span className="show-md">Integrate Local Payment Methods</span><span className="show-sm">Local Payments</span></Link></li>
                        <li><Link to="https://www.paymentwall.com/products/passport" className="link-homepage">Prevent Fraud</Link></li>
                        <li><Link to="https://www.paymentwall.com/products/passport" className="link-homepage"><span className="show-md">Streamline </span>Business Operations</Link></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Links;