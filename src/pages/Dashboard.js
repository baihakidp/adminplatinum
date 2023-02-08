import React from "react";
import CarList from "../components/CarList";
import Layoutwrapper from "../components/Layoutwrapper";

const Dashboard = () => {
  return (
    <Layoutwrapper>
      <div>
        <CarList />
      </div>
    </Layoutwrapper>
  );
};

export default Dashboard;
