/* eslint-disable import/no-unresolved */
import { MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import { getPokemons } from "~/api";
import Header from "~/components/Header";
import PokeGrid from "~/components/PokeGrid";
export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = useLoaderData();

  const [pokemons, setPokemons] = useState(data?.results);

  return (
    <div>
      <Header />
      <div className="md:flex">
        <div className="w-6/6 md:w-4/6">
          <PokeGrid pokemons={pokemons} />
        </div>
        <div className="md:w-2/6">Pokemon info</div>
      </div>
    </div>
  );
}

export async function loader() {
  try {
    const response = await getPokemons();
    return json(response);
  } catch (error) {
    console.error(error);
  }
}
