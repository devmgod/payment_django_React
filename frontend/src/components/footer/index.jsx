import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="menu__lists">
                        <div className="menu__list">
                            <span className="menu__list-title js-collapse-toggler" data-toggle="collapse" data-aim="products">Products</span>
                            <ul id="products" className="collapse in">
                                <li><Link to="../products/brick"><span>Brick</span> – Global Credit Card Processing</Link></li>
                                <li><Link to="../products/payalto"><span>PayAlto</span> – Worldwide Local Payment Methods</Link></li>
                                <li><Link to="../products/gateway"><span>Gateway</span> – Unified Payment Gateway</Link></li>
                                <li><Link to="../products/einvoicing"><span>eInvoicing</span> – Digital Invoice Management</Link></li>
                                <li><Link to="../products/passport"><span>Passport</span> – Business Operations Platform</Link> </li>
                                <li><Link to="../products/subscriptions"><span>Subscriptions</span> – Recurring Billing Platform</Link></li>
                            </ul>
                        </div>
                        <div className="menu__list">
                            <span className="menu__list-title collapsed js-collapse-toggler" data-toggle="collapse" data-aim="more">Knowledge Hub</span>
                            <ul id="more" className="collapse">
                                <li><Link to="../payment-methods">Payment Methods</Link></li>
                                <li><Link to="https://docs.paymentwall.com/" rel="noopener">Developer Docs</Link></li>
                                <li><Link to="https://docs.paymentwall.com/apis" rel="noopener">Direct APIs</Link></li>
                                <li><Link to="https://docs.paymentwall.com/modules/shopify/config" rel="noopener">Extensions</Link></li>
                                <li><Link to="../support">Support</Link></li>
                            </ul>
                        </div>
                        <div className="menu__list">
                            <span className="menu__list-title collapsed js-collapse-toggler" data-toggle="collapse" data-aim="company">Company</span>
                            <ul id="company" className="collapse">
                                <li><Link to="../about">About Us</Link></li>
                                <li><Link to="https://blog.paymentwall.com/" rel="noopener">Blog</Link></li>
                                <li><Link to="../careers">Careers</Link></li>
                                <li><Link to="../contacts">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className="menu__list menu__list--follow">
                            <span className="menu__list-title">Follow Us</span>
                            <div className="links-list flex socials">
                                {/* <!-- <Link rel="noopener" to="https://twitter.com/paymentwall">
                                    <i className="icon-twitter"></i>
                                </Link> --> */}
                                <Link rel="noopener" to="https://www.facebook.com/paymentwall">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="22" height="22">
                                        <defs />
                                        <g fill="none" fillRule="evenodd">
                                            <path fill="#F5F4F4" d="M-966-93H474v737H-966z" />
                                            <path fill="#19212D" fillRule="nonzero"
                                                d="M19.87 0H1.806A1.789 1.789 0 000 1.806V19.87c0 1.011.795 1.806 1.806 1.806H19.87a1.789 1.789 0 001.806-1.806V1.806A1.789 1.789 0 0019.87 0zm-9.032 20.954v-7.226h-2.89v-2.89h2.89V8.309c0-2.06 1.59-3.793 3.613-3.974h3.251v2.89h-2.89c-.614 0-1.084.47-1.084 1.084v2.529h3.613v2.89h-3.613v7.226h-2.89zm10.116-1.084c0 .614-.47 1.083-1.084 1.083h-5.42v-6.502h3.613v-4.336h-3.612V8.31c0-.217.144-.361.36-.361h3.614V3.613h-4.01c-2.42.216-4.3 2.276-4.3 4.696v1.806h-2.89v4.336h2.89v6.502H1.806c-.614 0-1.083-.47-1.083-1.083V1.806c0-.614.47-1.083 1.083-1.083H19.87c.614 0 1.084.47 1.084 1.083V19.87z" />
                                        </g>
                                    </svg>
                                </Link>
                                <Link rel="noopener" to="https://www.linkedin.com/company/paymentwall-inc-">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="22" height="22">
                                        <defs />
                                        <g fill="none" fillRule="evenodd">
                                            <path fill="#F5F4F4" d="M-1007-93H433v737h-1440z" />
                                            <g fill="#19212D" fillRule="nonzero">
                                                <path
                                                    d="M2.926.011c-.795 0-1.517.29-2.059.831A2.872 2.872 0 000 2.902c0 .794.325 1.517.867 2.059.542.542 1.3.867 2.023.83h.072c.723 0 1.41-.288 1.951-.83A2.897 2.897 0 005.78 2.9c.036-.758-.289-1.48-.83-2.023A2.734 2.734 0 002.925.011zm1.481 4.444c-.397.397-.939.65-1.517.614-.542 0-1.12-.217-1.517-.614-.434-.398-.65-.976-.65-1.554 0-.578.216-1.12.65-1.553.397-.397.94-.614 1.553-.614.542 0 1.084.217 1.481.614.434.434.65.975.65 1.553s-.216 1.156-.65 1.554zM4.335 6.514H1.41C.83 6.514.36 6.984.36 7.598v12.644c0 .578.506 1.084 1.084 1.084h2.89c.578 0 1.084-.506 1.084-1.048V7.598c0-.578-.506-1.084-1.084-1.084zm.361 13.764c0 .181-.18.326-.36.326h-2.89a.388.388 0 01-.362-.362V7.598c0-.18.144-.361.325-.361h2.926c.18 0 .361.18.361.36v12.681zM16.618 6.153h-.758c-1.41 0-2.746.614-3.613 1.59v-.506c0-.362-.361-.723-.723-.723H7.912c-.325 0-.723.29-.723.686v13.476c0 .397.398.65.723.65h3.974c.325 0 .722-.253.722-.65v-7.804c0-1.192.867-2.131 1.987-2.131.578 0 1.12.217 1.518.614.36.325.505.831.505 1.481v7.767c0 .362.362.723.723.723h3.613c.36 0 .722-.361.722-.723v-9.32c0-2.89-2.204-5.13-5.058-5.13zm4.335 14.414l-.036.036h-3.54l-.036-7.767c0-.867-.217-1.517-.687-1.987a2.841 2.841 0 00-2.023-.83c-1.517.036-2.71 1.264-2.71 2.853v7.731H7.949V7.237h3.576l.037.036v2.276l.975-.976.036-.036c.723-1.011 1.987-1.662 3.324-1.662h.758c2.42 0 4.3 1.951 4.3 4.408v9.284z" />
                                            </g>
                                        </g>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="menu__list menu__list--lang">
                            <span className="menu__list-title">Language</span>
                            <div className="menu__lang lang">
                                <Link to={() => false}>English</Link>
                                <ul className="lang__items">
                                    <li><Link to="https://www.paymentwall.com/en/">English</Link></li>
                                    <li><Link to="https://www.paymentwall.com/cn/">中文</Link></li>
                                    <li><Link to="https://www.paymentwall.com/kr/">한국어</Link></li>
                                    <li><Link to="https://www.paymentwall.com/fr/">Français</Link></li>
                                    <li><Link to="https://www.paymentwall.com/ru/">Русский</Link></li>
                                    <li><Link to="https://www.paymentwall.com/pt/">Português</Link></li>
                                    <li><Link to="https://www.paymentwall.com/es/">Español</Link></li>
                                    <li><Link to="https://www.paymentwall.com/tr/">Turkish</Link></li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <div className="menu__offices">
                            <div className="region">
                                <div className="region__name collapsed js-collapse-toggler" data-toggle="collapse" data-aim="europe">Europe</div>
                                <ul id="europe" className="collapse">
                                    <li>London</li>
                                    <li>Berlin</li>
                                    <li>Lisbon</li>
                                    <li>Moscow</li>
                                    <li>Sofia</li>
                                    <li>Kyiv</li>
                                </ul>
                            </div>
                            <div className="region">
                                <div className="region__name collapsed js-collapse-toggler" data-toggle="collapse" data-aim="asia">Asia</div>
                                <ul id="asia" className="collapse">
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
                                <div className="region__name collapsed js-collapse-toggler" data-toggle="collapse" data-aim="north-america">North America</div>
                                <ul id="north-america" className="collapse">
                                    <li>San Francisco</li>
                                </ul>
                            </div>
                            <div className="region">
                                <div className="region__name collapsed js-collapse-toggler" data-toggle="collapse" data-aim="africa">Africa</div>
                                <ul id="africa" className="collapse">
                                    <li>Cairo</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container">
                    <div className="row certs">
                        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                            <div className="row flex">
                                {/* <!-- <div className="col-xs-4 col-sm-3 hidden-xs api-status-wrapper">
                                    <Link to="https://status.paymentwall.com/">
                                        <div className="api-status">
                                            <div className="api-status-img"></div>
                                            <div>
                                                <p>Api status</p>
                                                <p className="status">Perfect</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div> --> */}
                                <div className="col-xs-4 col-sm-4 cert">
                                    <img src="https://www.paymentwall.com/uploaded/files/accredited-business.svg" alt="BBB accredited business" />
                                </div>
                                <div className="col-xs-4 col-sm-4 cert">
                                    <img src="https://www.paymentwall.com/uploaded/files/trustwave.svg" alt="Trustwave" />
                                </div>
                                <div className="col-xs-4 col-sm-4 cert">
                                    <img src="https://www.paymentwall.com/uploaded/files/pci.svg" alt="PCI DSS compliant" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
                            <div className="policies on-center">
                                <Link to="../privacypolicy">Privacy Policy</Link>
                                <Link to="../terms">Terms of Service</Link>
                                <Link to="../faq/report-infringement">DMCA Policy</Link>
                                <Link to="../cookies-policy">Cookies Policy</Link>
                                {/* <!-- <Link to="#">GDPR Policy</Link> --> */}
                            </div>
                            <p className="copyright on-center">
                                &copy;
                                <span id="copyright-year">
                                    <script>document.getElementById('copyright-year').appendChild(document.createTextNode(new Date().getFullYear()))</script>
                                </span>
                                Paymentwall, Inc. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>

                <script type="text/javascript">
                    document.getElementById('copyright-year').innerHTML = new Date().getFullYear();
                </script>
            </footer>
        </div>
    )
}

export default Footer;