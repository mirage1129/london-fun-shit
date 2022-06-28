import { useLoaderData } from "@remix-run/react";
import {json, LoaderFunction} from "@remix-run/cloudflare";

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




export const loader: LoaderFunction = async ({context}) => {
  console.log(JSON.stringify(context)); // Displays `{"MYNAMESPACE":{},"ASSETS":{}}`
  const adventure = await context.ADVENTURE_INFO.get("1");
  // const value = await context.ADVENTURE_INFO.list();
  // console.log(value); // Displays `null`
  return json({adventure});
};

export default function AdventuresRoute() {
    const adventure = useLoaderData();
    console.log(adventure);
    return (
      <div>
        {/* <p>{adventure.name} Adventure you know</p> */}
        {JSON.stringify(adventure.name)}
      </div>
    );
  }