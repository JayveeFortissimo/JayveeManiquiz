interface Project {
  id:number;
  name:string;
  content: string;
  year:number;
  techStack:string[];
}


const Myprojects:Project[] = [{
    id:1,
  name:' Cristobal Gown Reservation',
  content:'Modern Look Online Gown Reservation System. It is my capstone project in my college days. Its all about a website that can user reserve a gown on my website and manage where and when need to surrender the items.',
  techStack:['React.png','Tailwind CSS.png','Express.png','MySQL.png'],
  year:2024
},{
    id:2,
  name:'Multibook (OJT)',
  content:'A static website for a client during my internship (OJT). The tech stack included Vue.js, Quasar, and Strapi. My role was a frontend web developer.',
  techStack:['Vue.js.png','Tailwind CSS.png','Node.js.png'],
  year:2024
},
{
    id:3,
  name:'Nombra System',
  content:'A personal project for a naming system application, built with a modern stack to practice full-stack development skills.',
  techStack:['Next.js.png','Tailwind CSS.png','Objective-C.png','PostgresSQL.png'],
  year:2024
},
{
    id:4,
  name:'Portfolio',
  content:'My personal portfolio website to showcase my projects and skills. Built with Next.js and styled with Tailwind CSS.',
  techStack:['Next.js.png','TypeScript.png','Tailwind CSS.png'],
  year:2024
}];



export default Myprojects;