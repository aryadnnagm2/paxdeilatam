import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Pax Dei LATAM",
  description: "Plataforma de clanes y comercio para la comunidad LATAM de Pax Dei",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main style={{ padding: "20px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
