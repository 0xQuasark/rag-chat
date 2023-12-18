"use client";

import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

const RootLayout = () => {

  const { user } = useUser();

  useEffect(() => {
    console.log("Hello")
    console.log('Current User:', user);
  }, []);


  return ( 
    <div className="bg-green-500 ">
      Hello World!
      <UserButton afterSignOutUrl="/" />
    </div>
   );
}
 
export default RootLayout;