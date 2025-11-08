
import "./globals.css";

export const metadata = {
  title: "Bioproteg S.A.S.",
  description: "Ingeniería geotécnica y pavimentos para proyectos eficientes, sustentables y económicos.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased text-slate-800">
        <div className="mx-auto max-w-6xl px-4 md:px-6">{children}</div>
      </body>
    </html>
  );
}
