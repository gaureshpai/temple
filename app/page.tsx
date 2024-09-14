import HomeAboutSection from "@/components/HomeAboutSection";
import HomeImageSlider from "@/components/HomeImageSlider";
import HomeTrusteeTab from "@/components/HomeTrusteeTab";
import LatestUpdates from "@/components/LatestUpdates";

export default function Home() {
  return (
    <div>
      <HomeImageSlider/>
      <HomeAboutSection/>
      <HomeTrusteeTab/>
      <LatestUpdates/>
    </div>
  );
}
