import NextAuth, { AuthOptions, TokenSet } from "next-auth";
import { JWT } from "next-auth/jwt";
import KeycloakProvider from "next-auth/providers/keycloak";

function requestRefreshOfAccessToken(token: JWT) {
  return fetch(`${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/token`, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.KEYCLOAK_CLIENT_ID || '',
      client_secret: process.env.KEYCLOAK_SECRET || '',
      grant_type: "refresh_token",
      refresh_token: token.refreshToken, 
    }),
    method: "POST",
    cache: "no-store"
  });
}

export const authOptions: AuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID || '',
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || '',
      issuer: process.env.KEYCLOAK_ISSUER,
    })
  ],
  pages: {
    signIn: '/signin',
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.idToken = account.id_token
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.expiresAt = account.expires_at
      }
      return token
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken || null;
      return session;
    }
  }
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }