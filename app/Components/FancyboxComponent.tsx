"use client";
import { useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


export default function FancyboxComponent({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    NativeFancybox.bind("[data-fancybox]", { 
      Thumbs: false, 
      Toolbar: false 
    });

    return () => {
      NativeFancybox.destroy();
    };
  }, []);

  return <>{children}</>;
}
