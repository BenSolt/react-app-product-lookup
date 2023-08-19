import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import SearchArray from './SearchArray';
import AppSearchArrayBlocks from './AppSearchArrayBlocks';
import AppMatch from './AppMatch';
import AppLottery from './AppLottery';
import AppLotteryTest from './AppLotteryTest';
import AppLotteryTest2 from './AppLotteryTest2';

import AppWordShuffle from './AppWordShuffle';
import AppHangman from './AppHangman';

import reportWebVitals from './reportWebVitals';
import { sendToVercelAnalytics } from './vitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <AppMatch/> */}
    <AppHangman/>
    <AppWordShuffle/>
    <AppLottery/>
    <AppLotteryTest/>
    <AppLotteryTest2/>
    <AppSearchArrayBlocks/>
  </React.StrictMode>,
);

reportWebVitals(sendToVercelAnalytics);
