import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'


const LeftNave = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const handleClick = () => {
        setIsVisible(!isVisible);
    };
    const handleClick1 = () => {
        setIsVisible1(!isVisible1);
    };
    const handleClick2 = () => {
        setIsVisible2(!isVisible2);
    };
    return (

        <div className="nav_left clearfix">
            <div className="col-left">
                <ul>
                    <li><Link to="#" className="feed">Feed</Link></li>
                    <li className="rollmenu">
                        <Link className="roll analytics drop" onClick={handleClick} to={() => false} >Analytics</Link>
                        <ul className="" style={{
                            overflow: 'hidden',
                            display: isVisible ? 'block' : 'none'
                        }}>
                            <li><Link to="#">Transactions</Link></li>
                            <li><Link to="#">Subscriptions</Link></li>
                            <li><Link to="#">Users</Link></li>
                            <li><Link to="#">Countries</Link></li>
                            <li><Link to="#">Payment Systems</Link></li>
                            <li><Link to="#">Currencies</Link></li>
                            <li><Link to="#">Price Points</Link></li>
                            <li><Link to="#">SpiderPipe Accounts</Link></li>
                        </ul>
                    </li>
                    <li><Link to="#" className="payout">Payouts</Link></li>
                    <li><Link to="#" className="applications ">My Projects</Link></li>
                    <li className="rollmenu">
                        <Link className="roll marketing drop" onClick={handleClick1} to={() => false}>Marketing tools</Link>
                        <ul className="" style={{
                            overflow: 'hidden',
                            display: isVisible1 ? 'block' : 'none'
                        }}>
                            <li><Link to="#">Coupons</Link></li>

                            <li><Link to="#">Promo campaigns</Link></li>
                        </ul>
                    </li>
                    <li className="rollmenu">
                        <Link to={() => false} className="roll resolution-center drop" onClick={handleClick2}>Resolution center</Link>
                        <ul className="icon-list" style={{
                            overflow: 'hidden',
                            display: isVisible2 ? 'block' : 'none'
                        }}>
                            <li><Link to="#" className="crm">Research and Refund</Link></li>
                            <li><Link to="#" className="chargeback ">Chargebacks</Link></li>
                            <li><Link to="#" className="message-center">Messaging Center</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftNave;