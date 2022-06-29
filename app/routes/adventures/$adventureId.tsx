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
  // console.log(JSON.stringify(context)); // Displays `{"MYNAMESPACE":{},"ASSETS":{}}`
  const adventure = await context.ADVENTURE_INFO.get("1");
  // const value = await context.ADVENTURE_INFO.list();
  // console.log(value); // Displays `null`
  return json({adventure});
};

export default function AdventuresRoute() {
    const adventure = useLoaderData();

    // const parsedAdventure = JSON.parse(adventure.object[adventure]);


    // const parsedAdventure = JSON.parse(adventure);
    // console.log(parsedData.name);
    // console.log(parsedData.skills);
    // console.log(parsedData.jobtitel);
    // console.log(parsedData.res_linkedin);

    // const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

    // Object.keys(adventure); // get array of keys


    // console.log(adventure.name);
    return (
      <div>
        {adventure.object.name}
        {/* {JSON.stringify(adventure)} */}
        </div> 
    );
  }