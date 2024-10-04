import React, { useState } from "react";
import "./styles.css";
import options from "./Select/options.json";
import Select from "./Select";

export default function SelectApp() {
  const [month, setMonthValue] = useState("");
  const handleMonthSelect = (value) => {
    setMonthValue(value);
  };
  const selectedMonth = options.find((item) => item.value === month);

  return (
    <div className="App">
      <h1>Custom Select Element Demo</h1>
      <div className="Select">
        <Select
          mode="cells"
          options={options}
          selected={selectedMonth || null}
          onChange={handleMonthSelect}
          placeholder="Выберите месяц"
        />
      </div>
    </div>
  );
}
