"use client";
import Logo from "@/components/ui/icons/logo.icon";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  return (
    <>
      <div className="flex px-4">
        <div className="flex">
          <Link href="/" passHref>
            <Logo className="mt-2 w-10 h-10 stroke-white cursor-pointer  md:block hidden " />
          </Link>
          <span className="relative z-10 text-white px-4 py-2 text-sm font-medium  md:block hidden   text-muted-foreground transition-colors">
            Apsara Bishwokarma
          </span>
        </div>
        <div className="relative w-full flex items-center justify-center">
          <Navbar className="top-4" />
        </div>
        <div className="w-full max-w-max z-[51]">
          <a
            href="/Apsara Bishwokarma  - Resume.pdf"
            target="_blank"
            className="cursor-pointer"
          >
            <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 hidden md:block">
              <span>Download CV &darr; </span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 w-full z-50", className)}>
      <Menu setActive={setActive}>
        <Link href="/#about-me">
          <MenuItem
            setActive={setActive}
            active={active}
            item=" About me"
          ></MenuItem>
        </Link>

        <Link href="/#projects">
          <MenuItem setActive={setActive} active={active} item="Portfolio">
            {/* <div className=" md:grid hidden text-sm  grid-cols-1 md:grid-cols-2 gap-10 p-4">
              <ProductItem
                title="BooKNook-Book Shop"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for Book Lovers like never before."
              />
              <ProductItem
                title="ShopHubE-commerce Site"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="E-commerce buy what you want "
              />

              <ProductItem
                title="Evento-Event Organize"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="foe Event Management,Organize your event with Us "
              />
              <ProductItem
                title="WebDevelopment Roadmap"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Learn Web-Development With projects"
              />
            </div> */}
          </MenuItem>
        </Link>
        <Link href="/#blog">
          <MenuItem setActive={setActive} active={active} item="Blogs">
            {/* <div className=" md:grid hidden text-sm   md:grid-cols-2 grid-cols-1 gap-10 p-4">
              <ProductItem
                title="Javascript Projects"
                href="/javaScriptprojects.png"
                src="/javaScriptprojects.png"
                description="javascript projects(Html,css,Js)"
              />
              <ProductItem
                title="planting-pleasure"
                href="https://static.vecteezy.com/system/resources/thumbnails/003/356/915/small_2x/csr-concept-and-business-planting-saplings-of-trees-photo.JPG"
                src="https://static.vecteezy.com/system/resources/thumbnails/003/356/915/small_2x/csr-concept-and-business-planting-saplings-of-trees-photo.JPG"
                description="Share the joy of transforming outdoor and indoor spaces into vibrant gardens."
              />
              <ProductItem
                title="Books:Reading Journey"
                href="https://t3.ftcdn.net/jpg/04/79/12/94/360_F_479129405_2ItSaOfgDJn8gsAtzmElw65yxLFRZe2s.jpg"
                src="https://t3.ftcdn.net/jpg/04/79/12/94/360_F_479129405_2ItSaOfgDJn8gsAtzmElw65yxLFRZe2s.jpg"
                description="Books are our Trusted Friends"
              />
              <ProductItem
                title="Webdevelopment-roadmap"
                href="https://img-c.udemycdn.com/course/480x270/3906220_be65_2.jpg"
                src="https://img-c.udemycdn.com/course/480x270/3906220_be65_2.jpg"
                description="Learn Web development step by step"
              />
            </div> */}
          </MenuItem>
        </Link>
        <Link href="/#connect">
          <MenuItem setActive={setActive} active={active} item="Connect">
            {/* <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink
                href="https://www.linkedin.com/in/apsarabishwokarma/"
                target="_blank"
              >
                Linkedin
              </HoveredLink>
              <HoveredLink href="mailto:apsara@gmail.com" target="_blank">
                Email
              </HoveredLink>
              <HoveredLink
                href="https://www.instagram.com/apsara_bishwakarma"
                target="_blank"
              >
                Instagram
              </HoveredLink>
              <HoveredLink
                href="https://www.facebook.com/apsarabishwokarmaa"
                target="_blank"
              >
                Facebook
              </HoveredLink>
              <HoveredLink
                href="https://www.twitter.com/apsarabishwokarma"
                target="_blank"
              >
                Twitter
              </HoveredLink>
            </div> */}
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
