import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/hero-section/hero-section";
import ModelsShowcase from "@/components/models/models-showcase";
import { dummyModels } from "@/models-data";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <ModelsShowcase models={dummyModels} />
      <script src="https://unpkg.com/ionicons@latest/dist/ionicons.js"></script>
    </main>
  );
}
