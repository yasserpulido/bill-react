import React from "react";
import Navi from "./components/shared/Navi/Navi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./pages/welcome/Welcome";
import BillList from "./pages/bill-list/BillList";
import BillDetail from "./pages/bill-detail/BillDetail";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navi />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/bill" element={<Welcome />} />
          <Route path="/bill/list" element={<BillList />} />
          <Route path="/bill/detail" element={<BillDetail />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
