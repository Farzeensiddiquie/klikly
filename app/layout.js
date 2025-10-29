
import "./globals.css";
export const metadata = {
  title: "Klikly | Where design meets intelligence.",
  description: "Klikly | Innovation isn’t coming — we’re building it.",
};
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="bg-[#010201] text-white">
       {children}
      </body>
    </html>
  );
}
