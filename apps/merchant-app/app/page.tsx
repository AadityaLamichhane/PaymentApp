"use client";

import { useBalance } from "@repo/store/useBalance";

export default async  function() {
  const balance = await useBalance();
  return <div>
    hi there {balance}
  </div>
}