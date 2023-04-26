import Button from "@mui/material/Button";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function Login() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;

  if (session) {
    return (
      <Button variant="contained" color="error" onClick={() => signOut()}>
        Sign out
      </Button>
    );
  }
  return (
    <Button variant="contained" color="secondary" onClick={() => signIn()}>
      Sign in
    </Button>
  );
}

export default Login;
