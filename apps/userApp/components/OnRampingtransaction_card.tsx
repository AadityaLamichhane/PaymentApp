"use client"

import { useSession } from "next-auth/react"

// Getting the client side session management
export const OnRamping_card = () => {
  const { data: session, status } = useSession(); // Correctly destructure useSession

  console.log(`The session data is:`, session);

  return (
    <>
      {status === "loading" && <p>Loading...</p>}
      {status === "authenticated" && (
        <div>
          <p>Hello, </p>
          <p>User ID: </p>
          <p>Phone Number: </p>
          
        </div>
      )}
      {status === "unauthenticated" && <p>You are not logged in.</p>}
    </>
  );
};