# Proyecto Final React-Com. 51385 

#  BookStore, Tienda de Libros.
## Sobre la Tienda
#### BookStore es una tiende de libros, que cuenta con tres categorías: 

En primera instancia entras a un home, donde se encuentra todo el stock de productos, libros,  y hay tres links que te dirijirán a las distintas categorías:

* Infantiles
* Clásicos
* Autoayuda

Si clickeas en el logo, te dirije hacia la lista de productos, y en ellos, en su detalle, podrás ver reseña de cada libro y optar por agregarlo al carrito, el que aparecerá en barra de navegación una vez que elijas cantidad de productos a comprar. Se desplegará el detalle de productos comprados y si quieres eliminar de la compra alguno, puedes hacerlo, informándote de lo comprado, subtotal y total.
Si te arrepientes de la compra, puedes limpiar carrito o si no, ir al checkout, para completar formulario.
El formulario tiene validación de campos y confirmación, además de email. Una vez finalizado, aparecerá un ID de compra y un botón para ir nuevamente a Inicio, si así lo requieres.

Mi nombre es Beatriz Muñoz, estudiante de CoderHouse de Front End.


![]("https://cdn.pixabay.com/photo/2018/04/16/09/30/literature-3324023_1280.jpg")


## ¿Por qué JSX?
React acepta el hecho de que la lógica de renderizado está intrínsecamente unida a la lógica de la interfaz de usuario: cómo se manejan los eventos, cómo cambia el estado con el tiempo y cómo se preparan los datos para su visualización.


## El Proyecto
Para comenzar con el proyecto se usó la herramienta create-react-up.
Luego, creé la carpeta Components para ir alojando alli todos los componentes de mi aplicación: 
* Index.js es el archivo principal de la aplicación. La mayoría de los componentes de la aplicación se importan y se renderizan aquí, actuando como el punto de entrada principal. 
Instalé librería externa a react, react-router-dom que ofrece componentes de navegación, como Link y NavLink, que facilitan la creación de enlaces de navegación entre diferentes rutas, para ello
importé las funciones createBrowserRouter y RouterProvider. Se utiliza la función createBrowserRouter para crear un enrutador y se le pasa un arreglo que contiene las rutas de la aplicación. Componente Route define una ruta específica y asocia un componente a esa ruta. En este caso, el componente ItemListContainer se asocia a la ruta /category/:categoryId e /item/:itemId.La primera para poder listar por categoría y la segunda por producto.


* Navbar con su archivo navbar.jsx y sus categorías clickeables, importado en su componente principal index.js.
Se importan los componentes NavLink y Link de react-router-dom. Estos componentes se utilizan para crear enlaces de navegación dentro de la barra de navegación, también se importa componente loader.jsx que muestra un indicador de carga.


* Cartwidget con su archivo cartwidget.jsx que va a contener un ícono carrito y un número que indica cantidad de productos que tenenmos en él. Lo importén en Navbar.jsx porque está contenido en él.

* ItemListContainer con su archivo itemListContainer.jsx con una función  que utiliza la desestructuración para extraer la propiedad greeting del objeto de propiedades que se pasa al componente. Esta muestra un banner.Se importó tambien a index.js.
Escribí lógica relacionada con el listado de los productos.
Se importan los hooks useState, useEffect y useParams de React y las funciones necesarias de la biblioteca firebase/firestore.
El hook useParams para obtener los parámetros de la ruta actual (categoryId).
El hook useEffect para realizar una consulta a la base de datos de Firestore cuando cambia el valor de categoryId o cuando el componente se monta.
En resumen, el componente ItemListContainer realiza una consulta a la base de datos de Firestore y muestra el resultado en el componente ItemList, adaptando la consulta según el parámetro categoryId de la ruta actual. Además, renderiza un banner con un texto de saludo.

*ItemList con su archivo itemList.jsx que se encarga de listar los productos. Tiene un estado que almacena productos y se muestran o mapean a través de función o método map.

