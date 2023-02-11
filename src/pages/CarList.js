import React from "react";
import CarList from "../components/CarList";
import Layoutwrapper from "../components/Layoutwrapper";

const ListCars = () => {
  return (
    <div>
      <Layoutwrapper>
        <CarList />
      </Layoutwrapper>
    </div>
  );
};

export default ListCars;
