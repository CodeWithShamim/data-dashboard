import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return <button onClick={() => signIn()}>Sign in</button>;
}

export default Login;
