"use client";
import { MapPin, Facebook, Github } from "lucide-react";
import { Button } from "./ui/button";
import { DayNightSwitch } from "./day-night";
import { useTheme } from "next-themes";
import { useState } from "react";
export default function Header() {
  const [isClicked, setCliecked] = useState<boolean>(false);

  const { setTheme } = useTheme();

  const toggleTheme = () => {
    setCliecked((pro) => !pro);

    if (isClicked) {
      return setTheme("light");
    } else {
      return setTheme("dark");
    }
  };

  return (
    <div className="min-h-[10rem]  flex items-center flex-col px-2">
      {/* Max width nilagay ko d2 kasi pag w mag ooverlap since rem ginamit ko so maximum width lang */}
      <header className="container mx-auto max-w-[50rem]  flex items-center gap-3 sm:gap-5">
        <img
          src="/image/Profile.jpg"
          alt="Jayvee"
          className="rounded h-auto w-[7rem] sm:w-[10rem]"
        />
        <div className="w-full">
          <header className="w-full flex justify-between items-center pr-3">
            <h1 className="text-[1.1rem] md:text-2xl font-bold">
              Jayvee Maniquiz
            </h1>
            <DayNightSwitch className="h-[1.8rem] " onClick={toggleTheme} />
          </header>
          <div className="flex items-center gap-1 mt-[0.1rem]">
            <MapPin size={15} />
            <p className="text-[0.7rem] md:text-[0.9rem]">
              Bulacan, Philippines
            </p>
          </div>
          <h1 className="text-[0.9rem]  md:text-[1rem] mt-2">
            Full-Stack Web Developer
          </h1>
          <footer className="mt-2 flex items-center flex-wrap gap-3 w-full pr-3">
            <Button className="h-[1.8rem] bg-blue-500 cursor-pointer">
              <Facebook />
              Facebook
            </Button>
            <Button className="h-[1.8rem]  cursor-pointer">
              <Github />
              Github
            </Button>

            <Button
              asChild
              className="h-[1.8rem]  flex-auto bg-yellow-500 text-white    cursor-pointer hidden md:flex"
            >
              <a
                href="/docs/Jayvee-Maniquiz-CV.pdf"
                download
                className="bg-primary text-black px-4 py-2 rounded"
              >
                Download Resume
              </a>
            </Button>
          </footer>
        </div>
      </header>

      <div className="w-full container mx-auto mt-5 flex items-center justify-center md:hidden ">
        <Button
          asChild
          className="h-[1.8rem]  flex-auto bg-yellow-500 text-white    cursor-pointer"
        >
          <a
            href="/docs/Jayvee-Maniquiz-CV.pdf"
            download
            className="bg-primary text-black px-4 py-2 rounded"
          >
            Download Resume
          </a>
        </Button>
      </div>
    </div>
  );
}
