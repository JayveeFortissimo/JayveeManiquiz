interface Project {
  id:number;
  name:string;
  content: string;
  year:number
}


const Myprojects:Project[] = [{
    id:1,
  name:' Cristobal Gown Reservation',
  content:'Modern Look Online Gown Reservation System',
  year:2024
},{
    id:2,
  name:'Multibook',
  content:'Website for our client in my OJT, Its a Static website that techstack used Vue.js, quasar, strapi. My role here is my frontend web Developer',
  year:2025     

},
{
    id:3,
  name:'Nombra System',
  content:'My Personal Project',
  year:2025
},
{
    id:4,
  name:'Portfolio',
  content:'My Personal Portfolio',
  year:2025
}];



export default Myprojects;