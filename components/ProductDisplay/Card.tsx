import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card() {
	return (
		<div className="w-full flex">
			<div className="">
				<div className="">
          <div className="">
            <p className="text-xs">Learn new antique jharokha art with</p>
            <h2>Our pre-marketed jharokha design</h2>
          </div>
        </div>
				<div className=""></div>
			</div>
			<div className="hidden md:flex">
				<Link href="">
					<Image
						src={
							"https://cdn.shopify.com/s/files/1/0548/7928/9513/files/Main-banner_a236d5bd-d5db-413e-bf58-e2b9e64e3826_1000x.jpg?v=1677754417"
						}
						alt={"Showcase"}
						width={500}
            height={500}
					/>
				</Link>
			</div>
		</div>
	);
}

export default Card;
