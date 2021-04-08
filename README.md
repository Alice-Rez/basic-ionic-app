# Basic Ionic App

Basic app created using Angular, Typescript and Ionic (UI Components + capacitor for creating native ios and Android projects).

App has login page, basic user dashboard and search page to search through cities.

For successful login, user has to enter name and password (which corresponds now to reversed name). The login button is active only when both name and password are entered. If the combination of password and name is wrong, the screen background turns red.

On the Dashboard page, user's name is displayed, a photo can be added in future. The footer of this page contains fixed toolbar with navigation (logout and go to search), which stays in place independent on page scrolling.

On the search page, the list of the US cities is displayed. When typing in the searchbar, the cities are filtered according to the search term (i.e. only the cities containing the search term are displayed). After clearing searchbar, all cities are displayed again.

## Implementation details

Angular services (user and auth) are used for sharing data between individual pages.

User object, that is stored in the user service, has its own model defining its structure. Therefore, it can be easily changed (another properties can be added) in future without the necessity to go through the whole code (since the only places requiring changes are the user model and user service).

Routes for dashboard and search pages are protected using Authentication guard - a user can not reach them without successful login.

Cities for the list in search page are dynamically displayed from an array. In future, it would be possible to easily add a request to some API to get for example cities in user's current state...

Native projects for ios and Android were created but not deployed.

**Used technologies:** Angular, Typescript, Ionic, SASS, HTML

<img align="center" src="./preview.png" width="100%">
