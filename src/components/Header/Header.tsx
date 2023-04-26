import { Avatar } from "@mui/material";
import { useSession } from "next-auth/react";
import React from "react";

function Header() {
  const { data: session } = useSession();
  const profileImage = session?.user?.image as string;

  return (
    <div>
      <Avatar alt="Travis Howard" src={profileImage} />
    </div>
  );
}

export default Header;
