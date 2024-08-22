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