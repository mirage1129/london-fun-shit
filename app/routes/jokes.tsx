import { Outlet } from "@remix-run/react";

export default function JokesRoute() {
  return (
    <div>
      <h1 class="text-teal-400">J🤪KES</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}