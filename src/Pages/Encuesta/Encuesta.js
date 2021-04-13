import React from 'react';

function Encuesta() {
    return(
       <div className="encuesta">
           <br />
           <br />
           <div className="p-10">
               <h2 className="text-center text-3xl leading-9 font-extrabold text-black">Encuesta de Sastifacción al cliente</h2>
               <br />
               <form>
                   <div className="flex justify-center">
                       <div className="lg:w-7/6 md:w-4/3 w-full">
                           <p className="text-center">Porque tu opinión nos importa. Contesta de manera honesta la siguiente encuenta. Gracias de antemano.</p>
                           <br />
                           <p className="text-center justify-center font-semibold text-xl">¿Cómo fue su experiencia en Carolina's Joyeria?</p>

                           <div className="flex  justify-center">
                               <div className="lg:w-1/3 md:w-2/3 w-full flex-col md:flex-row lg:flex-row xl:flex-row">
                                <div class="mt-2">
                                <label class="inline-flex items-center ml-8">
                                <input type="radio" class="form-radio" name="accountType" value="personal"/>
                                <span class="ml-2">Malo</span>
                                </label>
                                <label class="inline-flex items-center ml-8">
                                <input type="radio" class="form-radio" name="accountType" value="personal"/>
                                <span class="ml-2">Bueno</span>
                                </label>
                                <label class="inline-flex items-center ml-8">
                                <input type="radio" class="form-radio" name="accountType" value="personal"/>
                                <span class="ml-2">Muy Bueno</span>
                                </label>
                                <label class="inline-flex items-center ml-8">
                                <input type="radio" class="form-radio" name="accountType" value="personal"/>
                                <span class="ml-2">Excelente</span>
                                </label>
                        </div>
                    </div>
                </div>

                    <br />
                    <p className="text-center justify-center font-semibold text-xl">¿Cuál es la probabilidad de que vuelva a comprar en Carolina's Joyeria?</p>

                           <div className="flex justify-center">
                               <div className="lg:w-1/3 md:w-2/3 w-full">
                                <div class="mt-2">
                                <label class="inline-flex items-center ml-8">
                                <input type="radio" class="form-radio" name="accountType" value="personal"/>
                                <span class="ml-2">Improbable</span>
                                </label>
                                <label class="inline-flex items-center ml-8">
                                <input type="radio" class="form-radio" name="accountType" value="personal"/>
                                <span class="ml-2">Probable</span>
                                </label>
                                <label class="inline-flex items-center ml-8">
                                <input type="radio" class="form-radio" name="accountType" value="personal"/>
                                <span class="ml-2">Muy Probable</span>
                                </label>
                            
                        </div>
                    </div>
                </div>

                        <br />
                        <p className="text-center justify-center font-semibold text-xl">¿Cómo calificaría la calidad de la atención recibida?</p>

                           <div className="flex justify-center">
                               <div className="lg:w-1/3 md:w-2/3 w-full">
                                <div class="mt-2">
                                <label class="inline-flex items-center ml-8">
                                <input type="radio" class="form-radio" name="accountType" value="personal"/>
                                <span class="ml-2">Malo</span>
                                </label>
                                <label class="inline-flex items-center ml-8">
                                <input type="radio" class="form-radio" name="accountType" value="personal"/>
                                <span class="ml-2">Bueno</span>
                                </label>
                                <label class="inline-flex items-center ml-8">
                                <input type="radio" class="form-radio" name="accountType" value="personal"/>
                                <span class="ml-2">Muy Bueno</span>
                                </label>
                                <label class="inline-flex items-center ml-8">
                                <input type="radio" class="form-radio" name="accountType" value="personal"/>
                                <span class="ml-2">Excelente</span>
                                </label>
                        </div>
                    </div>
                </div>

                <br />
                        <p className="text-center justify-center font-semibold text-xl">¿Cómo valora la calidad de nuestros productos?</p>

                           <div className="flex justify-center">
                               <div className="lg:w-1/3 md:w-2/3 w-full">
                                <div class="mt-2">
                                <label class="inline-flex items-center ml-8">
                                <input type="radio" class="form-radio" name="accountType" value="personal"/>
                                <span class="ml-2">Malo</span>
                                </label>
                                <label class="inline-flex items-center ml-8">
                                <input type="radio" class="form-radio" name="accountType" value="personal"/>
                                <span class="ml-2">Bueno</span>
                                </label>
                                <label class="inline-flex items-center ml-8">
                                <input type="radio" class="form-radio" name="accountType" value="personal"/>
                                <span class="ml-2">Muy Bueno</span>
                                </label>
                                <label class="inline-flex items-center ml-8">
                                <input type="radio" class="form-radio" name="accountType" value="personal"/>
                                <span class="ml-2">Excelente</span>
                                </label>
                        </div>
                    </div>
                </div>
                       </div>
                   </div>

                   <div className="mt-7 flex justify-center">
                    <button type="submit" 
                    className="theme-general group w-full lg:w-auto md:w-auto py-2 px-16 border border-transparent text-lg leading-8 font-medium h-15 rounded-md text-white bg-secondary hover:bg-primary  focus:outline-none focus:border-secondary  focus:shadow-outline-red active:bg-secondary active:outline-none transition duration-150 ease-out">Enviar</button>
                </div>
               </form>
           </div>
       </div>
    )
}

export default Encuesta;