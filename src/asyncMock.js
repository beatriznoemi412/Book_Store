const products = [
    {
    id : "1",
    title : "La Sirenita. Libro de arte bajo el mar.",
    author : "Disney./De 6 a 8 años",
    price : 6700,
    category : "Infantiles",
    img : "https://planetadelibrosar4.cdnstatics.com/usuaris/libros/fotos/314/m_libros/portada_la-sirenita-libro-de-arte-bajo-el-mar_disney_202304171630.jpg",
    stock : 15,
    description : "Ariel y sus amigos te acompañarán en la aventura con actividades creativas de todo tipo. Es un libro que te propone creatividad, color, aventura y emocion sin fin."
},{
    id : "2",
    title : "Mi primera copa del mundo",
    author : "Martina Fileni./De 6 a 8 años",
    price : 2800,
    category : "Infantiles",
    img : "https://planetadelibrosar7.cdnstatics.com/usuaris/libros/fotos/377/m_libros/portada_mi-primera-copa-del-mundo__202303062041.jpg",
    stock : 15,
    description : "Los campeones del mundo festejamos como queremos. Revivamos Juntos los momentos más épicos de este Mundial, donde todos disfrutamos y valoramos la unión de los campeones y su esfuerzo."
},{
    id : "3",
    title : "Fechas patrias. 11 de septiembre",
    author : "Felipe Pigna./9 a 12 años",
    price : 3500,
    category :"Infantiles",
    img : "https://planetadelibrosar7.cdnstatics.com/usuaris/libros/fotos/337/m_libros/portada_fechas-patrias-11-de-septiembre-planeta-lector_felipe-pigna_202210111930.jpg",
    stock : 15,
    description : "Celebramos el Día del Maestro, recordamos a Domingo Faustino Sarmiento. De esa forma, lo homenajeamos como educador, pero también como escritor, periodista y político muy polémico."
},{
    id : "4",
    title : "Mi parte favorita de la vida",
    author : "Fabián Sevilla./A partir de 12 años",
    price : 3400,
    category : "Infantiles",
    img : "https://planetadelibrosar2.cdnstatics.com/usuaris/libros/fotos/362/original/portada_mi-parte-favorita-de-la-vida_fabian-sevilla_202301022052.jpg",
    stock : 15,
    description : "Cristabel y Miranda enfrentan la presión social y la de su entorno para poder construir sus identidades. Y apuestan a sus emociones.Un taller de arte será su encuentro y, desde allí, se ayudarán"
},{
    id : "5",
    title : "Las mil y una noches",
    author : "Anónimo",
    price : 5200,
    category : "Clasicos",
    img : "https://imagessl3.casadellibro.com/a/l/t7/83/9788423352883.jpg",
    stock : 15,
    description : "Las mil y unas noches no sólo es un mosaico que contiene cuentos de los distintos pueblos que en un momento u otro los acogieron, sino que también es un mosaico de las diversas morales de los mismos, siendo un tema muy actual."
},{
   id : "6",
   title : "Don Quijote de la Mancha" ,
   author : "Miguel de Cervantes Saavedra",
   price :8900,
   category : "Clasicos",
   img : "https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/198/m_libros/portada_don-quijote-de-la-mancha_miguel-de-cervantes_201504281253.png",
   stock : 15,
   description : "Clásico, que rompió con todos los esquemas de las novelas de caballería de la época. Nos referimos a las aventuras de Don Quijote de la Mancha junto a Pedro Sancho, conocido como Sancho Panza."
},{
    id : "7",
    title : "Los tres mosqueteros" ,
    author : "Alejandro Dumas",
    price :8500,
    category : "Clasicos",
    img : "https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/372/m_libros/portada_los-tres-mosqueteros_alexandre-dumas_202303101740.jpg",
    stock : 15,
    description :"Una de las mejores novelas de aventuras de todos los tiempos y un clásico indiscutible del género de capa y espada. En él se recuperan valores olvidados como la valentía, amistad, hermandad y luchar por las convicciones compartidas."
   
},{
    id : "8",
    title : "Moby Dick",
    author : "Herman Melville",
    price :6300,
    category : "Clasicos",
    img : "https://planetadelibroscom.cdnstatics2.com/usuaris/libros/fotos/191/m_libros/portada_moby-dick_herman-melville_201412151351.jpg",
    stock : 15,
    description : "El lector, sin duda algo aturdido por su larga navegación, se encuentra abrumado en el trágico final: más adelante, cuando vuelva a abrir Moby Dick, aunque ya sepa todo el desarrollo, se dejará arrastrar nuevamente por la acción propuesta por Melville."
},{
    id : "9",
    title : "Sé amable contigo mismo",
    author : "Kristin Neff",
    price :5200,
    category : "Autoayuda",
    img : "https://habilidadsocial.com/wp-content/uploads/2018/04/Se%CC%81-amable-contigo-mismo.jpg",
    stock : 15,
    description : "La búsqueda incansable de una autoestima sana se ha convertido en una religión tiránica. Nuestra cultura ultra competitiva nos indica que tenemos que estar por encima de la media para sentirnos bien con nosotros mismos."
},{
    id : "10",
    title : "Cuestión de confianza",
    author : "Dr. Russ Harris",
    price :6200,
    category : "Autoayuda",
    img : "https://habilidadsocial.com/wp-content/uploads/2018/04/cuestion-de-confianza.jpg",
    stock : 15,
    description : "Un libro imprescindible para cualquier persona que desee liberarse de sus pensamientos y emociones negativas y lograr paz. Se trata de una obra extraordinariamente práctica sobre terapia de compromiso y aceptación."
},{
    id : "11",
    title : "El poder del ahora",
    author : "Eckhart Tolle",
    price :4800,
    category : "Autoayuda",
    img : "https://habilidadsocial.com/wp-content/uploads/2018/04/el-poder-del-ahora.jpg",
    stock: 15,
    description : " Se trata de uno de los mayores bestsellers a nivel mundial, en el que Tolle propone varias estrategias para centrarte en el momento presente y aprender a convivir con tu voz interior, concientizándose en vivir el presente."
},{
    id : "12",
    title : "El hombre en busca de sentido",
    author : "Viktor Frankl",
    price :5400,
    category : "Autoayuda",
    img : "https://m.media-amazon.com/images/I/413BSRDOlsL._SX324_BO1,204,203,200_.jpg",
    stock: 15,
    description : "El hombre en busca de sentido es el estremecedor relato en el que Viktor Frankl nos narra su experiencia en los campos de concentración, siendo hiperrealista su descripción de ese momento de su vida."
}

]
export const getProducts = () =>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}
export const getProductById = (productId)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve (products.find(prod => prod.id === productId)) 
        }, 500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter((prod) => prod.category === categoryId);
        resolve(filteredProducts);
      }, 500);
    });
  };
  