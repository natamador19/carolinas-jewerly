import Cards from "./Cards";

function CardsHolders({children}){
return(
    <section className="flex flex-wrap  justify-between ">
        {children}
    </section>
);
}
export default CardsHolders;