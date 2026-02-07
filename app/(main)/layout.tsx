import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="md:ml-56">
        <main className="mx-auto max-w-5xl bg-white min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
