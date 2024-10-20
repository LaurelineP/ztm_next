# Next
![My Skills](https://skillicons.dev/icons?i=nextjs,react,graphql,vercel,js)  

Meta framework on top of React  
*Meta framework* is a framework on top of a library / framework:  
providing a folder structure and embed tools ready to use  
( Ex: other libs - React Router, etc ...)  

## Resources:
- [Official NextJS Documentation](https://nextjs.org/)
- [Teacher's Next handbook companion](https://innate-noodle-e82.notion.site/Next-js-Course-Handbook-d1ed7f83a8044ada8c933a11f7b70dc3)


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


### 🔹 Coffee Connoisseurs aka Coffee Placed

### 🔹 Global CSS and Tailwind Config
- `global.css` - should copy the course repo same file's content into the file
	- tailwind layer base `@tailwind base` x `@layer base`:
	Injects any based style into tailwind base style - referring to styling,
	we may need to update `tailwind.config.ts`
	```css
	h1 {
		/* applies style for web (lg) and mobile (text-4xl) and medium screens (md:text-5xl) */
		@apply text-4xl font-bold text-white md:text-5xl lg:text-7xl;
	}
	```
	- tailwind layer base `@tailwind components`
	- tailwind layer base `@tailwind utilities`

### 🔹 Fonts in NextJs
- Important to optimize loaded fonts as in general:
	- fonts are downloaded by the client
	but on low internet -> it could change
	how the web app is displayed
		- uses default font
		- then download the fonts one by one ( weight on client side added)
		- then it is applied to the page ( being a Google CLS pb)
	- Google CLS measures larger burst of layout shift scored for 
	unexpected layout shift that occurs during the entire lifespan
	of a page ( anytime an element changes its position 
	from rendered frame )
	> important for measuring stability of a website / web app
	and the quality of the app
- Using `next/fonts`: 
	- no need to download on app ( = less weight )
	- automatically optimize the fonts ( including custom ones )
	& remove external network req. to improve
	privacy and performance
	- Leading to avoid layer shift

**Google Fonts**
- import fonts from google
- specify font behaviour
- use variables ( behave as x same font family with a special style )
	- refers to regular font has variable files for bold / thin / italic
	- help applies different file variation without downloading all fonts
	```tsx
	// app.layout.tsx
	// import { <FONT> } from 'next/fonts/google'
	import { Roboto } from 'next/fonts/google';

	// associate to a variable to use + defining it
	const roboto = Roboto({
		weight: "300",
		subsets: ["latin"],
		variable: '--roboto'
	});

	// rendered body example - using font
	// ...
	return (
		<html lang='en'>
			<body className={roboto.className}> { children }</body>
		</html>
	)
	```
- multiple fonts:
Application / website often have different font usage - with next/fonts we need to specify a variable property to the constant
to identify the font amongst the other
	```tsx
	const roboto = Roboto({
		weight: "300",
		subsets: ["latin"],
		variable: '--roboto'
	});
	const comfortaa = Comfortaa( {
		weight: "300",
		subsets: ["latin"],
		variable: '--comfortaa'
	})

	const fontClassNames = `${comfortaa.variable} ${roboto.variable}`;
	return (
		<html lang="en" className = {fontClassNames}>
			<body>{children}</body>
		</html>
	);

	```

	- applying default font - in `tailwind.config.ts`
	```ts
	theme.extend.fontFamily: {
		comfortaa: ['var(--comfortaa)']
	}
	```
- Using Local Fonts / original font to import in public folder:
If needed: A bit of cleaning is made to get back to have one font used ( comfortaa )
	- removed tailwind.config fontFamily
	- removed app/layout.tsx extra imports and variables property
	- removed global h1 font-default

	```ts
		import { localFont } from 'next/fonts/local'

		// one font
		const myFont = localFont({
			src: '<local-source>',
			display: 'swap'
		})

		// multiple local fonts
		const myFont = localFont([{
			src: '<local-source>',
			display: 'swap'
		}])

		// ...
		<p className = {myFont.className}>
	```

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



## App Router / Server Components and Clients Components
### 🔹 What are server components
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

### 🔹 Why do we need server components?
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


### 🔹 When to User Server vs. Client Components?
Server components
	- benefits:
		- rendered by the server = not included in client bundle = < weight
		- automatic code splitting
	- cons: 
		- parent components should not depends on state changes
		- cannot be re-rendered
	--> See https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns


### Walkthrough of the Blog App Archi
```txt
These are the possible page view - the list of articles / the article itself
- Date fns npm module to format date ( server ) > server component
- Click in list > blog/id
	______________/blog_______________  		______________/blog/id_______________
	|	__CARDLIST_________________	  |			|									|
	|	|	__CARD_____________	  |	  |			|			Blog post title			|
	|	|	| Blog post title  |  |   | 		|									|
	|	|	| formatted date   |  |	  | 		|			Desc./ abstract			|
	|	|	|__________________|  |   | 		|									|
	|	|	 				      |   | 		|									|
		|	 				      |	  |			|									|
	|	|	__CARD_____________	  |	  |			|									|
	|	|	| Blog post title  |  |   | 		|									|
	|	|	| formatted date   |  |	  | 		|									|
	|	|	|__________________|  |   | 		|									|
	|	|	 				      |   |			|									|
	|	|_________________________|   |			|___________________________________|
	|_________________________________|			|___________________________________|
```

## Exercise 1: transform a client component to a server component
Context: this repo to clone - https://stackblitz.com/edit/stackblitz-starters-ya4sy7?file=components%2Fcard.tsx
Date is using a package installed - a quite heavy one - that could  
be computed from the server side.
Objectives: 
- transform the component using the date in a server component
- apply best practices to avoid the anti-pattern of having a
component server instantiated in a client component
https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components

Currently:
- rendered by the client because, even though the file ( by the absence of the file instruction "use client"), this is considered as a client component == Anti pattern
Viewable for unchanged code, ran as dev, in browser dev tools source - the component date.tsx 
is in the app loaded on the browser ( see folder _N_E/ = folder related to sourcemap ( compoilation mapped as JS code - allowing developers to debug))
Reminder: 
- Any time a root compomemt is marked as client component.
 all the subtree ( child components ) will be considered as client component.
 Even though it is supposed to be a server component

 Objective - in the component client having the server component:
 - we could move it outside in order to pass it as children to a component
 - to do so we also need to adjust the parent that will receive the component
 as a child node 



## Exercise 2: transform a client component to a server component
Context: this repo to use - https://stackblitz.com/edit/stackblitz-starters-ya4sy7?file=components%2Fcard.tsx
Personal solution:
	Note:
		- tailwind.config.ts should have a `darkMode`
	- First attempts ( failed )
		- as shown in the Next documentation: I've created 

## Banner component
The banner will have a button ( hence a event listener click )
--> will be a client component

# Routing with next / Next App Router
## Routing fundamentals
Next routes, as other metadata framework, are relying on the file system organization
Routes are made by creating either
- [ pages router - v < Next 13 ]: a `./pages` folder (root level )> the filenames would be considers as endpoints
- [ app router - v > Next 13 ]or by creating a folder under app 
	- which foldername would be the endpoint
	- must contain generic filename `page.tsx` to be consider as a page

Based on the organizations on root page,
Next will deduct page by precedence on the approach you take
( Has been tested ) not both

### Pros & Cons of these changes
- ( pros ) app routers ( built on top of server components ) allows:
	- gives more options:
		- sharing the layout
		- for nested routing
		- loading state
		- error handlings
		---> optimization embedded with that approach
- ( cons ) pages router:
	- current configuration and file pages moved to `./pages`
		- loads `./pages/index.tsx` but without background ( static image )
		- loads `./app/shops` correctly ( with all the styling and bg )
		- loads `./pages/plop.tsx` but without background ( static image )
		- TO NOTE: under that configuration, pages are expected to be 
		exported as `default`

## Routing terminology
- a tree: anything inside the app router 
- subtree: any tree inside a tree
- root: any folder being the parent of a tree
- leaf/leaves: a parent folder children ( folders nested within closest tree )

## Dynamic routing `[slug]`
In Next, relying of file system, dynamic routing are build 
by nested folders named between square brackets
- we could provide the same layout for those pages
- but we need to have dynamic data according to each item
Note: a slug is a unique routing segment ( usually represent an item )
Example:
```text
Observing the patterns
--> /<a-route-segment-name>/<slug>
	app/
	|
	|___ page.tsx
	|___ <a-route-segment-name>
		|___ page.tsx
		|___ [ slug ]
			|___ page.tsx

Use case with folder naming 
--> /shops/1
	app/
	|
	|___ page.tsx
	|___ shops
		|___ page.tsx
		|___ [ 1 ]
			|___ page.tsx
```
### Getting/Setting Dynamic route `[slug]`
- in the `<route-name>/[slug]/page.tsx` getting params
	```tsx
		export default function Page({ params }: { params : { slug: string }}){
			return <h1>Item: { params.slug }
		}
	```

## Catch All Routes `[...slug]`
Catches multiple part segments in URL.
It works like dynamic routing ( seen earlier ) but
this folder name has a spread operator
### Setting catch all routes
- `[...slug] folder: create a folder with a 
spread slug name between squared brackets

Use case: 
	- when after an item there are other route segments.
	- it avoids creating multiple nested folders to create a route
	- shares same template

## Differences between Dynamic `[slug]` and Catch All `[...slug]` routes
Dynamic Route
- when you use **one** URL segment

Catch All Route
- when you use **multiple** URL segment

## Routing Exercise
Resource: [Routing Exercise on StackBlitz](https://stackblitz.com/edit/routing-gods?file=README.md) ( Instructions in Readme)
Implementation(mine): https://stackblitz.com/edit/routing-gods-6lcnrx?file=README.md

Correction: https://stackblitz.com/edit/stackblitz-starters-h2uabj?file=README.md


## Link Component

Allows prefetching by default ( can be set to false )
Use Link component from next when navigating to app

- Link a non dynamic page
- Link a dynamic page

# App Router - SEO - Hydration - Different Rendering
## SEO ( Search Engine Optimization )


			_________________________________
			|								|
			|	When we google something	|
			|_______________________________|
			/			   |				\
___________/		  _____|______		 	 \___________
| Crawling |		  | Indexing |		  	  | Ranking	 |
|__________|		  |__________|		  	  |__________|
Finding what 		Once discovered,	  	Serves highly ranked page
pages exists 		Finds page contend	  	based on users location,
& discover pages	Google tried to 	  	lang. & device
					understand the page

					___________________
					|	Google DB 	  |
					|_________________|



A bot will:
- crawl about the research
- then try to index the page; try to understand the page
through the head of the DOM, checking the meta referenced
in order to index the page"
  - Meta: description and web title
  - semantic: right tag for right use
  - image should have alt description
- then ranking: Once search, the best quality and 
DOM head:

User behavior with SEO
- Scoring page: checking navigation : 
	- clicking through rate,
	- bounce rate: time to click on back link,
	- dwell time: user spent time

Bot will then rank the pages based on location, device, language.
SEO with Next is easy to handle

## Client Rendering vs. Server Rendering

- [Disney App (Create React App)](https://codesandbox.io/p/devbox/cra-disney-movies-2d6y64?file=%2Fsrc%2FApp.js)
- [A Next.js App Blog](https://kulkarniankita.com/blog)
- [Disney App (Next.js App)](https://codesandbox.io/p/devbox/next-js-disney-movies-rztc3r)

Observing how a web page is rendered:
- go browser dev tool 
- then check the `performance` tab
- press the record buttons ( circle left side of pannel ) ( which will re-render)
This tells your browser to check the rendering metrics for  
the website loading

Observation ( visual timeline )
- fist preview blank page
- then pictures loaded one by one 
--> It takes about a second to load the JS ( see bundle.js ending load)

In sources code > index file : we can run a command "cmd + P" to run a command : 
`Run > disable` which will disable the js 