import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer class="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left">
        <div class="bg-black/5 p-4 text-center text-surface dark:text-white">
          © 2024 Copyright:
          <Link to="https://prasoonrajput.netlify.app/"> Go Food</Link>
        </div>
      </footer>
    </div>
  );
}
