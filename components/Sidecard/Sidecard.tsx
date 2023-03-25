import Image from "next/image";
import React from "react";

function Sidecard() {
	return (
		<div className="bg-amber-200 w-[90vw] mx-auto sm:grid sm:grid-cols-2 mt-6 md:h-1/2">
			<div className="">
				<Image
					src="https://cdn.shopify.com/s/files/1/0548/7928/9513/files/5-_Wood-Bases_900x.jpg?v=1677733634%20910w"
					alt="Wood Bases"
					width={540}
					height={540}
				/>
			</div>
			<div className="space-y-4 m-4 mx-6 sm:h-full sm:flex sm:flex-col sm:justify-center sm:my-6 lg:w-3/4">
				<h2 className="text-xl font-bold sm:text-2xl">
					A unique wood base created especially for you
				</h2>
				<p className="text-sm">
					it &#x27; s easier to make your space more eye catchy and classy.
					There are many options to turn a straightforward art into some unique
					masterpiece with wooden bases. You &#x27; re in need of suggestions.
					We &#x27; ve gathered some incredible wooden base examples.
				</p>
				<button className="bg-[#700165] p-2 text-white w-full">Show Now</button>
			</div>
		</div>
	);
}

export default Sidecard;
