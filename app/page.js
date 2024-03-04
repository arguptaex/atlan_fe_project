import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "@/components/hero-section/hero-section";
import ModelsShowcase from "@/components/models/models-showcase";
import { dummyModels } from "@/models-data";
import { FaBeer } from 'react-icons/fa';
import { BiLike } from "react-icons/bi";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <ModelsShowcase models={dummyModels} />


    </main>
  );
}
