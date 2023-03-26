import React from "react";
import Product from "./Product";

function AllProducts({ products }: any) {
  console.log(products);
  const product = [
    {
      id: 1,
      name: "Acrylic Name Cutout",
      price: 1000,
      image:
        "https://cdn.shopify.com/s/files/1/0548/7928/9513/files/2_1000x.jpg?v=1677754417",
    },
    {
      id: 2,
      name: "Acrylic Name Cutout",
      price: 1000,
      image:
        "https://cdn.shopify.com/s/files/1/0548/7928/9513/files/2_1000x.jpg?v=1677754417",
    },
    {
      id: 3,
      name: "Acrylic Name Cutout",
      price: 1000,
      image:
        "https://cdn.shopify.com/s/files/1/0548/7928/9513/files/2_1000x.jpg?v=1677754417",
    },
    {
      id: 4,
      name: "Acrylic Name Cutout",
      price: 1000,
      image:
        "https://cdn.shopify.com/s/files/1/0548/7928/9513/files/2_1000x.jpg?v=1677754417",
    },
    {
      id: 5,
      name: "Acrylic Name Cutout",
      price: 1000,
      image:
        "https://cdn.shopify.com/s/files/1/0548/7928/9513/files/2_1000x.jpg?v=1677754417",
    },
  ];
  return (
    <div className="w-[90vw] mx-auto">
      <h2 className="text-2xl text-gray-700 text-center font-semibold mt-4">
        Best Selling Cutouts
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-8 space-y-2">
        {products?.map((item: any, id: any) => (
          <Product
            key={item.ids}
            idss={item.attributes.id}
            heading={item.attributes.heading}
            image={
              item.attributes.image.data[0].attributes.formats.thumbnail.url
            }
            image_title={item.attributes.image_title}
            price={item.attributes.price}
            color={item.attributes.color}
            text_color={item.attributes.text_color}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
