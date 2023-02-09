import React from "react";
import CarList from "../components/CarList";
import Layoutwrapper from "../components/Layoutwrapper";

const Dashboard = () => {
  return (
    <Layoutwrapper>
      <CarList />
    </Layoutwrapper>
  );
};

export default Dashboard;
