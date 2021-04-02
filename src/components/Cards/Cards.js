import ButtonsShop from"./../Buttons/ButtonsShop";

function Cards({title,p,img}){
return(
    <section className="flex flex-col rounded-lg border w-80 h-86 items-center m-auto mt-2 shadow-lg">
        <img src={img} className=" w-80 h-60 "/>
        <h2 className="m-4 text-lg font-semibold">{title}</h2>
        <p className="m-4 text-md font-medium">{p}</p>
        <ButtonsShop></ButtonsShop>
    </section>
);
} 
export default Cards;