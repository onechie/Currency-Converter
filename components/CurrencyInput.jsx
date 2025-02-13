"use client";

import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

export default function CurrencyInput({
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencies,
}) {
  return (
    <div className="flex flex-col text-sm md:text-md lg:text-lg">
      <Select
        value={currencies.includes(currency) ? currency : ""}
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
              fontSize: "inherit", 
            },
            "& .MuiInputBase-input": {
              fontSize: "inherit",
            },
            "& .MuiOutlinedInput-root": { borderRadius: "0" },
          }}
        />
      </div>
    </div>
  );
}
