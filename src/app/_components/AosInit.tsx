"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

export function AosInit() {
  useEffect(() => {
    // Importa dinamicamente somente no navegador
    import("aos").then((Aos) => {
      Aos.init({
        duration: 800,
        once: true,
      });
    });
  }, []);

  return null;
}
