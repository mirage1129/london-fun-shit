import { useLoaderData } from "@remix-run/react";
import {json, LoaderFunction} from "@remix-run/cloudflare";

// export const loader: LoaderFunction = async ({
//   params,
// }) => {
  // const res = await fetch(`https://rickandmortyapi.com/api/character/${params.adventureId}`)
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

export const loader: LoaderFunction = async ({context}, {params}) => {
  // console.log(JSON.stringify(context)); // Displays `{"MYNAMESPACE":{},"ASSETS":{}}`

  // const {
  //   request, // same as existing Worker API
  //   env, // same as existing Worker API
  //   params, // if filename includes [id] or [[path]]
  //   waitUntil, // same as ctx.waitUntil in existing Worker API
  //   next, // used for middleware or to fetch assets
  //   data, // arbitrary space for passing data between middlewares
  // } = context;


  const adventure = await context.ADVENTURE_INFO.get(`${params.adventureId}`);
  // const value = await context.ADVENTURE_INFO.list();
  // console.log(value); // Displays `null`
  return json({adventure});
};

export default function AdventuresRoute() {
    const adventure = useLoaderData();
    const adventureObject = JSON.parse(adventure.adventure)

   
    // console.log(adventure.name);
    return (
      
     
      <div>
        {adventureObject.location}
        </div>

      // <div>dfsfsdf</div>

    );
  }