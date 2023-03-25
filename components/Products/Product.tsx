import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

function Product({ name, img, price }: any) {
	return (
		<div className="w-full flex flex-col items-center">
			<div className="flex items-center">
				<Image src={img} alt={name} width={220} height={220} />
			</div>
			<div className="items-center">
				<h2 className="text-center text">{name}</h2>
				<p className="text-center font-semibold text-lg">{price}</p>
				<div className="flex space-x-2 items-center w-full justify-center">
					<div className="bg-[#700165] w-fit p-2 text-white rounded-lg">
						<AiOutlineHeart className="w-5 h-5" />
					</div>
					<div className="bg-[#700165] w-fit p-2 text-white rounded-lg items-center">
						Add to cart
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
