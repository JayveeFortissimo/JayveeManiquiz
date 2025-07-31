"use client";
import { MapPin, Facebook, Github, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { DayNightSwitch } from "./day-night";
import { useTheme } from "next-themes";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


 const isLightTheme = mounted && theme === "light";

  const redirect = useRouter();

  return (
    <div className="min-h-[10rem]  flex items-center flex-col px-2">
      {/* Max width nilagay ko d2 kasi pag w mag ooverlap since rem ginamit ko so maximum width lang */}
      <header className="container mx-auto max-w-[50rem]  flex items-center gap-3 sm:gap-5">
        <img
          src="/image/Profile.png"
          alt="Jayvee"
          className="rounded h-auto w-[8rem] sm:w-[10rem]"
        />
        <div className="w-full">
          <header className="w-full flex justify-between items-center pr-0 md:pr-3">
            <SparklesText className="text-[1rem] md:text-2xl font-bold">
              Jayvee Maniquiz
            </SparklesText>
            <DayNightSwitch
              className="h-[1.8rem] "
              onToggle={(checked) => setTheme(checked ? "light" : "dark")}
               defaultChecked={isLightTheme} 
            />
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
          <footer className="mt-2 flex items-center gap-3 w-full pr-3">
            <Button
              className="h-[1.8rem] md:h-[1.8rem] bg-blue-500 cursor-pointer flex-auto   "
              onClick={() =>
                redirect.push("https://www.facebook.com/jayvee.maniquiz.779/")
              }
            >
              <Facebook />
              <p> Facebook</p>
            </Button>
            <Button
              className="h-[1.8rem]  cursor-pointer flex-auto   "
              onClick={() =>
                redirect.push(
                  "https://github.com/JayveeFortissimo?tab=repositories"
                )
              }
            >
              <Github />
              Github
            </Button>

            <RainbowButton
              className="h-[1.8rem]  flex-auto     cursor-pointer hidden md:flex"
              onClick={() =>
                redirect.push(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=maniquizjayvee.business@gmail.com"
                )
              }
            >
              <Mail />
              Send Email
            </RainbowButton>
          </footer>
        </div>
      </header>

      <div className="w-full container mx-auto mt-5 flex items-center justify-center md:hidden ">
        <RainbowButton className="h-[1.8rem]  flex-auto     cursor-pointer">
          <Mail />
          Send Email
        </RainbowButton>
      </div>
    </div>
  );
}
