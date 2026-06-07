import {
siteConfig
}
from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t">

      <div className="mx-auto max-w-[1100px] px-6 py-10">

        <p>{siteConfig.name}</p>

      </div>

    </footer>
  );
}