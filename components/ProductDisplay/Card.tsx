import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card({
  title,
  heading,
  height,
  width,
  url,
  imageurl,
  elem,
  bgcolr,
  textcolr,
}: any) {
  //   const elem = [
  //     {
  //       id: 1,
  //       title: "Jharokha 1",
  //       image:
  //         "https://cdn.shopify.com/s/files/1/0548/7928/9513/files/2_1000x.jpg?v=1677754417",
  //     },
  //     {
  //       id: 2,
  //       title: "Jharokha 2",
  //       image:
  //         "https://cdn.shopify.com/s/files/1/0548/7928/9513/files/2_1000x.jpg?v=1677754417",
  //     },
  //     {
  //       id: 3,
  //       title: "Jharokha 3",
  //       image:
  //         "https://cdn.shopify.com/s/files/1/0548/7928/9513/files/3_1000x.jpg?v=1677754417",
  //     },
  //     {
  //       id: 4,
  //       title: "Jharokha 4",
  //       image:
  //         "https://cdn.shopify.com/s/files/1/0548/7928/9513/files/4_1000x.jpg?v=1677754417",
  //     },
  //     {
  //       id: 5,
  //       title: "Jharokha 5",
  //       image:
  //         "https://cdn.shopify.com/s/files/1/0548/7928/9513/files/5_1000x.jpg?v=1677754417",
  //     },
  //   ];
  return (
    <div className="flex justify-center items-center w-[90vw] mx-auto border border-gray-700 p-2 rounded-2xl py-4 mt-8">
      <div className="">
        <div className="sm:grid sm:grid-cols-2">
          <div className="flex flex-col items-center sm:items-start sm:m-auto sm:w-full w-[90%] mx-auto text-center sm:h-full sm:justify-center text-gray-700 sm:pl-10 ">
            <p className="font-medium">{title}</p>
            <h2 className="sm:text-3xl text-2xl font-bold text-center w-[90%] sm:w-full sm:text-start">
              {heading}
            </h2>
            {/* <Link href={url}> */}
            <a href={url}>
              <h3 className="font-bold mt-4 hidden sm:flex">Show more</h3>
            </a>
            {/* </Link> */}
          </div>
          <div className="grid grid-cols-2 gap-2 mt-8 sm:m-4">
            {elem?.map((item: any) => {
              if (item.id > 2) {
                return;
              }
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-center w-full"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="rounded-t-2xl"
                    width={width}
                    height={height}
                  />
                  <p
                    className={`text-center bg-[#${bgcolr}] text-${textcolr} w-full xl:w-[95%]  rounded-b-2xl p-1`}
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:m-2 mt-2 sm:mt-0">
          {elem?.map((item: any) => {
            if (item.id < 2) {
              return;
            }
            return (
              <div key={item.id} className="flex flex-col items-center w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="rounded-t-2xl"
                  width={200}
                  height={200}
                />
                <p
                  className={`text-center bg-[#${bgcolr}] text-${textcolr} w-full xl:w-[95%] rounded-b-2xl p-1`}
                >
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hidden lg:flex">
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
