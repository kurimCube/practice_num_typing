import React from "react";
import { TextField } from "@mui/material";

function ViewAnswer({ answer, onAnswerChange }) {
  return (
    <div>
      <TextField
        id="standard-basic"
        label="回答欄"
        margin="normal"
        variant="filled"
        value={answer}
        onChange={(e) => onAnswerChange(e.currentTarget.value)}
        InputProps={{
          style: { fontSize: 60, height: 200 },
        }}
        InputLabelProps={{ style: { fontSize: 40 }, shrink: true }}
        sx={{ display: "flex" }}
        fullWidth
      />
    </div>
  );
}

export default ViewAnswer;
