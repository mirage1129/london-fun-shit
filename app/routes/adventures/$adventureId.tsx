// import type { LoaderFunction } from "@remix-run/cloudflare"
// import { json } from "@remix-run/cloudflare"
// import { useLoaderData } from "@remix-run/react";

// export const loader: LoaderFunction = async ({
//   params,
// }) => {
//   const res = await fetch(`https://rickandmortyapi.com/api/character/${params.adventureId}`)
//   return json(await res.json());
//     }

// export default function AdventuresRoute() {
//   const adventure = useLoaderData();
//   console.log(adventure);
//   return (
//     <div>
//       <p>{adventure.name} Adventure you know</p>
//     </div>
//   );
// }


import {json, LoaderFunction} from "@remix-run/cloudflare";

export const loader: LoaderFunction = async ({context}) => {
  console.log(JSON.stringify(context)); // Displays `{"MYNAMESPACE":{},"ASSETS":{}}`
  // const value = await context.ADVENTURE_INFO.get("2");
  const value = await context.ADVENTURE_INFO.list();
  console.log(value); // Displays `null`
  return json({value});
};

export default function AdventuresRoute() {
    const adventure = useLoaderData();
    console.log(adventure);
    return (
      <div>
        <p>{adventure} Adventure you know</p>
      </div>
    );
  }