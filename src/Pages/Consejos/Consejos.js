import maquillaje from '../../assets/more/inicio1.jpg';
import cabello from '../../assets/more/background.jpg';


function Consejos(){
    let NumberStyle="text-center rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 w-12 h-12 py-3 font-bold mt-3";
    let card= "w-64 shadow-xl  rounded-2xl flex flex-col justify-center items-center ";
    let title="text-xl font-extralight";
    let par="mb-5 mt-3 text-center font-light";
        return(
           <section class="mt-4 flex flex-col justify-center items-center">
               <div class="flex flex-wrap justify-center md:justify-between lg:justify-between xl:justify-between ml-3 mr-3 items-center">
               <div class={card}>
                   <div class={NumberStyle} >1</div>
                   <h3 class={title}>Cuidado de tu pelo</h3>
                   <p class={par}>Disfrutar de un pelo bonito conlleva cuidarlo diaramente. A continuación, les daremos algunos consejos para lograr que su cabello siempre luzca bello y saludable.</p>
               </div>

               <div class={card} >
                   <div class={NumberStyle} >2</div>
                   <h3 class={title} >Cuidado de tu piel</h3>
                   <p class={par}>El skin care o cuidado de la piel se ha convertido en un hábito de los más populares. Claro tu , tener una cara hidrata y una piel saludable ayuda a causar buenas impresiones</p>
               </div>
               <div class={card} >
                   <div class={NumberStyle}>3</div>
                   <h3 class={title}>Cuidado de tu maquillaje</h3>
                   <p class={par}>Las mujeres aprendemos a hacer muchas cosas de la nada y maquillarnos es una de ellas, pero cuando no tenemos talento o de plano nuestra mamá no .</p>
               </div>
               <div class= {card} >
                   <div class={NumberStyle}>4</div>
                   <h3 class={title}>Cuidado de tus poros</h3>
                   <p class={par}>Prepara tu piel. Antes de iniciar aplicale fijador e hidratador para rostro y labios. Recuerda que tu rostro es tu primera impresión y la ventana al mundo</p>
               </div>
               <div class={card} >
                   <div class={NumberStyle} >5</div>
                   <h3 class={title}>Cuidado de tu rostro</h3>
                   <p class={par}>Disfrutar de un pelo bonito conlleva cuidarlo diaramente. A continuación, les daremos algunos consejos para lograr que su cabello siempre luzca bello y saludable.</p>
               </div>
               
               </div>
               <div className="theme-general bg-clip-text text-transparent bg-gradient-to-r from-secondary to-purple-400 mt-9 mb-9 text-6xl md:text-7xl lg:text-9xl xl:text-9xl font-black">
                   CONSEJOS
               </div>
               <div class="flex flex-wrap  ">
                    <div class="flex flex-wrap justify-center items-center">
                        <img src={maquillaje} class="ml-3 mr-3" alt="mujer maquillada"/>
                        <div class="flex flex-wrap ml-3 mr-3 flex-col md:mt-10">
                            <div class=" bg-red-200 w-full text-center py-3 rounded-sm">
                            Prepara tu piel. Antes de iniciar aplicale fijador e hidratador para rostro y labios
                            </div>
                            <div class=" bg-red-300 mt-2 text-center py-3 rounded-sm">
                            Usa el fijador a 20 cm de tu rostro, antes y despues para encapsular el maquillaje
                            </div>
                            <div class=" bg-red-400 mt-2  text-center py-3 rounded-sm">
                            Utiliza las brochas redondas para difuminar.
                            </div>
                            <div class=" bg-red-500 mt-2  text-center py-3 rounded-sm">
                            Siempre inicia maquillandote los ojos y luego el resto de la cara
                            </div>
                            <div class=" bg-red-600 mt-2  text-center py-3 rounded-sm">
                            Aprende a conocer tu forma de cara, para ponerte los tonos que te favorezcan
                            </div>
                        </div> 
                    </div>
               </div>
               <div class="flex flex-wrap  ">
                    <div class="flex flex-wrap justify-center items-center">
                       
                        <div class="flex flex-wrap ml-3 mr-3 flex-col md:mt-10">
                            <div class=" bg-red-600 w-full text-center py-3 rounded-sm">
                            Prepara tu piel. Antes de iniciar aplicale fijador e hidratador para rostro y labios
                            </div>
                            <div class=" bg-red-500 mt-2 text-center py-3 rounded-sm">
                            Usa el fijador a 20 cm de tu rostro, antes y despues para encapsular el maquillaje
                            </div>
                            <div class=" bg-red-400 mt-2  text-center py-3 rounded-sm">
                            Utiliza las brochas redondas para difuminar.
                            </div>
                            <div class=" bg-red-300 mt-2  text-center py-3 rounded-sm">
                            Siempre inicia maquillandote los ojos y luego el resto de la cara
                            </div>
                            <div class=" bg-red-200 mt-2  text-center py-3 rounded-sm">
                            Aprende a conocer tu forma de cara, para ponerte los tonos que te favorezcan
                            </div>
                        </div> 
                        <img src={cabello} class="ml-3 mr-3 mt-3" alt="mujer maquillada"/>
                    </div>
               </div>
               
              
           </section>
        );
}
export default Consejos;