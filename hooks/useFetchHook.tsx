"use client";
import React, { useEffect, useState } from "react";

const useFetchHook = () => {
  const [hooks, setHooks] = useState([]);

  const fetchHooks = async () => {
    try {
      const raw = await fetch("/api/hooks", { next: { revalidate: 7200 } });
      const fetched = await raw.json();
      const hooks = fetched.data;
      setHooks(hooks);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchHooks();
  }, []);

  return hooks;
};

export default useFetchHook;
