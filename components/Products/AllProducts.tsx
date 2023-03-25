import React from "react";
import Product from "./Product";

function AllProducts() {
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
				{product.map((item) => (
					<Product
						key={item.id}
						name={item.name}
						img={item.image}
						price={item.price}
					/>
				))}
			</div>
		</div>
	);
}

export default AllProducts;
