### a) ¿Qué es y cómo funciona el elemento <RouterOutlet>?

<RouterOutlet> es un elemento en Angular que actúa como un contenedor para mostrar vistas de rutas activas. Cuando se navega a través de la aplicación, Angular utiliza el enrutador para determinar qué vista mostrar en el <RouterOutlet> en función de la ruta activa. El enrutador se encarga de asociar las rutas con las vistas correspondientes y de actualizar el <RouterOutlet> para mostrar la vista correcta.

La configuración de rutas se define en un archivo de enrutamiento, donde se especifican las rutas y las vistas correspondientes. Por ejemplo, se puede definir una ruta '/contact' que muestre una vista llamada "ContactComponent".

Cuando el usuario navega a la ruta '/contact', el enrutador busca en la configuración de rutas y encuentra que la vista correspondiente es "ContactComponent", y la renderiza dentro del <RouterOutlet>.


### b) ¿Para qué se utilizan las directivas routerLink y routerLinkActive? ¿Existen más directivas relacionadas con el router?

**routerLink** es una directiva de Angular que se utiliza para crear enlaces de navegación dentro de la aplicación. Se utiliza en conjunto con el enrutador de Angular para navegar a través de diferentes rutas de la aplicación. Es una alternativa al uso de elementos anchor <a> estándar, ya que permite navegar entre rutas de forma programática en lugar de depender de una acción del usuario como hacer clic en un enlace.

Por otro lado **routerLinkActive** es una directiva de Angular que se utiliza para agregar una clase CSS a un elemento cuando la ruta correspondiente está activa. Esto permite crear un estilo visual para indicar la ruta activa en la barra de navegación o menú de la aplicación.

A continuación podemos ver otras directivas relacionadas con el router:

- **routerLinkActiveOptions**: es una directiva que se utiliza para especificar las opciones de la directiva routerLinkActive.
- **routerOutlet**: es una directiva que se utiliza para indicar donde se renderizará la vista correspondiente a la ruta activa.
- **routerLinkActive**: es una directiva que se utiliza para agregar una clase CSS a un elemento cuando la ruta correspondiente está activa.
- **routerLinkActiveOptions**: es una directiva que se utiliza para especificar las opciones de la directiva routerLinkActive.


### c) ¿Qué diferencias hay entre los servicios Router y ActivatedRoute? ¿Qué funcionalidades tiene cada uno de estos servicios? Describe algunos de los métodos más importantes por los que están compuestos.


### d) ¿Qué son las Route Guards? ¿Cómo se usan las guardas en Angular? Describe todas las guardas que existen en Angular.


### e) ¿Qué es la carga Lazy de los módulos de Angular? ¿Cómo se configura en Angular la carga Lazy?


### f) ¿Qué es/para qué son útiles los middlewares en el contexto de node.js? ¿Dónde estás usando middlewares en nuestra aplicación?