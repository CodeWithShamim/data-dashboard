import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

function getGoogleCredentials(): { clientId: string; clientSecret: string } {
  const clientId = process.env.Google_CLIENT_ID;
  const clientSecret = process.env.Google_CLIENT_SECRET;
  if (!clientId || clientId.length === 0) {
    throw new Error("Missing GOOGLE_CLIENT_ID");
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error("Missing GOOGLE_CLIENT_SECRET");
  }

  return { clientId, clientSecret };
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
  ],
};
