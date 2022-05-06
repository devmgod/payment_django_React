import { Link } from "react-router-dom";

const Methods = () => {
    return (
        <div>
            <section className="methods">
                <div className="container">
                    <div className="methods__logos">
                        <img src="https://www.paymentwall.com/uploaded/files/PW20_methods.png" alt="" width="500" />
                    </div>
                    <div className="methods__content">
                        <h2 className="title-homepage">Reach 4 Billion Customers</h2>
                        <p className="text-homepage">Paymentwall is the first payment provider to partner with all major payment methods in 200
                            local regions, including China, Brazil, Russia, and Korea to offer more than 150 local payment methods, including e-wallets, bank transfers, prepaid cards, and cash options.</p>
                        <Link to="https://www.paymentwall.com/payment-methods" className="link-homepage">See all Payment Methods</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Methods;