"use client";
import { ArrowLeft } from "lucide-react";
import { Frontend, Backend, DeveloperTools } from "@/utils/techStack";
import { Badge } from "@/components/ui-shad/Badge";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="container mx-auto max-w-[50rem] mt-10 min-h-[50rem] px-2 md:px-0">
      <header
        className="min-h-[3rem] flex gap-4 items-center "
        onClick={() => router.push("/")}
      >
        <div className="flex items-center gap-2 cursor-pointer">
          <ArrowLeft className="text-gray-400" />
          <p className="text-gray-400">Back to Home</p>
        </div>
        <h1 className="font-bold text-2xl">Tech Stack</h1>
      </header>

      <section className="mt-7">
        <div>
          <p className="text-[1.2rem] font-semibold">Frontend</p>

          <div className="w-full flex flex-wrap gap-3 mt-3">
            {Frontend.map((item, idx) => (
              <Badge key={idx} variant="outline" className="h-auto">
                <img
                  src={`/image/${item.image}`}
                  alt=""
                  className="h-auto w-[3rem]"
                />
                {item.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p className="text-[1.2rem] font-semibold">Backend</p>

          <div className="w-full flex flex-wrap gap-3 mt-3">
            {Backend.map((item, idx) => (
              <Badge key={idx} variant="outline" className="h-auto">
                <img
                  src={`/image/${item.image}`}
                  alt=""
                  className="h-auto w-[3rem]"
                />
                {item.name}
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p className="text-[1.2rem] font-semibold">Developer Tools</p>

          <div className="w-full flex flex-wrap gap-3 mt-3">
            {DeveloperTools.map((item, idx) => (
              <Badge key={idx} variant="outline" className="h-auto">
                <img
                  src={`/image/${item.image}`}
                  alt=""
                  className="h-auto w-[3rem]"
                />
                {item.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
