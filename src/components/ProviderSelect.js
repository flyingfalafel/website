import React from "react";
import zipDB from "../../data/zipDB";

const ProviderSelect = ({ zip }) => {
  if (zipDB[zip] && zipDB[zip].providers.length) {
    return (
      <select name="Select Providers" id="selectNumber">
        {zipDB[zip]["providers"].map(provider => {
          return <option>{provider}</option>;
        })}
      </select>
    );
  }

  // https://ej2.syncfusion.com/demos/?_ga=2.2791673.851929927.1580964960-1138334440.1580964960#/material/multi-select/checkbox.html

  return null;
};

export default ProviderSelect;
