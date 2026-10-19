import HomeIntro from "@/components/HomeIntro";
import { featuredItems } from "@/lib/catalog";

export default function IntroPage() {
  return (
    <main>
      <HomeIntro models={featuredItems.map(({ slug, title, label, image }) => ({ slug, title, label, image }))} />
    </main>
  );
}
