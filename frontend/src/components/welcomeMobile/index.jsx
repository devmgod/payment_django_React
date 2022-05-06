import { Link } from "react-router-dom";

const WelcomeMobile = () => {
    return (
        <div>
            <section className="welcome welcome--mobile">
                <div className="container">
                    <div className="welcome__new">
                        <div className="welcome__new-badge">Product update</div>
                        <Link to="https://blog.paymentwall.com/news/paymentwall-expands-its-payments-coverage-in-thailand" className="link-homepage" rel="noopener">Paymentwall expands its payments coverage in Thailand</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WelcomeMobile;