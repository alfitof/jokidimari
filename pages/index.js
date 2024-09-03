import { CompareDemo } from "@/components/CompareDemo";
import { Hero } from "@/components/Hero";
import { NavbarFloating } from "@/components/NavbarFloating";
import Link from "next/link";
import { products, navItems } from "../data";

export default function Home() {
  return (
    <div>
      <NavbarFloating navItems={navItems} />
      <Hero products={products} />
      <CompareDemo />
    </div>
  );
}
