# Documentación - Migración Instagram Clone a React Native con Expo

## Objetivo

Migrar el clon de Instagram hecho originalmente en React web a una aplicación móvil hecha con React Native y Expo. La app resultante mantiene la idea visual del proyecto original, adapta los componentes a mobile y usa navegación por tabs para las secciones principales.

## Análisis del proyecto React original

El proyecto original tenía una estructura web basada en componentes `.jsx`, CSS y elementos del DOM como `div`, `section`, `button`, `input` e `img`.

Pantallas detectadas:

- `HomePage.jsx`: mostraba stories y feed.
- `ProfilePage.jsx`: mostraba perfil, tabs de posts/guardados y grilla de publicaciones.

Componentes detectados:

- `Header`
- `Sidebar`
- `SidebarItem`
- `Stories`
- `Story`
- `Feed`
- `Post`
- `PostActions`
- `PostModal`
- `ProfileCard`

Lógica reutilizable detectada:

- `userData.js`: usuarios falsos, captions, comentarios, usuario actual y `formatCount`.
- `catService.js`: lógica para pedir imágenes a The Cat API.

## Análisis del proyecto base React Native

El proyecto ya estaba configurado como Expo, con `index.js` registrando `src/App.js`.

Dependencias ya presentes:

- `expo`
- `react`
- `react-native`
- `react-native-safe-area-context`
- `@react-navigation/native`
- `@react-navigation/bottom-tabs`
- `react-native-screens`

No se instaló ninguna dependencia nueva.

## Archivos creados

### `src/api`

- `client.js`
- `posts.api.js`
- `stories.api.js`
- `users.api.js`

### `src/hooks`

- `usePosts.js`
- `useStories.js`

### `src/navigation`

- `AppNavigator.js`

### `src/views`

- `HomeView.js`
- `SearchView.js`
- `CreatePostView.js`
- `ActivityView.js`
- `ProfileView.js`

### `src/components`

- `AppHeader.js`
- `Avatar.js`
- `StoryCircle.js`
- `StoriesList.js`
- `PostCard.js`
- `PostActions.js`
- `PostDetailModal.js`
- `ProfileHeader.js`

## Archivos modificados

- `src/App.js`: se reemplazó la app web anterior por la app móvil con `SafeAreaProvider`, `SafeAreaView`, `StatusBar` y `AppNavigator`.

## Navegación implementada

Se implementó navegación por tabs usando:

- `NavigationContainer`
- `createBottomTabNavigator`
- `Tab.Navigator`
- `Tab.Screen`

Tabs principales:

- `Home`
- `Search`
- `Create`
- `Activity`
- `Profile`

No se agregó Stack Navigator porque el proyecto no tenía instalada una dependencia de Stack. Para evitar instalar dependencias nuevas, los detalles de post se resolvieron con un `Modal` de React Native.

## Screens creadas

### `HomeView`

Muestra:

- Header superior.
- Stories horizontales.
- Feed de publicaciones.
- Modal de detalle al tocar un post.
- Pull to refresh.

### `SearchView`

Muestra:

- Buscador de usuarios.
- Resultados filtrados.
- Grilla estilo Explore.

### `CreatePostView`

Muestra una pantalla visual para crear post. No publica realmente porque el backend original no incluía creación real de posts.

### `ActivityView`

Muestra notificaciones falsas basadas en los usuarios del proyecto original.

### `ProfileView`

Muestra:

- Header de perfil.
- Estadísticas.
- Tabs de posts y guardados.
- Grilla de posts.
- Modal de detalle al tocar una publicación.

## Componentes creados o reutilizados

Se reutilizó la lógica conceptual del proyecto original, pero los componentes fueron adaptados a React Native.

Ejemplos:

- `Header` web fue adaptado a `AppHeader`.
- `Story` y `Stories` fueron adaptados a `StoryCircle` y `StoriesList`.
- `PostActions` fue adaptado a React Native.
- `ProfileCard` fue adaptado a `ProfileHeader`.
- `PostModal` fue adaptado a `PostDetailModal` usando `Modal`.

## Hooks y funciones reutilizadas

Se reutilizó:

- `currentUser`
- `fakeUsers`
- `fakeCaptions`
- `fakeComments`
- `formatCount`

Se crearon hooks nuevos:

- `usePosts`: carga posts y maneja likes.
- `useStories`: carga stories.

## Integración con API

La versión original usaba `axios`, pero el `package.json` no incluía `axios` como dependencia. Para no instalar nada nuevo, se usó `fetch`, que ya está disponible en React Native.

API usada:

- `https://api.thecatapi.com/v1/images/search`

Archivos relevantes:

- `src/api/client.js`
- `src/api/posts.api.js`
- `src/api/stories.api.js`

## Diseño responsive

Se usaron porcentajes en anchos principales:

- Contenedores principales con `width: "92%"`.
- Imágenes y cards con `width: "100%"`.
- Grillas con anchos relativos.

También se usaron valores fijos donde eran necesarios, por ejemplo:

- Alto de imágenes del feed.
- Tamaño de avatares.
- Altura de tab bar.

Estos valores fijos se usan porque en mobile conviene controlar visualmente alturas, avatares e íconos para que la UI no se deforme.

## Diferencias entre la versión React y React Native

La versión React web usaba:

- `div`
- `section`
- `button`
- `input`
- `img`
- CSS externo
- hover
- sidebar fija

La versión React Native usa:

- `View`
- `Text`
- `Image`
- `TextInput`
- `Pressable`
- `FlatList`
- `ScrollView`
- `Modal`
- `StyleSheet.create()` local en cada archivo
- tabs inferiores en lugar de sidebar

## Decisiones importantes

- Se mantuvieron los datos falsos del proyecto original.
- Se reemplazó `axios` por `fetch` para no instalar dependencias.
- Se implementaron tabs inferiores porque en mobile tiene más sentido que la sidebar de escritorio.
- Se mantuvo el detalle de post como modal para no instalar Stack Navigator.
- Se dejaron los archivos web anteriores en el proyecto, pero la app principal ahora entra por `src/App.js` y usa la versión React Native.

## Qué NO se implementó

No se implementó:

- Login real.
- Registro real.
- Subida real de imágenes.
- Comentarios reales.
- Persistencia de likes en backend.
- Follow/unfollow real.
- Mensajes directos reales.
- Stack Navigator, porque no estaba instalada la dependencia correspondiente.
- Expo Router, porque el proyecto no estaba configurado con estructura `app/`.

## Pendientes o puntos a revisar

- Si querés Stack Navigator real para detalles, habría que instalar `@react-navigation/native-stack`.
- Si querés Expo Router, habría que modificar la estructura del proyecto y la configuración.
- Si tenés backend propio, se pueden reemplazar los endpoints de The Cat API por tus endpoints reales.
- Se puede mejorar el diseño visual según una captura o Figma específico.

## Cómo ejecutar en Expo

Desde la carpeta del proyecto:

```bash
npm install
```

Después:

```bash
npx expo start
```

Para abrir en iPhone con Expo Go:

1. Abrí Expo Go.
2. Escaneá el QR.
3. Asegurate de que la PC y el iPhone estén en la misma red WiFi si usás LAN.

Para limpiar caché:

```bash
npx expo start --clear
```

Para usar otro puerto:

```bash
npx expo start --port 8082
```

## Resumen final

Se migró el clon de Instagram de React web a una app móvil funcional con React Native y Expo. La app usa tabs, componentes reutilizables, hooks, API con `fetch`, diseño mobile responsive y estructura organizada en `src/components`, `src/views`, `src/api`, `src/hooks` y `src/navigation`.
