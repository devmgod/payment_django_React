import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div>
            <section className="welcome welcome--desktop">
                <div className="container">
                    <div className="welcome__new">
                        <div className="welcome__new-badge">Product update</div>
                        <Link to="https://blog.paymentwall.com/news/paymentwall-expands-its-payments-coverage-in-thailand" className="link-homepage" rel="noopener">Paymentwall expands its payments coverage in Thailand</Link>
                    </div>
                    <h1 className="welcome__title">Global Expansion <br />Made Easy</h1>
                    <p className="welcome__text">All-in-one payments platform for ambitious merchants taking over worldwide markets.</p>
                    <div className="buttons">
                        <Link to="https://api.paymentwall.com/pwaccount" className="btn btn-primary">Create an Account</Link>
                        <Link to="https://www.paymentwall.com/consultation" className="btn btn-secondary">Request a Consultation</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Welcome;