import React from "react";
import { TextField } from "@mui/material";

function StateEnum({ state }) {
  if (state) {
    return "正解";
  } else {
    return "回答中";
  }
}

function ViewState({ state }) {
  return (
    <div>
      <TextField
      id="question-display"
      value={StateEnum({ state })}
      InputProps={{
        readOnly: true,
        style: { fontSize: 40, height: 100 },
      }}
      InputLabelProps={{ style: { fontSize: 40 }, shrink: true }}
      sx={{ display: "flex" }}
      margin="normal"
      variant="filled"
      fullWidth
    />
    </div>
  );
}

export default ViewState;
