import { Backdrop, Box, CircularProgress, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function SignIn() {
  const { data: session, status } = useSession();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Backdrop
        sx={{
          color: "red",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={status === "loading"}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      {session ? (
        <Button variant="contained" color="error" onClick={() => signOut()}>
          Sign out
        </Button>
      ) : (
        <Button variant="contained" color="info" onClick={() => signIn()}>
          Sign in
        </Button>
      )}
    </Box>
  );
}

export default SignIn;