* Item con su archivo item.jsx.Se importa React y el componente Link de react-router-dom. Dentro del componente, se utiliza un bloque try-catch para manejar posibles errores y evitar que se rompa la aplicación en caso de que ocurra alguno.
Empleo sintaxis de desestructuración de objetos para extraer los valores de las props id, title, author, price, category, img y stock.
El componente Link crea un enlace hacia la página de detalle del producto. La URL se construye utilizando la prop id, y se muestra el texto "Ver Detalle" como enlace.

* ItemCount con su archivo itemCount.jsx. Tiene un estado que almacena cantidad contador, y dos funciones flecha para incrementar y decremantar contador y una función agregar carrito que va a ejecutar como callback función recibida por prop, pasándosele cantidad del estado y si cantidad supera stock se evita que se siga operación con propiedad disabled.

* ItemDetailContainer con su archivo itemDetailContainer.jsx, también, se importa index.jsx para poder visualizarlo en pantalla.Y a diferencia del itemListContainer, este componente muestra uno de los productos, se utiliza el spread operator para pasar todas las propiedades del objeto product como props individuales al componente ItemDetail.
Se utiliza el hook useParams para obtener los parámetros de la URL actual. En este caso, se obtiene el parámetro itemId, que representa el ID del producto.
Se utiliza el hook useEffect para realizar una consulta a la base de datos de Firestore cuando el valor de itemId cambie o cuando el componente se monte.
Se utiliza getDoc para obtener una instancia actualizada del documento en Firestore. Si el documento existe, se utiliza el método data() para obtener los datos del documento.

* ItemDetail con su archivo itemDetail.jsx. Se importa el componente Link de react-router-dom. Se utiliza para crear un enlace hacia la página de carrito de compras ("/cart").
Se importa el componente ItemCount que muestra un contador de cantidad y botones de incremento/decremento.

Se importa el contexto CartContext desde el archivo "../../context/cartContext". Se utiliza para acceder a la función addItem que permite agregar elementos al carrito de compras.
Se reciben por desestructuring varias propiedades y se muestran en la card.
Se utiliza el hook useContext para acceder a la función addItem del contexto CartContext.
La función handleEntered se emplea como manejador de eventos para el componente ItemCount. Se actualiza el estado amountEntered con la cantidad seleccionada y se crea un objeto item con la información del artículo. 
La función handleEntered se utiliza como manejador de eventos para el componente ItemCount. Se actualiza el estado amountEntered con la cantidad seleccionada y se crea un objeto item con la información del artículo. Luego, se llama a la función addItem del contexto CartContext para agregar el artículo al carrito de compras

* Checkout con su archivo Checkout.jsx. Se importan las dependencias necesarias, incluyendo varias funciones y objetos relacionados con Firebase Firestore, el contexto CartContext y el componente CheckoutForm.
Se definen dos estados mediante el hook useState: loading para controlar el estado de carga y orderId para almacenar el ID de la orden generada.
La función createOrder se encarga de crear la orden de compra. Recibe como parámetro un objeto con los datos del comprador (nombre, teléfono, correo electrónico y confirmación de correo electrónico).
Se crea un objeto objOrder que contiene los datos de la orden, como el comprador, los productos del carrito, el total y la fecha actual.

Se obtiene una instancia de la base de datos de Firestore utilizando la función getFirestore().

Se obtienen los IDs de los productos del carrito y se realiza una consulta para obtener los documentos correspondientes a esos IDs desde la colección "items" en Firestore.
Se crea un array batch que contendrá las operaciones de actualización de stock de los productos.
Si se encuentra el producto y tiene una propiedad stock definida, se calcula el nuevo stock restando la cantidad del producto en el carrito.
Se verifica el estado loading. Si es true, se muestra un mensaje de carga, que es un ID  y un enlace para volver a la página de inicio/ prodictos. 
Para que genere la orden (ID), el usuario completa formulario de finalización de compra (CheckoutForm), donde el usuario puede ingresar sus datos de contacto y confirmar.

* Footer con su archivo footer.jsx contiene logo del sitio y su conexión con las redes a través de importar Link de react-router-dom, que permite crear enlaces internos dentro de la aplicación.

