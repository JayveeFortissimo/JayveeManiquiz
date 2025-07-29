import Myprojects from "@/utils/myprojects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default async function ProjectID({
  params,
}: {
  params: Promise<{ projectid: string }>;
}) {
  const { projectid } = await params;

  return (
    <div className="container mx-auto max-w-[50rem] min-h-[40rem] pt-16 px-5 md:px-0">
      <header className="min-h-[3rem] flex gap-4 items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-400 hover:underline"
        >
          <ArrowLeft />
          <span>Back to Home</span>
        </Link>
        <h1 className="font-bold text-2xl ml-4">My Projects</h1>
      </header>

      {Myprojects.map((pro) => (
        <div key={pro.id} className="flex flex-col gap-5">
          <h1 className="text-2xl">
            {pro.id === parseInt(projectid) && pro.name}
          </h1>
          <div>
            <p>{pro.id === parseInt(projectid) && pro.content}</p>
          </div>
          <div>
            <p>{pro.id === parseInt(projectid) && "Year: " + pro.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
