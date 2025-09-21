"use client";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/Card";
import { Laptop, ArrowRight, User } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { useRouter } from "next/navigation";
import Myprojects from "@/utils/myprojects";
import { SoftSkills, HardSkills } from "@/utils/skills";
import { BorderBeam } from "@/components/magicui/border-beam";
 import { AuroraText } from "@/components/magicui/aurora-text";
 
export default function Content2() {
  const router = useRouter();
  return (
    <div className="min-h-[30rem]">

      <div className="container mx-auto max-w-[50rem] mt-5 grid grid-cols-1  px-2 md:px-0 gap-2">
     
        <Card className="pt-4 min-h-[15rem]">
          <CardHeader className="flex flex-row justify-between items-center gap-2">
            <div className="flex gap-2 items-center">
              <Laptop size={18} className="text-gray-500" />
              <p className="font-bold">My Projects</p>
            </div>

            <div
              className="flex gap-1 items-center cursor-pointer text-gray-500"
              onClick={() => router.push("/pages/Projects")}
            >
              <p className="text-[0.7rem]">View All</p>
              <ArrowRight size={14} />
            </div>
          </CardHeader>
            
          <CardContent 
          className=" gap-2 text-sm grid grid-cols-1  md:grid-cols-2 "
         
          >
          
            {Myprojects.slice(0, 4).map((item, idx) => (
              <Card key={idx} className="cursor-pointer relative overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-100"  onClick={() => router.push(`/pages/Projects/${item.id}`)}>
                <CardHeader className="flex flex-row items-center gap-2">
                  <AuroraText className="font-bold text-[1.2rem]">{item.name}</AuroraText>
                </CardHeader>

                <CardFooter className="w-full flex justify-between items-center">
                  <Badge className="bg-gray-200 text-black">{item.year}</Badge>
                  <div className="flex gap-1 items-center cursor-pointer text-gray-500">
                    <p className="text-[0.7rem]">Descriptions</p>
                    <ArrowRight size={15}/>
                    
                  </div>
                </CardFooter>
                      <BorderBeam duration={8} size={100} />
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
                When I`m not writing code, I enjoy exploring new technology trends to continuously expand my knowledge.
              </div>

              <div>
                I`m also a full-time musician with over 11 years of experience. When I`m not coding, I`m expanding my knowledge in music, as becoming a professional musician is my lifelong dream.
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
