# APRENDIENDO NEXT

- no se puede ejecutar el "yarn start" antes de hacer un "yarn build"
- yarn lint busca que se cumpla todas las reglas que tengas en nuestro "eslintrc.json"

## ¿qué onda con el \_app.js?

- Es un envoltorio de todas las páginas que tendremos en nuestro proyecto. recibe un component y revuelve con todas sus propiedades.
- Si queremos poner un navbar que va a estar en todas las páginas, vamos a este archivo.

## CSS en NextJs

- globals.css: este archivo es importado desde \_app.js, aquí tendremos todo el css global para nuestro proyecto

## agregando css mediante Sass

- yarn add sass
- y solo cambiar la extensión por scss => Home.module.scss, globals.scss

# Error 404

- Podemos modificar el contenido de nuestra respuesta creando: 404.js
- También podemos crear una página 500.js

# Manejando data

## getStaticProps

- los datos consumidos desde esta función serán leidos antes del build del proyecto.ó hasta que hagamos nuevamente un build a nuestro proyecto.
- si agregamos más datos y ya hicimos el build con esta funcionalidad no serán leídos.
- las peticiones a los datos no serán productos desde la parte del "cliente" del proyecto sino por la parte del servidor (backend).
- Así apaguemos nuestro servidor del backend, ya nuestro proyecto habrá leido y seguirá mostrando los datos.
- Excelente para ahorrar peticiones.

```js
export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
```

## getStaticPaths

- Pongamos un ejemplo, estamos creando una plataforma donde tenemos 200 cursos, y aplicamos un getStaticPaths para poder ahorrar las peticiones, pero que funcione y se creen las carpetas necesitamos de usar del contexto que es la información que viene por la ruta (params, etc). fallback y crear las paths.
- las paths serían mejor decirle al backend que nos dé una api con todos los id's, iterarlo y crear nuestro objeto.

```js
export async function getStaticProps(context) {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();

  return {
    props: {
      user,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1",
        },
      },
      {
        params: {
          id: "2",
        },
      },
      {
        params: {
          id: "3",
        },
      },
      {
        params: {
          id: "4",
        },
      },
      {
        params: {
          id: "5",
        },
      },
      {
        params: {
          id: "6",
        },
      },
      {
        params: {
          id: "7",
        },
      },
      {
        params: {
          id: "8",
        },
      },
      {
        params: {
          id: "9",
        },
      },
      {
        params: {
          id: "10",
        },
      },
    ],
    fallback: true,
  };
}
```

## Incremental side regeneration

```js
export async function getStaticProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await response.json();

  return {
    props: {
      users: data,
    },
    revalidate: 15,
  };
}
```

- Si bien lo único que hemos agregado en nuestro código ha sido el "revalidate", tiene mucha cienta por detrás. Este va a especificar que nuestro archivo estático si bien es "estático" va a estar pidiendo información al backend cada 15 segundos, pero con la condición de que debería de ver un usuario en nuestra página, pero este usuario no verá los cambios, pero si los demás, este usuario va a activar la petición.
- Si nuestro backend se cae, no pasará nada con nuestro frontend, se quedará con la información anterior.

## getServerSideProps

```js
export async function getServerSideProps() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
```

- El getServerSideProps lo que hará esque cada vez que entremos a nuestra página se hará la petición al backend.

## variables de entorno

- .env => archivo para colocar las variables de entorno
- .env.example => archivo para colocar las variables de entorno que necesitamos o sirve más de guía para los otros usuarios.
- .env.local => archivo para colocar las variables de entorno pero que es muy improtante ya que será en archivo que será leído por NextJs (no la usemos mucho)
- .env.production => archivo para colocar las variables de entorno PERO es usado en producción (cuando hacemos yarn build)
- .env.development => archivo para colocar las variables de entorno pero que usado en desarrollo (cuando hacemos yarn dev)

## next Image

```js
<Image
  alt="auto mazda"
  src="/images/auto.png"
  width={700}
  height={300}
  placeholder="blur"
  blurDataURL="/images/auto_peque.webp"
/>
```

- placeholder="Blur" => este le agrega un blur a la imagen
- blurDataURL => le agregará una imagen mientras la src cargara
- las imagenes en nextjs van a optimizarse por el mismo framework

## Next Head

```js
<Head>
  <title>About | </title>
</Head>
```

- es un component por ende podemos hacerlo dinámico y poner la información dinámicamente.

## Next Seo

- librería para next que ayuda al seo
- url: https://www.npmjs.com/package/next-seo
"# learn-next-edteam" 
