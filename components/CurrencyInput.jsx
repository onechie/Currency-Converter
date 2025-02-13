"use client";

import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

export default function CurrencyInput({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencies,
}) {
  return (
    <div className="flex flex-col text-sm md:text-md lg:text-lg">
      <Select
        value={currency}
        onChange={onCurrencyChange}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 200,
              overflowY: "auto",
              borderRadius: 0,
            },
          },
        }}
        sx={{
          fontSize: "inherit",
          fontWeight: "bold",
          borderRadius: 0,
        }}
        size="small"
      >
        {currencies.map((cur) => (
          <MenuItem
            key={cur}
            value={cur}
            sx={{
              fontWeight: "bold",
            }}
          >
            {cur}
          </MenuItem>
        ))}
      </Select>
      <div className="flex w-full text-xl md:text-2xl lg:text-3xl">
        <TextField
        className="w-full"
          id="outlined-number"
          type="number"
          value={amount}
          onChange={onAmountChange}
          size="small"
          sx={{
            "& .MuiInputBase-root": {
              fontSize: "inherit", // Ensures input box inherits font size
            },
            "& .MuiInputBase-input": {
              fontSize: "inherit", // Ensures input text inherits font size
            },
            "& .MuiOutlinedInput-root": { borderRadius: "0" },
          }}
        />
      </div>
    </div>
  );
}
