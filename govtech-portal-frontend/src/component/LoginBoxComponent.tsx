import React from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  Container,
  Typography,
} from "@material-ui/core";

interface IProps {
  id: string;
  label: string;
  value: string;
  onChange: Function;
}

function LoginBoxComponent(props: IProps) {
  const { id, label, value, onChange } = props;
  return (
    <div>
      <Box m={2} pt={3}>
        <Grid xs={12} item>
          <TextField
            fullWidth
            variant="outlined"
            id={id}
            label={label}
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
            }}
          />
        </Grid>
      </Box>
    </div>
  );
}

export default LoginBoxComponent;
