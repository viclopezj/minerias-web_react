export default function Body() {

 return (

  <main id="contenido">

   <section id="inicio" className="seccion">

    <h2>Bienvenidos a MineTime</h2>

    <p>Somos la tienda líder en herramientas y maquinaria para la industria minera y de excavación.</p>

    <p>Equipamos a profesionales y empresas con los mejores implementos del mercado para garantizar seguridad, precisión y eficiencia en cada faena.</p>

   </section>



   {/* Nuevo Id*/}

   <section id="Nosotros" className="seccion">

    <h2>Por que Elegirnos</h2>

    <p>Con más de 15 años de experiencia en el rubro, entendemos que en la mina no hay margen para el error. Por eso, todos nuestros productos están forjados con materiales de grado industrial.</p>

    <p>Ofrecemos garantía extendida, asesoría técnica especializada y envíos directos a los principales campamentos mineros del país.</p>

   </section>



   <section id="album" className="seccion">

    <h2>Herramientas mas usadas</h2>

    <p>Vea las herramientas mas comunes para la mineria.</p>



    <div className="galeria">

     {/* Tarjeta 1 */}

     <article className="tarjeta">

      <div className="espacio-imagen">

       <img src="IMG/Martillo.jpg" alt="Martillo" style={{ width: '100%', height: '100%' }} />

      </div>

      <h3>Martillo</h3>

      <p>Martillo de acero forjado de alto impacto, ideal para trituración manual y trabajos pesados.</p>

     </article>



     {/* Tarjeta 2 */}

     <article className="tarjeta">

      <div className="espacio-imagen">

       <img src="IMG/Pico.jpg" alt="Pico" style={{ width: '100%', height: '100%' }} />

      </div>

      <h3>Pico</h3>

      <p>Pico minero de doble punta con mango ergonómico anti-vibración para penetrar roca dura.</p>

     </article>



     {/* Tarjeta 3 */}

     <article className="tarjeta">

      <div className="espacio-imagen">

       <img 

        src="IMG/Pala Hidraulica.jpg" 

        alt="Pala Hidráulica" 

        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} 

       />

      </div>

      <h3>Pala Hidraulica</h3>

      <p>Maquinaria pesada de alto rendimiento diseñada para el movimiento de tierra y roca a gran escala.</p>

     </article>



     {/* Tarjeta 4 */}

     <article className="tarjeta">

      <div className="espacio-imagen">

       <img src="IMG/Azadon.jpg" alt="Azadón" style={{ width: '100%', height: '100%' }} />

      </div>

      <h3>Azadon</h3>

      <p>Herramienta robusta y resistente, perfecta para la rápida remoción de escombros y limpieza de zanjas.</p>

     </article>



     {/* Tarjeta 5 */}

     <article className="tarjeta">

      <div className="espacio-imagen">

       <img src="IMG/Barra de Excavacion.JPG" alt="Barra de Excavación" style={{ width: '100%', height: '100%' }} />

      </div>

      <h3>Barra de Excavacion</h3>

      <p>Barra de excavación de acero de alta resistencia, diseñada para operaciones pesadas en condiciones extremas.</p>

     </article>



     {/* Tarjeta 6 */}

     <article className="tarjeta">

      <div className="espacio-imagen">

       <img src="IMG/Cincel.jpg" alt="Cincel" style={{ width: '100%', height: '100%' }} />

      </div>

      <h3>Cincel</h3>

      <p>Cincel de acero de alta resistencia, ideal para trabajos de corte y conformado en minería.</p>

     </article>

    </div>

   </section>



   {/* Nuevo Id*/}

   <section id="Actualidad" className="seccion">

    <h2>Actualidad</h2>

    <p>Conoce las últimas tendencias y productos de nuestra tienda.</p>

    <p>Mantente informado sobre las nuevas tecnologías y herramientas.</p>

   </section>



   <section id="contacto" className="seccion">

    <h2>Contacto</h2>

    <p>Si tienes dudas o comentarios, puedes escribirnos:</p>



    <form action="#" method="post">

     <label htmlFor="nombre">Nombre:</label><br />

     <input type="text" id="nombre" name="nombre" /><br /><br />



     <label htmlFor="email">Correo:</label><br />

     <input type="email" id="email" name="email" /><br /><br />



     <label htmlFor="mensaje">Mensaje:</label><br />

     <textarea id="mensaje" name="mensaje" rows={4} cols={30}></textarea><br /><br />



     <button type="submit">Enviar</button>

     <button type="reset">Limpiar</button>

    </form>

   </section>

  </main>

 );

}