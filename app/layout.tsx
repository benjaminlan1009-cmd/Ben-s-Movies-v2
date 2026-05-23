import React from "react";

export const metadata = {
  title: "Bens Movies",
  description: "Movie app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}