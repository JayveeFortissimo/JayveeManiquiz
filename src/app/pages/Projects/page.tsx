"use client";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/UI/Badge";
import { useRouter } from "next/navigation";
import Myprojects from "@/utils/myprojects";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
export default function Page() {

    const router = useRouter();

  return (
    <div className="container mx-auto max-w-[50rem] mt-10 min-h-[50rem] px-2 md:px-0 flex flex-col justify-between">
      <header className="min-h-[3rem] flex gap-4 items-center " onClick={() => router.push("/")}>
        <div className="flex items-center gap-2 cursor-pointer">
          <ArrowLeft className="text-gray-400" />
          <p className="text-gray-400">Back to Home</p>
        </div>
        <h1 className="font-bold text-2xl">My Projects</h1>
      </header>

      <section className="mt-7 grid grid-cols-1 md:grid-cols-2 gap-5">
         {Myprojects.map((item, idx) => (
              <NeonGradientCard key={idx} className="flex flex-col gap-4 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer" onClick={() => router.push(`/pages/Projects/${item.id}`)}>
                <header className="flex flex-row items-center gap-2">
                  <p className="font-bold text-[1rem]">{item.name}</p>
                </header>

                <section>
                  <p className="text-[0.9rem]">{item.content}</p>
                </section>

                <footer>
                  <Badge className="bg-gray-200 text-black">{item.year}</Badge>
                </footer>
              </NeonGradientCard>
            ))}
      </section>

      <div />
    </div>
  );
}
