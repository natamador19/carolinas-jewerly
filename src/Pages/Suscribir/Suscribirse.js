

export function suscribirse() {

    return(
        
        <div>
            <br/>
            <h1 className="text-center text-3xl leading-9 font-extrabold text-black" >No te pierdas nuestras ofertas y nuestros maravillosos precios.</h1>
        
            <div className="mt-4 flex justify-center">
                    <button type="submit" 
                    className="group w-full lg:w-auto md:w-auto py-3 px-8 border border-transparent text-lg leading-8 font-medium h-15 rounded-md text-white bg-red-600 hover:bg-red-500  focus:outline-none focus:border-red-400  focus:shadow-outline-red active:bg-red-400 active:outline-none transition duration-150 ease-out">Suscribirse Aquí</button>
                </div>

        <div className="suscribirse " >
            <br />
            <br />
            <div className="p-10">
                <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-800">Formulario de Suscripción</h2>
                <br />
            
            <form className="form-sus"> 

            <div className="flex justify-center">
                <div className="lg:w-1/3 md:w-2/3 w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="text">Nombre Completo</label>
                    <input 
                    type="text" 
                    name="txtnombre"
                    id="text"
                    placeholder="Ej. Daniela Isabel Martinez"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" required/>

                    </div>
                </div>
                
                <br />

                <div className="flex justify-center ">
                <div className="lg:w-1/3 md:w-2/3 w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    name="email"
                    id="email"
                    placeholder="Ej. usuario@gmail.com"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" required/>
                    </div>
                 </div>

                 <br/>

                <div className="flex justify-center ">
                <div className="lg:w-1/3 md:w-2/3 w-full">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="text">Edad</label>
                    <input 
                        type="number" 
                        name="txtedad"
                        id="number"
                        placeholder="Ej. 18"
                        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" required/>
                    </div>
                 </div>

                 <br/>

                <div className="flex justify-center">
                <div className="lg:w-1/3 md:w-2/3 w-full">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="text">Género</label>
                <div class="mt-2">
                    <label class="inline-flex items-center">
                    <input type="radio" class="form-radio" name="accountType" value="personal"/>
                    <span class="ml-2">Masculino</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                    <input type="radio" class="form-radio" name="accountType" value="busines"/>
                    <span class="ml-2">Femenino</span>
                    </label>
                        </div>
                    </div>
                </div>

                <br/>

                <div className="flex justify-center ">
                <div className="lg:w-1/3 md:w-2/3 w-full">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="text">Télefono</label>
                <input 
                    type="number" 
                    name="txttel"
                    id="number"
                    placeholder="Ej. +504 2248-9656"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500" required/>
                    </div>
                </div>
                <br/>
                {/**Submit Buttom */}
                <div className="mt-4 flex justify-center">
                    <button type="submit" 
                    className="theme-general group w-full lg:w-1/3 md:w-2/3 py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-secondary  focus:outline-none focus:border-primary  focus:shadow-outline-red active:bg-secondary active:outline-none transition duration-150 ease-out" >Suscribirse</button>
                </div>
                </form>
            </div>
        </div>
        </div>
    )
    
}

export default suscribirse;