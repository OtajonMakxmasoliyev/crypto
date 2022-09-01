import React from "react";
import Home from "./pages/Home";
import "./style.scss"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import LineChart from "./components/LineChart";
import CryptoBalance from "./components/CryptoBalance";
import CandleStick from "./components/CandleStick";


function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <CandleStick />
    </div>
  );
}

export default App;
