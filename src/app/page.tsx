"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/bn");
  }, []);
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      Loading...
    </div>
  );
};

export default Home;
