"use client";
import { signIn, useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";

export default function SessionGuard({ children }: { children: ReactNode }) {
  const { data } = useSession();

  useEffect(() => {
    if (data) {
      const now = new Date();
      const expiration = new Date(data.expires);

      if (now.getTime() > expiration.getTime()) {
        signIn("keycloak");
      }
    }
  }, [data]);

  return <>{children}</>;
}