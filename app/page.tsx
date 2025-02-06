import { Leatestproducts } from "./components/leatestproducts";
import Featuredproducts from "./components/featuredproducts";
import Hero from "./components/hero";
import Shopex from "./components/shopexoffer";
import Products from "./components/products";
import Promotion from "./components/discount";
import AddressForm from "./components/form";

export default function Home() {
  return (
    <div>
      <Hero />
      <Featuredproducts />
      <Leatestproducts />
      <Shopex />
      <Promotion />
      <Products />
      <AddressForm />
    </div>
  );
}
