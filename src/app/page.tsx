import Image from "next/image";
import { Navbar } from "./Component/Navbar";
import { Items } from "./Component/Items";
import { Progressor } from "./Component/Progressor";
import { Banner } from "./Component/Banner";
import { FloatingImageContentBlock } from "./Component/Card";
import { Footer } from "./Component/Footer";
import Productlist from "./Component/Productlist";
import SpecialOffers from "./Component/Offer";
import { Reservation } from "./Component/Reservation";
import Menu from "./Component/Menuitems";


export default function App() {
  return (<div className="bg-gradiant-to-r from black to-slate-700 min-h-screen">
<Navbar />
<Items />
<Progressor />
<Productlist />
<Banner />

<Menu />
<SpecialOffers />
 <FloatingImageContentBlock/>

<Reservation />
<Footer />

  </div>)
}