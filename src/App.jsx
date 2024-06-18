import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  let data = [
    {
      item: "Fancy Product",
      isItem: false,
      price: "$40.00 - 80.00",
      btn: "View options",
    },
    {
      item: "Special Item",
      isItem: true,
      status: "Sale",
      isStatus: false,
      price: " $18.00",
      errPrice: "$20.00",
      btn: "Add to cart",
    },
    {
      item: "Sale Item",
      isItem: false,
      status: "Sale",
      isStatus: false,
      price: " $25.00",
      errPrice: "$50.00",
      btn: "Add to cart",
    },
    {
      item: "Popular Item",
      isItem: true,
      price: "$40.00",
      btn: "Add to cart",
    },
    {
      item: "Sale Item",
      isItem: false,
      status: "Sale",
      isStatus: false,
      price: " $25.00",
      errPrice: "$50.00",
      btn: "View options",
    },
    {
      item: "Fancy Product",
      isItem: false,
      price: "$120.00 - $280.00",
      btn: "Add to cart",
    },
    {
      item: "Special Item",
      isItem: true,
      status: "Sale",
      isStatus: false,
      price: " $18.00",
      errPrice: "$20.00",
      btn: "Add to cart",
    },
    {
      item: "Popular Item",
      isItem: true,
      price: "$40.00",
      btn: "Add to cart",
    },
  ];
  return (
    <>
      <Navbar />
      <Header />

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {
          data.map((e, i) => {
            return <>
            <Card cardData={e} key={i} />
            </>
})
          }
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
