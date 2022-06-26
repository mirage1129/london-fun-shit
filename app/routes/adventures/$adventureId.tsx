import type { LoaderFunction } from "@remix-run/cloudflare"
import { json } from "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({
  params,
}) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${params.adventureId}`)
  return json(await res.json());
    }

export default function AdventuresRoute() {
  const adventure = useLoaderData();
  console.log(adventure);
  return (
    <div>
      <p>{adventure.name} Adventure you know</p>
    </div>
  );
}

// export default function GistsRoute() {
//   const gists = useLoaderData();
//   return (
//     <ul>
//       {gists.map((gist) => (
//         <li key={gist.id}>
//           <a href={gist.html_url}>{gist.id}</a>
//         </li>
//       ))}
//     </ul>
//   );
// }



// export async function onRequestGet({ params }) {
//   const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
//   const data = await res.json();
//   const info = JSON.stringify(data, null, 2);
//   return new Response(info);
// }



// export default function AdventuresRoute() {
//   return (
//     <div class="bg-lani-teal h-screen w-screen">
//      <h1 class="text-3xl">testing testing 1 23 dfsfsfgfgdg</h1>
//     </div>
//   );
// }