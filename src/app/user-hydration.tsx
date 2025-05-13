"use client";
import { useEffect } from "react";
import { useUserStore } from "@/stores/userStore";
import type { User } from "@/interfaces/user";

export default function UserHydration({ user }: { user: User }) {
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    setUser(user);
  }, [setUser, user]);

  return null;
}
