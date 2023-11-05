import React from 'react'
import { TextField } from "@mui/material";

function ViewQuestion({ question }) {
  return (
    <div>
      <TextField
      id="question-display"
      label="問題"
      value={question}
      InputProps={{
        readOnly: true,
        style: { fontSize: 60, height: 200 },
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

export default ViewQuestion;