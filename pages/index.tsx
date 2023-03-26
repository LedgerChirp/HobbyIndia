import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "./../components/ProductDisplay/Card";
import AllProducts from "@/components/Products/AllProducts";
// import {api} from "../response/index";
import { IFacebookCollections, INav } from "../types";
import { AxiosResponse } from "axios";
import Sidecard from "@/components/Sidecard/Sidecard";
import axios from "axios";
import { GetServerSideProps } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Carousel from "@/components/Carousel/Carousel";

interface Task {
  ids: number;
  title: string;
  data: any;
  heading: string;
  height: string;
  width: string;
  url: string;
  image_url: string;
}

interface Prod {
  ids: number;
  heading: string;
  image: string;
  image_title: string;
  price: string;
  color: string;
  text_color: string;
}

interface Side {
  ids: number;
  image: string;
  title: string;
  description: string;
  url: string;
  bgcolor: string;
  text_color: string;
}

export default function Home() {
  // destructure products
  const [tasks, setTasks] = useState<Task[]>([]);
  const [prod, setProd] = useState<Prod[]>([]);
  const [side, setSide] = useState<Side[]>([]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await axios.get<Task[]>(
        "http://localhost:1337/api/productdisplays?populate=*"
      );
      setTasks(response.data);
    }
    async function fetchProd() {
      const response = await axios.get<Prod[]>(
        "http://localhost:1337/api/products?populate=*"
      );
      setProd(response.data);
    }

    async function fetchside() {
      const response = await axios.get<Side[]>(
        "http://localhost:1337/api/horizontal-cards?populate=*"
      );
      setSide(response.data);
    }

    fetchTasks();
    fetchProd();
    fetchside();
  }, []);
  // console.log(tasks?.data?.[0]?.attributes);
  // console.log(side?.data);
  const images = [
    "https://source.unsplash.com/random/800x600",
    "https://source.unsplash.com/random/800x601",
    "https://source.unsplash.com/random/800x602",
    "https://source.unsplash.com/random/800x603",
    "https://source.unsplash.com/random/800x604",
  ];

  return (
    <>
      <Head>
        <title>Hobby India</title>
        <meta
          name="description"
          content="bring your creativity with India's largest art and craft app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Navbar />
        <Carousel images={images} />
        <Card
          title={tasks?.data?.[0]?.attributes?.title}
          heading={tasks?.data?.[0]?.attributes?.heading}
          height={tasks?.data?.[0]?.attributes?.height}
          width={tasks?.data?.[0]?.attributes?.width}
          url={tasks?.data?.[0]?.attributes?.url}
          imageurl={tasks?.data?.[0]?.attributes?.image_url}
          elem={tasks?.data?.[0]?.attributes?.card}
          bgcolr={tasks?.data?.[0]?.attributes?.bgcolor}
          textcolr={tasks?.data?.[0]?.attributes?.textcolor}
        />
        <AllProducts products={prod?.data} />
        <Sidecard
          title={side?.data?.[0]?.attributes?.title}
          desc={side?.data?.[0]?.attributes?.description}
          url={side?.data?.[0]?.attributes?.url}
          image={side?.data?.[0]?.attributes?.image}
          bgcolr={side?.data?.[0]?.attributes?.bgcolor}
          textcolr={side?.data?.[0]?.attributes?.text_color}
        />
      </div>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   // const { data }: any = await axios.get(
//   //   "http://localhost:1337/api/product-displays?populate=*"
//   // );
//   const { data : fetchdata} = await fetch(
//     "http://localhost:1337/api/product-displays?populate=*"
//   ).then(res => res.json());
//   return {
//     props: {
//       products: {
//         items: fetchdata.data,
//       },
//     },
//   };
// };
