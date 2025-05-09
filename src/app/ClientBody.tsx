"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.className = "antialiased";

    // @ts-ignore
    import("bootstrap/dist/js/bootstrap.bundle.min.js")
      .then(() => {
        // Bootstrap loaded
      })
      .catch((err) => {
        console.error("Failed to load Bootstrap JS", err);
      });
  }, []);

  return <div>{children}</div>;
}