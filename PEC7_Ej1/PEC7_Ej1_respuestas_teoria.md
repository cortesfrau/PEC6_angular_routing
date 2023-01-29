### a) ¿Qué es y cómo funciona el elemento RouterOutlet?

**RouterOutlet** es un elemento en Angular que actúa como un contenedor para mostrar vistas de rutas activas. Cuando se navega a través de la aplicación, Angular utiliza el enrutador para determinar qué vista mostrar en el **RouterOutlet** en función de la ruta activa. El enrutador se encarga de asociar las rutas con las vistas correspondientes y de actualizar el **RouterOutlet** para mostrar la vista correcta.

La configuración de rutas se define en un archivo de enrutamiento, donde se especifican las rutas y las vistas correspondientes. Por ejemplo, se puede definir una ruta '/contact' que muestre una vista llamada "ContactComponent".

Cuando el usuario navega a la ruta '/contact', el enrutador busca en la configuración de rutas y encuentra que la vista correspondiente es "ContactComponent", y la renderiza dentro del **RouterOutlet**.


### b) ¿Para qué se utilizan las directivas routerLink y routerLinkActive? ¿Existen más directivas relacionadas con el router?

**routerLink** es una directiva de Angular que se utiliza para crear enlaces de navegación dentro de la aplicación. Se utiliza en conjunto con el enrutador de Angular para navegar a través de diferentes rutas de la aplicación. Es una alternativa al uso de elementos anchor estándar, ya que permite navegar entre rutas de forma programática en lugar de depender de una acción del usuario como hacer clic en un enlace.

Por otro lado **routerLinkActive** es una directiva de Angular que se utiliza para agregar una clase CSS a un elemento cuando la ruta correspondiente está activa. Esto permite crear un estilo visual para indicar la ruta activa en la barra de navegación o menú de la aplicación.

A continuación podemos ver otras directivas relacionadas con el router:

- **routerLinkActiveOptions**: es una directiva que se utiliza para especificar las opciones de la directiva routerLinkActive.
- **routerOutlet**: es una directiva que se utiliza para indicar donde se renderizará la vista correspondiente a la ruta activa.
- **routerLinkActive**: es una directiva que se utiliza para agregar una clase CSS a un elemento cuando la ruta correspondiente está activa.
- **routerLinkActiveOptions**: es una directiva que se utiliza para especificar las opciones de la directiva routerLinkActive.


### c) ¿Qué diferencias hay entre los servicios Router y ActivatedRoute? ¿Qué funcionalidades tiene cada uno de estos servicios? Describe algunos de los métodos más importantes por los que están compuestos.

**Router** es un servicio de Angular que se encarga de la navegación entre rutas en una aplicación. Proporciona métodos para navegar a una ruta específica, volver a la ruta anterior, navegar a una ruta relacionada y navegar a una ruta con parámetros.

Por otro lado, **ActivatedRoute** es un servicio de Angular que proporciona información sobre una ruta específica que está siendo activada, incluyendo parámetros de ruta, datos y un observador para cambios en la ruta.

Algunos de los métodos más importantes en el servicio **Router** son:

- **navigate**: navega a una ruta específica.
- **navigateByUrl**: navega a una ruta específica mediante una URL.
- **back**: navega hacia atrás en el historial de navegación.
- **forward**: navega hacia adelante en el historial de navegación.

Algunos de los métodos más importantes en el servicio **ActivatedRoute** on:

- **params**: un observador que emite los parámetros de ruta cada vez que cambian.
- **data**: un observador que emite los datos asociados a la ruta cada vez que cambian.
- **queryParams**: un observador que emite los parámetros de consulta en la URL cada vez que cambian.
- **parent**: una propiedad que proporciona acceso al objeto ActivatedRoute del componente padre.
- **firstChild**: una propiedad que proporciona acceso al primer objeto ActivatedRoute de los componentes hijos.


### d) ¿Qué son las Route Guards? ¿Cómo se usan las guardas en Angular? Describe todas las guardas que existen en Angular.

Las **Route Guards** son una característica de Angular que permite controlar el acceso a las rutas de una aplicación. Permiten ejecutar lógica específica antes de permitir o denegar el acceso a una ruta. Esto es útil para tareas como la autenticación, la autorización, la validación de datos, entre otras.

Existen varios tipos de guardas:

- **CanActivate**: permite controlar si un usuario puede activar una ruta específica. Se utiliza para controlar el acceso a rutas protegidas.
- **CanActivateChild**: permite controlar si un usuario puede activar una ruta hija de una ruta específica.
- **CanDeactivate**: permite controlar si un usuario puede desactivar una ruta específica. Se utiliza para preguntar al usuario si desea abandonar un formulario no guardado, por ejemplo.
- **CanLoad**: permite controlar si un usuario puede cargar un módulo específico. Se utiliza para controlar el acceso a módulos protegidos.

Para utilizar una guarda, primero se debe crear un servicio que implemente el tipo de guarda deseado. Después, hay que registrar la guarda en el archivo de configuración de rutas de la aplicación, especificando la ruta a proteger y la guarda que se va a utilizar para controlar el acceso a esa ruta.


### e) ¿Qué es la carga Lazy de los módulos de Angular? ¿Cómo se configura en Angular la carga Lazy?

La carga lazy de Angular es una técnica de optimización que permite cargar módulos de forma diferida, es decir, solo cuando se necesitan. Esto puede mejorar significativamente el tiempo de carga de la app y reducir el tamaño inicial de la descarga.

Para configurar la carga lazy se debe utilizar el método loadChildren en el enrutador y especificar la ruta al módulo como una cadena. Por ejemplo:

```
const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  }
];
```


### f) ¿Qué es/para qué son útiles los middlewares en el contexto de node.js? ¿Dónde estás usando middlewares en nuestra aplicación?

Los **middlewares** en Node.js son funciones que se ejecutan en un orden específico antes de llegar a un endpoint o ruta en una aplicación. Son útiles para manipular o transformar los datos de la solicitud y respuesta HTTP, realizar tareas de autenticación o autorización, y para componer el comportamiento de la aplicación en múltiples capas.

Por ejemplo, un middleware puede verificar si un usuario ha iniciado sesión antes de permitirle acceder a un endpoint específico, o puede registrar cada solicitud y respuesta para fines de depuración.

A continuación se enumeran algunos de los usos que se le pueden dar a los middlewares en una apliacación:

- Autenticación y autorización
- Manejo de errores
- Modificación de solicitudes y respuestas HTTP
- Caché de solicitudes
- Protección de rutas
- Configuración de cabeceras HTTP
- Procesamiento de token JWT
- Almacenamiento en el lado del cliente (local storage o session storage)
- Compresión de datos HTTP.
