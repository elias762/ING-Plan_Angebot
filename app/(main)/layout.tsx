import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DevicePreview from "@/components/ui/DevicePreview";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DevicePreview>
      <Navbar />
      <div className="md:ml-56">
        <main className="mx-auto max-w-5xl bg-white min-h-screen">
          {children}
        </main>
        <Footer />
      </div>
    </DevicePreview>
  );
}
