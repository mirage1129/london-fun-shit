import type { MetaFunction } from "@remix-run/cloudflare";
import styles from "./styles/app.css"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
} from "@remix-run/react";

export function links() {
  return [{ rel: "stylesheet", href: styles }]
 }

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body class="bg-lani-teal overflow-clip">
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}