import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./header";
import LeftNave from "./leftNave";
import './dashboard.scss'

const Account = lazy(() => import('./accountSetting/index'));
const Business = lazy(() => import('./businessProfile/index'));


const Dashboard = () => {
    return (
        <div>
            <Header />
            <div className="content">
                <LeftNave />
                {/* <Business /> */}
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/business" element={<Business />} />
                        <Route path="/account" element={<Account />} />
                    </Routes>
                </Suspense>
            </div>
        </div>
    )
}

export default Dashboard;