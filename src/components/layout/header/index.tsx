"use client";
import Logo from "@/components/ui/icons/logo.icon";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaCloudMoon,
  FaMoon,
  FaRegMoon,
  FaStrikethrough,
  FaSun,
  FaWaveSquare,
} from "react-icons/fa";
import { MdFormatStrikethrough } from "react-icons/md";

const THEME_STORAGE_KEY = "site-theme";
const CURSOR_STORAGE_KEY = "cursor-enabled";
const CURSOR_PREF_EVENT = "cursor-preference-change";

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCursorEnabled, setIsCursorEnabled] = useState(true);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme !== "dark" && savedTheme !== "light") {
      window.localStorage.setItem(THEME_STORAGE_KEY, "light");
    }
    const nextIsDarkMode = savedTheme === "dark";
    setIsDarkMode(nextIsDarkMode);
    document.documentElement.classList.toggle("dark", nextIsDarkMode);

    const savedCursorPreference =
      window.localStorage.getItem(CURSOR_STORAGE_KEY);
    if (savedCursorPreference !== "true" && savedCursorPreference !== "false") {
      window.localStorage.setItem(CURSOR_STORAGE_KEY, "true");
    }
    const nextCursorEnabled = savedCursorPreference !== "false";
    setIsCursorEnabled(nextCursorEnabled);
    document.dispatchEvent(
      new CustomEvent(CURSOR_PREF_EVENT, {
        detail: { enabled: nextCursorEnabled },
      }),
    );
  }, []);

  const handleThemeToggle = () => {
    const nextIsDarkMode = !isDarkMode;
    setIsDarkMode(nextIsDarkMode);
    document.documentElement.classList.toggle("dark", nextIsDarkMode);
    window.localStorage.setItem(
      THEME_STORAGE_KEY,
      nextIsDarkMode ? "dark" : "light",
    );
  };

  const handleCursorToggle = () => {
    const nextCursorEnabled = !isCursorEnabled;
    setIsCursorEnabled(nextCursorEnabled);
    window.localStorage.setItem(
      CURSOR_STORAGE_KEY,
      nextCursorEnabled ? "true" : "false",
    );
    document.dispatchEvent(
      new CustomEvent(CURSOR_PREF_EVENT, {
        detail: { enabled: nextCursorEnabled },
      }),
    );
  };

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
        <div className="w-full max-w-max z-[51] flex items-center gap-3">
          <a
            // href="/Apsarabishwokarma-resume.pdf"
            href="/apsarabishwokarmacv.pdf"
            target="_blank"
            className="cursor-pointer"
          >
            <button className="h-10 px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4 hidden md:block dark:bg-black dark:text-white dark:border-white/20">
              <span>Download CV &darr; </span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </a>
          <div className="hidden md:flex flex-col justify-between h-10 mt-4 text-emerald-400 dark:text-cyan-300 relative z-[60] pointer-events-auto">
            <button
              onClick={handleCursorToggle}
              className="icon-only appearance-none bg-transparent border-0 p-0 cursor-pointer hover:opacity-80 leading-none"
              aria-pressed={isCursorEnabled}
              aria-label={
                isCursorEnabled
                  ? "Disable cursor effect"
                  : "Enable cursor effect"
              }
              type="button"
            >
              {isCursorEnabled ? (
                <FaStrikethrough size={14} />
              ) : (
                <FaWaveSquare size={14} />
              )}
            </button>
            <button
              onClick={handleThemeToggle}
              className="icon-only appearance-none bg-transparent border-0 p-0 cursor-pointer hover:opacity-80 leading-none"
              aria-pressed={isDarkMode}
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              type="button"
            >
              {isDarkMode ? <FaSun size={14} /> : <FaRegMoon size={14} />}
            </button>
          </div>
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
