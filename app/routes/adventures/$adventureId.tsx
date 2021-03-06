import { useLoaderData } from "@remix-run/react";
import {json, LoaderFunction} from "@remix-run/cloudflare";
import ReactMarkdown from 'react-markdown';

export const loader: LoaderFunction = async ({context, params}) => {
  const adventure = await context.ADVENTURE_INFO.get(`${params.adventureId}`);
  return json({adventure});
};

export default function AdventuresRoute() {
    const adventure = useLoaderData();
    const adventureObject = JSON.parse(adventure.adventure)

    return (
      <div>
        <ReactMarkdown>{adventure.adventure.markup}</ReactMarkdown>
      </div>
    );
  }