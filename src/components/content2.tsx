"use client";
import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Laptop, ArrowRight, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import Myprojects from "@/utils/myprojects";
import { SoftSkills, HardSkills } from "@/utils/skills";

export default function Content2() {
  const router = useRouter();
  return (
    <div className="min-h-[30rem]">
      {/* Max width nilagay ko d2 kasi pag w mag ooverlap since rem ginamit ko so maximum width lang */}
      <div className="container mx-auto max-w-[50rem] mt-5 grid grid-cols-1  px-2 md:px-0 gap-2">
        <Card className="pt-4 min-h-[15rem]">
          <CardHeader className="flex flex-row justify-between items-center gap-2">
            <div className="flex gap-2 items-center">
              <Laptop size={18} className="text-gray-500" />
              <p className="font-bold">My Projects</p>
            </div>

            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={() => router.push("/pages/Projects")}
            >
              <p className="text-[0.8rem]">View All</p>
              <ArrowRight size={16} />
            </div>
          </CardHeader>

          <CardContent className=" gap-2 text-sm grid grid-cols-1  md:grid-cols-2">
            {Myprojects.map((item, idx) => (
              <Card key={idx}>
                <CardHeader className="flex flex-row items-center gap-2">
                  <p className="font-bold text-[1rem]">{item.name}</p>
                </CardHeader>

                <CardContent>
                  <p className="text-[0.8rem]">{item.content}</p>
                </CardContent>

                <CardFooter>
                  <Badge className="bg-gray-200 text-black">{item.year}</Badge>
                </CardFooter>
              </Card>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-[1fr_2fr]">
          <Card className="pt-4 min-h-[15rem]">
            <CardHeader className="flex flex-row items-center gap-2">
              <Laptop size={18} className="text-gray-500" />
              <p className="font-bold">Beyond Coding</p>
            </CardHeader>
            <CardContent className="flex flex-col gap-5 text-sm">
              <div>
                When not writing code, I explore other new technology trends. Im
                not stoping to expand my knowledge.
              </div>

              <div>
                Also I`m Full time Musician for over 11 years so when not
                writing code i`m expand to my knowledge in music cuz iwant to
                becaome a professional musician that is my real dream
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-2">
            <Card className="pt-4 min-h-[10rem]">
              <CardHeader className="flex flex-row items-center gap-2">
                <User size={18} className="text-gray-500" />
                <p className="font-bold">Soft Skills</p>
              </CardHeader>

              <CardContent className="w-full flex flex-wrap gap-3 mt-3">
                {SoftSkills.map((item, idx) => (
                  <Badge variant={"outline"} key={idx}>
                    {item}
                  </Badge>
                ))}
              </CardContent>
            </Card>

            <Card className="pt-4 min-h-[10rem]">
              <CardHeader className="flex flex-row items-center gap-2">
                <User size={18} className="text-gray-500" />
                <p className="font-bold">Hard Skill</p>
              </CardHeader>

               <CardContent className="w-full flex flex-wrap gap-3 mt-3">
                {HardSkills.map((item, idx) => (
                  <Badge variant={"outline"} key={idx}>
                    {item}
                  </Badge>
                ))}
              </CardContent>
         
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
