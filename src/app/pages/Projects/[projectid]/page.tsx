import Myprojects from "@/utils/myprojects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
export default async function ProjectID({
  params,
}: {
  params: Promise<{ projectid: string }>;
}) {
  const { projectid } = await params;

  const uniqueProject = Myprojects.find(
    (pro) => pro.id === parseInt(projectid)
  );
  console.log(uniqueProject);
  return (
    <div className="container mx-auto max-w-[50rem] min-h-[40rem] pt-16 px-5 md:px-0 flex flex-col justify-between">

      
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

      <div className="flex flex-col gap-5">
        <h1 className="text-2xl">{uniqueProject?.name}</h1>
        <div>
          <p> {uniqueProject?.content}</p>
        </div>
    <div className="flex gap-10">
         {
        uniqueProject?.techStack.map((moveItem,index) =>(
          <Image key={index} src={`/image/${moveItem}`} alt='image' height='100'  width='40'/>
        ))
       }
    </div>
        <div className="mt-10">
          <p> {uniqueProject?.year}</p>
        </div>
      </div>


      <div />
    </div>
  );
}
