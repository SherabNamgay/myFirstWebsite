export default function Article({title, paragraphs}){
   return(
    <>
    <h1 className=" px-3 text-3xl md:text-5xl text-center md:py-8">
        {title}
    </h1>
    {paragraphs.map((paragraph)=>{
        return(<p className="  pb-2 px-5 md:px-16">
            {paragraph}
        </p>)
    })}
    </>
   )
}