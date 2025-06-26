'use client';

import { RootWrapper } from "@/features/RootWrapper/RootWrapper";
import { useRouter } from "next/navigation";
import { useEffect, useTransition } from "react";
import { navigation } from "@/shared/lib/navigation";
import { CircularProgress } from "@mui/material";

export default function Index() {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  useEffect(() => {
    startTransition(() => {
      router.push('/home');
    });
  }, [router]);
  return (
    <CircularProgress style={{color: 'var(--sapphire-20)', width: '6vw', position: 'fixed', top: 'calc(50% - 3vw)', left: 'calc(50% - 3vw)', height: '6vw'}} />
  )
}
