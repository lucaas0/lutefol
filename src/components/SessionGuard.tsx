"use client";
import { signOut, useSession } from "next-auth/react";
import { ReactNode, useEffect } from "react";

export default function SessionGuard({ children }: { children: ReactNode }) {
  const { data } = useSession();

  useEffect(() => {
    if (data) {
      const currentDate = new Date();
      const expirationDate = new Date(data.expires);

      const isTokenExpired = currentDate > expirationDate;


      if (isTokenExpired || data.error === 'RefreshAccessTokenError') {
        signOut();
      }
    }
  }, [data]);

  return <>{children}</>;
}