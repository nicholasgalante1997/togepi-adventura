# Togepi Adventura

![Togepi](https://static.pokemonpets.com/images/monsters-images-800-800/175-Togepi.webp)  

## Package Details  

--------------------------------
| pkg name | language | framework | pokemon-sponsor |

| togepi-adventura | typescript | express/react/"react-dom/server" | togepi |

--------------------------------

### Core  

#### Functionality

Web server to serve React pages to end-users. Only point of entry for end users.  

#### Tech  

Makes use of ReactDOM/server to render React component pages to markup on the server, it then bundles static dehydrated copies of the page to be fetched when the page is delivered to the browser to hydrate the pre-rendered markup. Styling selections are a combination of Styled-Components and a global CSS sheet. Webpack is used to bundle both client and server applications, although both maintain different build configurations, these can be found in `build-config`. Storybook is used for component development and scaffolding.  
