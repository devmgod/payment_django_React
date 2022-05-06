

import { Link } from 'react-router-dom';

import './header.css'

const Header = () => {
    return (
        <div>
            <header className="is-fixed dark dark--main">
                <nav className="navbar navbar-default flex">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed js-collapse-toggler" data-toggle="collapse" data-aim="mobile-menu"
                                aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar bar-top"></span>
                                <span className="icon-bar bar-middle"></span>
                                <span className="icon-bar bar-bottom"></span>
                            </button>
                            <Link to="../">
                                <img src="https://www.paymentwall.com/uploaded/files/PW20_logo_light.svg?1" className="visible-xs mobile-logo"
                                    alt="Paymentwall logo" />
                            </Link>
                            <div className="visible-xs mobile-menu">
                                <div className="menu-wrp flex">
                                    <ul className="nav navbar-nav">
                                        <li className="menu-item login">
                                            <Link to="/login">Log in</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="visible-xs mobile-menu-wrp" role="tablist" aria-multiselectable="true">
                            <div id="mobile-menu" role="tablist" aria-multiselectable="true" className="collapse navbar-collapse">
                                <div className="row">
                                    <div className="col-xs-12">
                                        <div className="cta-buttons-wrp">
                                            <Link to="/register" className="btn btn-primary">
                                                Create an Account
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="menu__lists">
                                    <div className="menu__list">
                                        <span className="menu__list-title js-collapse-toggler" data-toggle="collapse" data-aim="products-header">Products</span>
                                        <ul id="products-header" className="collapse in">
                                            <li><Link to="../products/brick"><span>Brick</span> – Global Credit Card Processing</Link></li>
                                            <li><Link to="../products/payalto"><span>PayAlto</span> – Worldwide Local Payment Methods</Link></li>
                                            <li><Link to="../products/gateway"><span>Gateway</span> – Unified Payment Gateway</Link></li>
                                            <li><Link to="../products/einvoicing"><span>eInvoicing</span> – Digital Invoice Management</Link></li>
                                            <li><Link to="../products/passport"><span>Passport</span> – Business Operations Platform</Link></li>
                                            <li><Link to="../products/subscriptions"><span>Subscriptions</span> – Recurring Billing Platform</Link></li>
                                        </ul>
                                    </div>
                                    <div className="menu__list">
                                        <span className="menu__list-title collapsed js-collapse-toggler" data-toggle="collapse" data-aim="more-header">Knowledge
                                            Hub</span>
                                        <ul id="more-header" className="collapse">
                                            <li><Link to="../payment-methods">Payment Methods</Link></li>
                                            <li><Link to="https://docs.paymentwall.com/" rel="noopener">Developer Docs</Link></li>
                                            <li><Link to="https://docs.paymentwall.com/apis" rel="noopener">Direct APIs</Link></li>
                                            <li><Link to="https://docs.paymentwall.com/modules/shopify/config" rel="noopener">Extensions</Link></li>
                                            <li><Link to="../support" rel="noopener">Support</Link></li>
                                        </ul>
                                    </div>
                                    <div className="menu__list">
                                        <span className="menu__list-title collapsed js-collapse-toggler" data-toggle="collapse"
                                            data-aim="company-header">Company</span>
                                        <ul id="company-header" className="collapse">
                                            <li><Link to="../about">About Us</Link></li>
                                            <li><Link to="https://blog.paymentwall.com/" rel="noopener">Blog</Link></li>
                                            <li><Link to="../careers">Careers</Link></li>
                                            <li><Link to="../contacts">Contact Us</Link></li>
                                        </ul>
                                    </div>
                                    <div className="menu__list menu__list--lang" style={{ display: 'none !important' }}>
                                        <span className="menu__list-title">Language</span>
                                        <div className="menu__lang lang">
                                            <Link to={()=> false}>English</Link>
                                            <ul className="lang__items">
                                                <li><Link to={()=> false}>English</Link></li>
                                                <li><Link to={()=> false}>Spanish</Link></li>
                                                <li><Link to={()=> false}>Russian</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr />
                                    {/* <!-- <div className="menu__offices">
                                            <div className="region">
                                                <div className="region__name collapsed js-collapse-toggler" data-toggle="collapse" data-aim="europe-header">Europe</div>
                                                <ul id="europe-header" className="collapse">
                                                    <li>London</li>
                                                    <li>Berlin</li>
                                                    <li>Lisbon</li>
                                                    <li>Moscow</li>
                                                    <li>Sofia</li>
                                                    <li>Kyiv</li>
                                                </ul>
                                            </div>
                                            <div className="region">
                                                <div className="region__name collapsed js-collapse-toggler" data-toggle="collapse" data-aim="asia-header">Asia</div>
                                                <ul id="asia-header" className="collapse">
                                                    <li>Beijing</li>
                                                    <li>Shenzhen</li>
                                                    <li>Seoul</li>
                                                    <li>Hanoi</li>
                                                    <li>Manila</li>
                                                    <li>Bangalore</li>
                                                    <li>Gurgaon</li>
                                                </ul>
                                            </div>
                                            <div className="region">
                                                <div className="region__name collapsed js-collapse-toggler" data-toggle="collapse" data-aim="north-america-header">North America</div>
                                                <ul id="north-america-header" className="collapse">
                                                    <li>San Francisco Global HQ</li>
                                                </ul>
                                            </div>
                                            <div className="region">
                                                <div className="region__name collapsed js-collapse-toggler" data-toggle="collapse" data-aim="africa-header">Africa</div>
                                                <ul id="africa-header" className="collapse">
                                                    <li>Cairo</li>
                                                </ul>
                                            </div>
                                        </div> --> */}
                                </div>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse hidden-xs" id="desktop-menu">
                            <div className="menu-wrp flex">
                                <ul className="nav navbar-nav">
                                    <li className="hidden-xs">
                                        <Link to="../" className="logo">
                                            <img src="https://www.paymentwall.com/uploaded/files/PW20_logo_light.svg?1" className="pw-logo"
                                                alt="Paymentwall logo" />
                                        </Link>
                                    </li>
                                    <li className="menu-item hidden-sm nav__products-wrapper">
                                        <Link to={()=> false}>Products</Link>
                                        {/* <div className="nav__products">
                                            <div className="nav__products-description">
                                                <h6 className="title-homepage">Our Products</h6>
                                                <p className="text-homepage">An all-in-one payment platform to accept payments worldwide, manage risk, resolve customer requests, and so much more!</p>
                                            </div>
                                            <ul className="nav__products-list">
                                                <li>
                                                    <Link to="https://www.paymentwall.com/products/brick">
                                                        <img src="https://www.paymentwall.com/uploaded/files/PW20_product_brick.svg" height="17" alt="Brick" />
                                                        <span>Global Card Payment Processing Platform</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://www.paymentwall.com/products/einvoicing">
                                                        <img src="https://www.paymentwall.com/uploaded/files/PW20_product_einvoicing.svg" height="20" alt="Einvoicing" style={{ margin: "-1px 0 -2px" }} />
                                                        <span>Digital Invoice Management System</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://www.paymentwall.com/products/payalto">
                                                        <img src="https://www.paymentwall.com/uploaded/files/PW20_product_payalto.svg" height="21" alt="Payalto" />
                                                        <span>Worldwide Local Payment Methods Platform</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://www.paymentwall.com/products/passport">
                                                        <img src="https://www.paymentwall.com/uploaded/files/PW20_product_passport.svg" height="21" alt="Passport" style={{ margin: "-1px 0 -1px" }} />
                                                        <span>Risk Management and Business Operations Service</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://www.paymentwall.com/products/gateway">
                                                        <img src="https://www.paymentwall.com/uploaded/files/PW20_product_spiderpipe.svg" height="18" alt="Gateway" />
                                                        <span>Unified Payment Gateway for All Merchant Accounts</span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://www.paymentwall.com/products/subscriptions">
                                                        <img src="https://www.paymentwall.com/uploaded/files/PW20_product_subscription.svg" height="20" alt="Subscriptions" />
                                                        <span>Recurring Billing and Subscription Management Platform</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div> */}
                                    </li>
                                    <li className="menu-item hidden-md">
                                        <Link to="../payment-methods">Payment Methods</Link>
                                    </li>
                                    <li className="menu-item hidden-md">
                                        <Link to="https://docs.paymentwall.com/" rel="noopener">Documentation</Link>
                                    </li>
                                    <li className="menu-item hidden-md">
                                        <Link to="../support" rel="noopener">Support</Link>
                                    </li>
                                </ul>
                                <ul className="nav navbar-nav">
                                    {/* <li className="menu-item lang" style="display: none !important">
                                        <Link>English</Link>
                                        <ul className="lang__items">
                                            <li><Link to="#">English</Link></li>
                                            <li><Link to="#">Spanish</Link></li>
                                            <li><Link to="#">Russian</Link></li>
                                        </ul>
                                    </li> */}
                                    <li className="menu-item login">
                                        <Link to="/login">Log in</Link>
                                    </li>
                                    <li>
                                        <Link to="/register" className="button-cta cta">
                                            Create an Account
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            
        </div>
    )
}

export default Header;