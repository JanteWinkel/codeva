import HeroBanner from "@/components/banner/hero-banner";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Perfil from "@/components/perfil/perfil";

export default function Home() {
  return (
    <main>
      <HeroBanner />
       <Perfil />
       <Contact />

       <Footer />
    </main>
  );
}
