"use client";
import { Card, CardHeader, CardContent } from "./ui/card";
import { BriefcaseBusiness, Laptop, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import MyExperience from "@/utils/experience";
import { cn } from "@/lib/utils";
import { Frontend, Backend, DeveloperTools } from "@/utils/techStack";
import { useRouter } from "next/navigation";

export default function Content1() {
  const router = useRouter();
  return (
    <div className="min-h-[30rem] px-2 flex mt-10 md:px-0">
      <div className="container mx-auto w-full max-w-[50rem]  grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">
        <div className="grid gap-4">
          <Card className="pt-4 min-h-[15rem]">
            <CardHeader className="flex flex-row items-center gap-2">
              <BriefcaseBusiness size={18} className="text-gray-500" />
              <p className="font-bold">About</p>
            </CardHeader>
            <CardContent className="flex flex-col gap-5 text-sm">
              <div>
                Hello, I’m Jayvee Maniquiz. I graduated from Bulacan State
                University with a Degree of Bachelor of Science in Information
                Technology Major in Web and Mobile Development
              </div>
              <div>
                During college, I focused on programming subjects that
                strengthened my fundamental programming skills. I also enhanced
                my communication skills through teaching young musicians in my
                province, and I am highly adaptable to different environments
                and challenges.
              </div>
            </CardContent>
          </Card>
          <Card className="pt-4 min-h-[15rem]">
            <CardHeader className="flex justify-between flex-row items-center gap-2">
              <div className="flex gap-2 items-center">
                <Laptop size={18} className="text-gray-500" />
                <p className="font-bold">Tech Stack</p>
              </div>

              <div
                className="flex gap-2 items-center cursor-pointer text-gray-400"
                onClick={() => router.push("/pages/TechStack")}
              >
                <p className="text-[0.7rem]">View All</p>
                <ArrowRight size={14} />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-5 text-sm">
              <div>
                <p>Frontend</p>
                <div className="w-full flex flex-wrap gap-3 mt-3">
                  {Frontend.map((item, idx) => (
                    <Badge key={idx} variant="outline">
                      <img
                        src={`/image/${item.image}`}
                        alt=""
                        className="h-auto w-[1.2rem]"
                      />
                      {item.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p>Backend</p>
                <div className="w-full flex flex-wrap gap-3 mt-3">
                  {Backend.map((item, idx) => (
                    <Badge key={idx} variant="outline">
                      <img
                        src={`/image/${item.image}`}
                        alt=""
                        className="h-auto w-[1.2rem]"
                      />
                      {item.name}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p>Developer Tools</p>
                <div className="w-full flex flex-wrap gap-3 mt-3">
                  {DeveloperTools.map((item, idx) => (
                    <Badge key={idx} variant="outline">
                      <img
                        src={`/image/${item.image}`}
                        alt=""
                        className="h-auto w-[1.2rem]"
                      />
                      {item.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* study mo to */}
        <Card className="p-2">
          <CardContent className="pt-6">
            <h2 className=" font-semibold mb-6 flex gap-3 items-center">
              {" "}
              <BriefcaseBusiness size={18} className="text-gray-500" />{" "}
              Experience
            </h2>
            <div className="relative border-l pl-4 space-y-8">
              {MyExperience.map((item, idx) => (
                <div key={idx} className="relative group pl-2">
                  <span
                    className={cn(
                      "absolute -left-[9px] top-1 w-3 h-3 rounded-full border-2",
                      idx === 0
                        ? "bg-primary border-primary animate-pulse"
                        : "bg-muted-foreground border-background"
                    )}
                  />
                  <div className="space-y-1">
                    <h3 className="font-semibold text-md">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.company}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {item.year}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
