import HeroBanner from "@/components/banner/hero-banner";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Perfil from "@/components/perfil/perfil";
import ProjectsComponent from "@/components/proyectos/page";

export default function Home() {
  return (
    <main>
      <HeroBanner />
       <Perfil />
       <ProjectsComponent />
       <Contact />

       <Footer />
    </main>
  );
}
