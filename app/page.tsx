import HeroBanner from "@/components/banner/hero-banner";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Perfil from "@/components/perfil/perfil";
import ProjectsComponent from "@/components/proyectos/page";
import Servicios from "@/components/servicios/servicios";

export default function Home() {
  return (
    <main>
      <HeroBanner />
       <Perfil />
       <Servicios />
       <ProjectsComponent />
       <Contact />

       <Footer />
    </main>
  );
}
