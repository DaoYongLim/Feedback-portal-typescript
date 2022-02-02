import {
  TextField,
  Button,
  Grid,
  Paper,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginBox from "../component/LoginBoxComponent";

function LoginPage() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const OnChangeLogin = (e: string) => {
    console.log(e);
    setLoginId(e);
  };

  const OnChangePassword = (e: string) => {
    setPassword(e);
  };

  const Submit = () => {
    if (password === "123") {
    }
  };

  return (
    <Container
      maxWidth="xs"
      style={{
        height: "100vh",
        alignItems: "center",
        display: "grid",
      }}
      component="form"
      onSubmit={Submit}
    >
      <Paper elevation={6}>
        <Box m={2} pt={3}>
          <Typography variant="h5">Login Page</Typography>
        </Box>
        <LoginBox
          id="LoginID"
          label="Enter ID"
          value={loginId}
          onChange={OnChangeLogin}
        />
        <LoginBox
          id="PasswordID"
          label="Enter Password"
          value={password}
          onChange={OnChangePassword}
        />
        <Box m={2} pt={1} pb={2}>
          <Grid xs={12} item>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default LoginPage;
