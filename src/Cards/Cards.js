import ButtonsShop from"./../Buttons/ButtonsShop";

function Cards({title,p,img,price}){
return(
    <section className="bg-white flex flex-col rounded-lg border w-80 h-86 mb-5 items-center m-auto mt-2 shadow-lg">
        <img src={img} className=" w-60 h-60 "/>
        <h2 className="m-4 text-lg font-semibold">{title}</h2>
        <p className="m-4 text-md font-medium">{p}</p>
        <div className="flex justify-center items-center">
            <h3 className="flex text-center items-center text-3xl">$</h3>
            <h3 className="flex text-center font-light mt-1 text-xl ">{price}</h3>
            </div>
        <ButtonsShop></ButtonsShop>
    </section>
);
} 
export default Cards;