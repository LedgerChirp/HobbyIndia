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

interface Task {
  id: number;
  title: string;
  data: any;
  heading: string;
  height: string;
  width: string;
  url: string;
  image_url: string;
}

export default function Home() {
  // destructure products
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await axios.get<Task[]>(
        "http://localhost:1337/api/productdisplays?populate=*"
      );
      setTasks(response.data);
    }

    fetchTasks();
  }, []);
  // console.log(tasks?.data?.[0]?.attributes);
  console.log(tasks?.data?.[0]?.attributes?.card);

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
        <Card
          title={tasks?.data?.[0]?.attributes?.title}
          heading={tasks?.data?.[0]?.attributes?.heading}
          height={tasks?.data?.[0]?.attributes?.height}
          width={tasks?.data?.[0]?.attributes?.width}
          url={tasks?.data?.[0]?.attributes?.url}
          imageurl={tasks?.data?.[0]?.attributes?.image_url}
          elem={tasks?.data?.[0]?.attributes?.card}
        />
        <AllProducts />
        <Sidecard />
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
