"use client";
import React from "react";
import { Stepper } from "react-form-stepper";

const MyStepper = () => {
  return (
    <div>
      <Stepper
        steps={[{ label: "سجل دخولك الأن" }, { label: "انشئ موفعك" }]}
        activeStep={0}
      />
    </div>
  );
};

export default MyStepper;
