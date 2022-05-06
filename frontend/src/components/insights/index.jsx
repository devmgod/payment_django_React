import { Link } from "react-router-dom";

const Insight = () => {
    return (
        <div>
            <section className="insights">
                <div className="container">
                    <h4 className="subtitle-homepage">Indursty insights</h4>
                    <h2 className="title-homepage insights__title">Keep up with the latest news and updates from our <br />payment experts.</h2>
                    <div className="row">
                        <div className="col-md-4 col-sm-12 insight">
                            <Link to="https://blog.paymentwall.com/industry/alternative-payments-in-latin-america-going-local-pays-off" rel="noreferrer noopener" className="insight__img" style={{ backgroundImage: `url("https://www.paymentwall.com/uploaded/files/PW20_insight_1.png")` }}></Link>
                            <h5 className="subtitle-homepage">THE RISE OF EMERGING MARKETS</h5>
                            <h3><Link to="https://blog.paymentwall.com/industry/alternative-payments-in-latin-america-going-local-pays-off" className="title-homepage" rel="noopener">Alternative Payments in Latin America – Going Local Pays Off</Link></h3>
                            <p className="text-homepage text-homepage--sm">An overview of the most popular payment methods in Latin America and their potential for your business.</p>
                        </div>
                        <div className="col-md-4 col-sm-12 insight">
                            <Link to="https://blog.paymentwall.com/insights/machine-learning-for-fraud-prevention-and-risk-management" className="insight__img" rel="noopener" style={{ backgroundImage: `url("https://www.paymentwall.com/uploaded/files/PW20_insight_2.png")` }}></Link>
                            <h5 className="subtitle-homepage">TECH INSIGHTS</h5>
                            <h3><Link to="https://blog.paymentwall.com/insights/machine-learning-for-fraud-prevention-and-risk-management" className="title-homepage" rel="noopener">Machine Learning for Fraud Prevention and Risk Management</Link></h3>
                            <p className="text-homepage text-homepage--sm">In the payments industry, machine learning is similarly becoming an increasingly important tool to help businesses
                                combat fraud.</p>
                        </div>
                        <div className="col-md-4 col-sm-12 insight">
                            <Link to="https://blog.paymentwall.com/guides/5-ways-to-minimize-currency-conversion-loss" className="insight__img" rel="noopener" style={{ backgroundImage: `url("https://www.paymentwall.com/uploaded/files/PW20_insight_3.png")` }}></Link>
                            <h5 className="subtitle-homepage">BUSINESS OPTIMIZATION</h5>
                            <h3><Link to="https://blog.paymentwall.com/guides/5-ways-to-minimize-currency-conversion-loss" className="title-homepage" rel="noopener">5 Ways to Minimize Currency Conversion Loss</Link></h3>
                            <p className="text-homepage text-homepage--sm">Having a broader coverage boosts your revenue, but it can also expose your business to currency conversion loss, which
                                can impact your profit.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Insight;