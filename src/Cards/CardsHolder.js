import Cards from "./Cards";

function CardsHolders({children}){
return(
    <section className="flex flex-wrap  justify-between mb-10">
        {children}
    </section>
);
}
export default CardsHolders;