                                           //Dynamic routes pag kuha ng Url  and Promuses siya
export default async function page({params}: {params:Promise<{id:string}>}){

    const {id} = await  params;
   console.log(id)
    return(
        <div>
            asdasd
        </div>
    )
}