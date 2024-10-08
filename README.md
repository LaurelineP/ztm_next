# Next
![My Skills](https://skillicons.dev/icons?i=nextjs,react,graphql,vercel,js)  

Meta framework on top of React  
*Meta framework* is a framework on top of a library / framework:  
providing a folder structure and embed tools ready to use  
( Ex: other libs - React Router, etc ...)  

## Resources:
- [Official NextJS Documentation](https://nextjs.org/)
- [Next handbook companion](https://innate-noodle-e82.notion.site/Next-js-Course-Handbook-d1ed7f83a8044ada8c933a11f7b70dc3)


<br>

## Good to know
- must have a [vercel](https://vercel.com/signup) account 

<details>
	<summary>📜 Overview</summary>
	<ul>
		<li>Next & motivation > fundamentals</li>
		<li>React</li>
		<li>Project 1 : Coffee Connoisseur</li>
	  		<ul>
				<li>CSS module</li>
				<li>Fast refresh</li>
				<li>Routing</li>
				<li>Styling</li>
			</ul>
   		<li>Beyond fundamentals</li>
     			<ul>
				<li>Hydration</li>
				<li>SEO: search engine optimization</li>
				<li>SSG: static site generation</li>
				<li>SSR: server side rendering</li>
				<li>SSR: server side rendering</li>
				<li>Incremental site generation</li>
				<li>Differences with client side rendering</li>
			</ul>
   		<li>Serverless function</li>
     			<ul>
				<li>why and when to use</li>
				<li>retrieve data with serverless functions</li>
			</ul>
   		<li>AirTable</li>
     			<ul>
				<li>Database storage</li>
				<li>retrieve data with serverless functions</li>
			</ul>
      		<li>SWR: react hook for build</li>
      		<li>Big Project: Netflix Clone</li>
			<ul>
				<li>using framer</li>
				<li>using motion</li>
				<li>passwordless login</li>
				<li>Incremental Site generation</li>
				<li>Asura & GraphQL: auth</li>
				<li>off flow architecture</li>
				<li>deployment w/ vercel</li>
				<li>performances</li>
			</ul>
</details>

<br>

[!NOTE]
Divided into 2 paths:  
Notes: on searching info in the official documentation:
make sure to either select "app" for "app router" or "page" for "page router"
- app router *(after next 13)* 
- page router *(before next 13)*

|   | App router <br> (next > v13) | Page router <br> (next < v13)  |
|---|---|---|
| Backend |
|  | **Server components** <br> components rendered by server / by default are server component  |   |
|  | **New metaData API** <br> adds metadata for SEO and site sharability  |   |
|  | **Caching Strategy** <br> improving perf, rendering work, data requests  |   |
| Frontend |
|  | **Client components** <br> improving perf, rendering work, data requests  |   |
|  | **Data fetching methods** <br> how to fetch, cache & revalidate data  |   |
|  | **Special files** <br> Loading, Error, Page, etc..  |   |



### 🔹 Metadata example
```ts
	export const metadata: Metadata = {
		title: <app-name>,
		description: <app-description>,
		metadataBase: getDomain(),
		alternates: [
			canonical: '/'
		]
	}
```

### 🔹 Fetch x data example
```tsx
	export default async function Page() {
		// similar to getStaticProps - caches response
		const staticData = await fetch(
			'https://...',
			{ cache: 'force-cache'}
		);

		// similar to getServerSideProps - do not caches response
		const dynamicData = await fetch(
			'https://...',
			{ cache: 'no-store'}
		);

		/** similar to getStaticProps w/ revalidate option 
		 * - cached with lifetime of 10 seconds
		 * */
		const revalidateData = await fetch(
			'https://...',
			{ next: { revalidate: 10 } }
		)

		return <div> { /* ... */} </div>
	}
```

### 🔹 Caching
| Mechanism  | What  | Where | Purpose | Duration |
|---|---|---|---|---|
| Req. Memo  | returns functions values  | server  | re-use data in react component tree  | Pre-Req. Lifecycle |
| Data Cache  | data   | server  | store data across user req & deployments  | persistent (can be revalidated) |
| Full route cache  | HTML & RSC payload  | server | reduce rendering cost & improve perf.  | persistent (can be revalidated) |
| Router Cache  | RSC  | client  | Reduce server req. on nav.  | user session or time-based  |

### 🔹 Special files
- `layout.js`: used to create shared User Interfaces for a segment and its children
- `page.js`: creates a unique UI for a route and makes it available publicly
- `loading.js`: Loading UI for a segment and its children
- `not-found.js`: Not found UI for a segment and its children 
- `error.js`: Error UI for a segment and its children 


### 🔹 Server and Client Side Components

🔸 RSC: React Server Components
To render components using data to fetch on the server side for instance,  
the changing piece of UI but not interactive.
- should not contain states ( aka changing data on interactions )

🔸 Components ( Client sides )
- components having states
- Must declare on top of the file the following directive `'use client'`


## Next Benefits
### 🔹 Different rendering techniques
- Static Site Generation: build time generation
e.g.: `Products` - our static coffee store
Pre-built on the server > the server pass the content to client > 
- Server Side Generation - generate page on the server
e.g.: Dynamic news feeds, Netflix 
Generate site on the server if we want fresh data on page refresh
- Incremental Site Regeneration - generate page on build in advance + server
e.g.: Static + Server 
Best of both words

### 🔹 Performance
- code splitting:  
dividing code into smaller chunks in order  
to load only the chunks needed on a page
- minifying files: shrink code content  
(white spaces, special caracters,...)
- image optimizations:  
Next provides few components to optimize images:
Image component for instance - serving the image  
based on the browser / device size 
- pre-fetching assets:  
go ahead to pre-fetch assets for instance when scrolling down
### 🔹 Next Image Component & prefetching assets
Based on the viewport & the Image component used on the code,  
the server will fetch the assets in an optimized picture size
The pre-fetching optimizes the performences as the
client, acknowledging the interaction and the viewport,
will get the content only when needed ( prevent from  
loading everything at once even if the user did not scroll )

### 🔹 File based routing & SEO
- File base routing: is about having a specific structure
on a project that will coincide with how Next JS works.  
Each folder has a specific meaning and file within it too.
Ex:
	```sh
	|___ pages/ # corresponds to all route pages served
		|____ api/ # <domain>/api
			|____ welcome.js # <domain>/api/welcome
		|____ index.js # <domain>/ page
	```

- SEO: Search Engine Optimisation
Is about referencing your site / app
	```
		> Deployed app 
		> bot crawling
		> get info about the side
		> rank your page for the browser search engine
		> displays/lists your site / app on the browser search engine
	```
### 🔹 Serverless Functions
Can run your node code at the same place of your react code
Ex: fetching with api keys 
- useful when fetching on component at the same route: only calling the task when needed ( after, it shuts down)  
Creating the serverless function under   `pages/api/<file>.js`

### 🔹 NextJS vs CRA
Why Next is popular: 
- CRA needs to add a lot of packages and learns them
	- ex: configure a server site rendering

CRA for:
- small app

NextJS for:
- more advanced ( SSR, SSG, or others )
- performances



## App Router and Project
### 🔹 Installation
- `npx create-next-app@latest`: execute a command to  
create a next app.  
It will prompt questions for your project config customizations

### 🔹 Exploring
- node_modules: packages dependencies
- tailwind.config
- middleware.ts - middle man between front + requests - triggered on req.

- next.config.ts : used by next: in build phases and for the server - not  
included in the frontend
Not included in the build

**Routing mechanisms**
- app router - `app` dir
Each time we create a file in the app router, is by default a server component
Thinking first about the logic server side then the client side

- page router - `pages` dir
Each time we create a file under this folder it gets a route 

**In the folder app**
File or folder with `*` are mandatory named as displayed
- `app/<folder_route>` the folder creates a route. Ex: `app/page.tsx` 
- `page.tsx`* is the page for a route
- `layout.tsx`*: has some html - this is normal as this is the layout
Shared by multiple pages
- `api/route.ts`* - 


### 🔹 Metadata
SEO and Metadata - Next is that much known because of SEO.
NextJS provides Metadata ( `meta`, `link` tags in the HTML `head` element)
to improve SEO
Metadata are ways to provides info about the web app
- tab title
- web app description
- etc...

Metadata - 2 ways to handle this with Next 
By default - it is generally set at `app/layout.ts` 
- statically 
- dynamically
```js
// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
import { Metadata } from 'next'
 
// either Static metadata
export const metadata: Metadata = {
  title: '...',
}
 
// or Dynamic metadata
export async function generateMetadata({ params }) {
  return {
    title: '...',
  }
}
```

### 🔹 TailwindCSS
Next proposes TailwindCSS out of the box
- [Crash course](https://www.youtube.com/watch?v=coMJ4R8GzEA)

Benefices
- inline styling using tailwindcss
- no need to create stylesheet
- no need to spend time on the class namings
- flexible customization
- dark mode class
- consistency
- palette color customization
- mobile first



### Code as you explore
- Removed `app/page.tsx`'s inner main content
- Customizing it:
	- h1: App name
- `global.css`:
	- removed all css but import
	- added the css from the assignment resource
	- `@apply` directive - allows to use tailwind defined curstomisation 
- `tailwindcss.config.ts`
	- `theme.extend.colors`
		```js
			// ...
			theme: {
				extend: {
					colors: {
						<color-name>: <color-value>
					}
				}
			},
		```
	- `backgroundImage`
	```js
	//...
	theme: {
		extend: {
			backgroundImage: {
				<name-of-bg-img>: url(<static-path>)
			}
		}
	},
	```
- Next fonts - fonts and optimization
Generally - On slow wifi - the font download on the page once it is ready and this could take time.
Issue with that is that the vital metrics need  
it to make its visual stability analyses   
and how the quality of the website is

Next will automatically optimize the fonts,  
as we have the ability to store it from the external resources  and host it on the next server  
Which leads to zero layout shift because of the
underlying CSS size adjust they are using
Next has something for google font.
Called on next doc "variable font
```ts
// Generally on layout.ts
// import { <fontname> } from 'next/font/google'
import { Roboto } from "next/font/google";
import "./globals.css";

const inter = Roboto({
  weight: ["300", "500", "700"],
  subsets: ["latin"]
});
```
```css
/* global.css */

h1 {
  @apply text-4xl font-bold text-white md:text-5xl lg:text-7xl
}

```


- Using Multiple Fonts
We can configured special css variables  
by extending the `tailwind.config.ts`
```ts
// ...
theme: {
	// ...
	theme: {
		extend: {
			fontFamily: {
				// <font-name>: <css-variable-rule>
				roboto: 'var(--font-roboto)'
				rolato: 'var(--font-lato)'
			}
		}
	},
}
```


### What are server components
- Server Component: components fetched and rendered on the server
	- similar to react components but handled by the server rather than 
	the client ( can access DB queries for instance )
- Client components: Fetched and rendered on and by the browser ( DOM, browser API ) - alike components we've always used when doing react.


Benefices:
	- less weight on the bundle - as the server handled the
	component with data

Example - react client components
														_________________________
	_________						   Hydrate	data	|						|
	|		|							_____________ 	|						|
	|		|  	fetch db data			|			|	| *Client side bundle*	|
	|		| <---------------------	| 	Client  |	|						|
	|	DB	| --------------------->   	|___________|	|	_________________	|
	|		|	Return JSON data 						|	|				|	|
	|_______|											|	|	  Card		|	|
														|	|				|	|
														|	|_______________|	|
														| 	Text____________	|
														|						|
														|_______________________|




Example - react server components
_________________________		
|						|	_________
|						|	|		|	on req., fetch, render		_____________
| *Server Components*	|	|		|   components					|			|
|						|	|		| <------------------------		| 	Client  |
|	_________________	|	|	DB	| ------------------------>   	|___________|
|	|				|	|	|		|	Return stream
|	|	  Card		|	|	|_______|
|	|				|	|		
|	|_______________|	|
| 	Text____________	|
|						|
|_______________________|

### Why do we need server components?
Typical app: ( which is hydration here)
	- a server - a client consuming the browser
	- the browser fetches and rerender in page
	- ask server to get data and render to the page 
	---> why not getting data and rendering from server?
	-----> this is why server rendering was done.
			- implies to review the architecture
			- implies some data will never be re-rendered
			--> some React API now are incompatible with
				render component because of the previous points
				( ex: cannot use useState, useCallback in components
				parent rendering a server side component, forms with
				state - Server side component cannot be re-rendered)
				Effects can only rendered on the client has rendered


### When to User Server vs. Client Components?
Server components
	- benefits:
		- rendered by the server = not included in client bundle = < weight
		- automatic code splitting
	- cons: 
		- parent components should not depends on state changes
		- cannot be re-rendered
	--> See https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns