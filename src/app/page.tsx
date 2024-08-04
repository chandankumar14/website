import HomePageBanner from "@/components/home_page_content/_banner";
import ContactusPage from "@/components/home_page_content/_contact_us";
import OurAdvancedFeature from "@/components/home_page_content/_features";
import OurServicesPage from "@/components/home_page_content/_services";
import OurValuePage from "@/components/home_page_content/our_value";
import WhoWeArePage from "@/components/home_page_content/who_we_are";

import Image from "next/image";

export default function Home() {
  return (
   
      <>
      <HomePageBanner />
      <WhoWeArePage />
      <OurValuePage />
      <OurAdvancedFeature />
      <OurServicesPage />
      <ContactusPage />
      </>
   
  );
}
