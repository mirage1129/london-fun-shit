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
    
//if that doesnt work, try it with adventure.markup and see if that works and then try adventure.adventure.markup

    return (
      <div>
        <ReactMarkdown>{adventure.markup}</ReactMarkdown>
      </div>
    );
  }