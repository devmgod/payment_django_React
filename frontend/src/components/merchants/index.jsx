import { Link } from "react-router-dom";

const Merchants = () => {
    return (
        <div>
            <section className="merchants">
                <div className="container">
                    <div className="merchants__content">
                        <h2 className="title-homepage title-homepage--light">We Grow Together</h2>
                        <p className="text-homepage text-homepage--light">Powering leading industries with a complete set of payment solutions and services to help you run your business from day one.</p>
                        <Link to="https://www.paymentwall.com/industries/video-games" className="link-homepage link-homepage--light">Terminal3 Game Payments by Paymentwall</Link>
                        <Link to="https://www.paymentwall.com/industries/e-commerce" className="link-homepage link-homepage--light">Paymentwall for E-Commerce</Link>
                        <Link to="https://www.paymentwall.com/industries/travel" className="link-homepage link-homepage--light">Paymentwall for Travel</Link>

                        <Link to="https://www.paymentwall.com/industries/saas" className="link-homepage link-homepage--light">Paymentwall for SaaS</Link>
                        <Link to="https://www.paymentwall.com/industries/enterprise" className="link-homepage link-homepage--light">Paymentwall for Enterprises</Link>
                    </div>
                    <div className="merchants__logos">
                        <img src="https://www.paymentwall.com/uploaded/files/PW20_merchant_1.svg" width="175" alt="LG" />
                        <img src="https://www.paymentwall.com/uploaded/files/PW20_merchant_2.png" width="175" alt="Bottega Veneta" />
                        <img src="https://www.paymentwall.com/uploaded/files/PW20_merchant_3.svg" width="175" alt="Bandai Namco" />
                        <img src="https://www.paymentwall.com/uploaded/files/PW20_merchant_4.png" width="175" alt="Corel" />
                        <img src="https://www.paymentwall.com/uploaded/files/PW20_merchant_5.svg" width="175" alt="Tencent" />
                        <img src="https://www.paymentwall.com/uploaded/files/PW20_merchant_6.svg" width="175" alt="Samsung" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Merchants;