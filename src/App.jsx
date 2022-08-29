import React from "react";
import LineChart from "./components/linechart";
import Home from "./pages/Home";
import "./style.scss"
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';


function App() {
  return (
    <div className="App">
      {/* <BarChart /> */}
      {/* <LineChart /> */}
      <Home />
    </div>
  );
}

export default App;
