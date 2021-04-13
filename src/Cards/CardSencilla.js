function CardSencilla({title,content}){
    return(
        <div class="h-48  p-3 w-1/2 bg-white  ">
                    <h2 class="text-center mt-4 text-2xl font-semibold">{title}</h2>
                    <p  class="text-center mt-2 font-semibold">{content}</p>
        </div>
    );
}
export default CardSencilla;