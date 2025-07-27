import { Card, CardHeader, CardContent } from "./ui/card";
import { Laptop } from "lucide-react";
export default function Content2() {
  return (
    <div className="min-h-[30rem]">
      {/* Max width nilagay ko d2 kasi pag w mag ooverlap since rem ginamit ko so maximum width lang */}
      <div className="container mx-auto max-w-[50rem] mt-5 grid grid-cols-1 gap-2  md:grid-cols-[1fr_2fr]">
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
                Also I'm Full time Musician for over 11 years so when not
                writing code i'm expand to my knowledge in music cuz iwant to
                becaome a professional musician that is my real dream
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="pt-4 min-h-[15rem]">
            <CardHeader className="flex flex-row items-center gap-2">
              <Laptop size={18} className="text-gray-500" />
              <p className="font-bold">My Projects</p>
            </CardHeader>
            
        </Card>
      </div>
    </div>
  );
}
