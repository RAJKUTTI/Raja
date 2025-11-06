import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import ClientWrapper from "./components/ClientWrapper"; // Import the new component

// THIS IS NOW A SERVER COMPONENT, SO METADATA IS ALLOWED.
export const metadata = {
  title: "raja - Portfolio",
  description: "My portfolio",
  icons: {
    icon: [
      { url: "/mylogo.png", sizes: "16x16", type: "image/png" },

    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {/* Use the ClientWrapper to apply the right-click disabling logic */}
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}