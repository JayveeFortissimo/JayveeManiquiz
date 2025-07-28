import { Card, CardHeader, CardContent, CardFooter } from "./ui/card";
import { Laptop,ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
export default function Content2() {
  return (
    <div className="min-h-[30rem]">
      {/* Max width nilagay ko d2 kasi pag w mag ooverlap since rem ginamit ko so maximum width lang */}
      <div className="container mx-auto max-w-[50rem] mt-5 grid grid-cols-1 gap-2  md:grid-cols-[1fr_2fr] px-2 md:px-0">
        <div>
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
        </div>

        <Card className="pt-4 min-h-[15rem]">
          <CardHeader className="flex flex-row justify-between items-center gap-2">
        <div  className="flex gap-2 items-center">
              <Laptop size={18} className="text-gray-500" />
            <p className="font-bold">My Projects</p>
        </div>

          <div className="flex gap-2 items-center cursor-pointer">
                <p className="text-[0.8rem]">View All</p>
                <ArrowRight size={16} />
              </div>
          </CardHeader>

          <CardContent className=" gap-2 text-sm grid grid-cols-1  md:grid-cols-2">
            <Card className="">
              <CardHeader className="flex flex-row items-center gap-2">
                <p className="font-bold text-[0.8rem]">
                  Cristobal Gown Reservation
                </p>
              </CardHeader>

              <CardContent>
                <p className="text-[0.7rem]">
                  Modern Look Online Gown Reservation System
                </p>
              </CardContent>

              <CardFooter>
                <Badge className="bg-gray-200 text-black">2024</Badge>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <p className="font-bold text-[0.8rem]">Multibook</p>
              </CardHeader>

              <CardContent>
                <p className="text-[0.7rem]">
                  Website for our client in my OJT
                </p>
              </CardContent>

              <CardFooter>
                <Badge className="bg-gray-200 text-black">2025</Badge>
              </CardFooter>
            </Card>

            <Card className="">
              <CardHeader className="flex flex-row items-center gap-2">
                <p className="font-bold text-[0.8rem]">Nombra System</p>
              </CardHeader>

              <CardContent>
                <p className="text-[0.7rem]">My Personal Project</p>
              </CardContent>

              <CardFooter>
                <Badge className="bg-gray-200 text-black">2025</Badge>
              </CardFooter>
            </Card>

            <Card className="">
              <CardHeader className="flex flex-row items-center gap-2">
                <p className="font-bold text-[0.8rem]">Portfolio</p>
              </CardHeader>

              <CardContent>
                <p className="text-[0.7rem]">My Personal Portfolio</p>
              </CardContent>

              <CardFooter>
                <Badge className="bg-gray-200 text-black">2025</Badge>
              </CardFooter>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
