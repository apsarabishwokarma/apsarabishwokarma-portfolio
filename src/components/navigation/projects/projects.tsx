"use client";
import { Button } from "@/components/ui/button";
import { LayoutGrid } from "@/components/ui/layout-grid";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export function ProjectsGrid() {
  return (
    <>
      <div id="projects">
        <p className="max-w-7xl  mb-4 mx-auto  w-full  text-neutral-400">
          portfolio
        </p>
        <div className="flex max-w-7xl mx-auto  w-full items-center  justify-between ">
          <h1 className="text-white md:text-xl text-lg font-normal">
            {" "}
            &darr; Featured Projects
          </h1>
          <Link href="https://github.com/apsarabiswokarma" target="_blank">
            <Button className="">
              <GitHubLogoIcon className="mr-2 h-4 w-4 " />
              View My Github
            </Button>
          </Link>
        </div>
        <div className="h-screen py-4 w-full">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </>
  );
}

const SkeletonOne = () => {
  return (
    <>
      <div>
        <p className="font-bold text-4xl text-white">Evento</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          Evento is a comprehensive event management platform that simplifies
          the planning, coordination, and execution of events. It offers
          features such as event scheduling, guest list management, venue
          booking, budget tracking, and communication tools.
        </p>
      </div>
      <Link href="https://github.com/Roopaish/evento" target="_blank">
        <Button>
          <GitHubLogoIcon className="mr-2 h-4 w-4" />
          Github
        </Button>
      </Link>
    </>
  );
};

const SkeletonTwo = () => {
  return (
    <>
      <div>
        <p className="font-bold text-4xl text-white">Ecommerce</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          It&apos;s a E-commerce website that provide a convenient shopping
          experience, including product browsing, comparison, reviews, secure
          payment processing, and doorstep delivery.
        </p>
      </div>
      <Link
        href="https://github.com/apsarabiswokarma/ecommerce-shophub"
        target="_blank"
      >
        <Button>
          <GitHubLogoIcon className="mr-2 h-4 w-4" />
          Github
        </Button>
      </Link>
    </>
  );
};
const SkeletonThree = () => {
  return (
    <>
      <div>
        <p className="font-bold text-4xl text-white">Javascript Projects</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          {" "}
          A collection of web development projects on HTML, CSS, and JavaScript
          from beginner to advanced
        </p>
      </div>
      <Link
        href="https://github.com/apsarabiswokarma/WebDevelopment-Roadmap"
        target="_blank"
      >
        <Button>
          <GitHubLogoIcon className="mr-2 h-4 w-4" />
          Github
        </Button>
      </Link>
    </>
  );
};
const SkeletonFour = () => {
  return (
    <>
      <div>
        <p className="font-bold text-4xl text-white">BookNook</p>
        <p className="font-normal text-base text-white"></p>
        <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
          BookNook is a mobile application designed for book enthusiasts to
          discover, read, and discuss books. It provides a vast library of
          digital books across various genres, personalized recommendations,
          book club features, and community discussions. BookNook It&apos;s the
          perfect application to find books as your wish ,to read ,to relax,
          unwind, and enjoy life.
        </p>
      </div>

      <Link
        href="https://github.com/apsarabiswokarma/BookNook-App-Flutter"
        target="_blank"
      >
        <Button>
          <GitHubLogoIcon className="mr-2 h-4 w-4" />
          Github
        </Button>
      </Link>
    </>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1510511233900-1982d92bd835?",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://qph.cf2.quoracdn.net/main-qimg-c66376fc22cd56a98f2769c53e2372d4",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1597239451147-f163967b8581?",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://qph.cf2.quoracdn.net/main-qimg-b607ad77b2251096e89ed88ebf782c1a-lq",
  },
];
