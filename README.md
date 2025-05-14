This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run `npm install` to install the project dependencies

Next, run `npm run server` to start the database server

Finally, in a different terminal, run `npm run dev` to start the development server

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

The proposed challenge was not completed in its entirety, but I hope it will enable the analysis of concepts implemented here.

## Concepts

- The src/app/user-hydration component injects user data into the global client state at the root of the application. However, this data does not require the pages to be entirely client-side. The server component structure of the pages is partially preserved, ensuring application performance. This implementation aims to make it easier to retrieve data from the client to be sent in the ticket.

- Design system concepts applied to the components in the src/components folder, that is, they are application agnostic components and can be used in different contexts

- Each store on the site has a static page generated, ensuring better loading performance. This implementation can be extended to the product page.

- The Material UI and AntDesign styling libraries are not used as they compromise the application's performance, especially when it comes to the use of Server Components.

- Native CSS styling was preferably used to ensure less coupling to a library, as it has greater CSS control and is ultimately independent of third-party libs, which ensures greater flexibility in improving performance.

- The services (src/services) aim to abstract the use of JavaScript APIs and facilitate future changes, if necessary.

- The use of the fetch API was the appropriate choice considering the performance optimizations it already has.

- Considering the use of server components, the use of hooks was avoided as much as possible. The hooks created were considered quite essential for the application.

- the interfaces (src/interfaces) are the mapping of data coming from the API and seek to bring the backend closer to the front, providing predictability in implementations that depend on data from external sources

- The globals.css has color variables exactly as they are named in Figma and are remapped to generic color names, specifically adapting to the concept of design tokens to facilitate future maintenance, in addition to maintaining a direct connection with the colors of the screen prototypes in Figma. In order to maintain synchronization between the colors of the Figma prototype and the next application, I recommend using the Figma Tokens Studio plugin so that all style guide variables are injected directly into the application repository.

- the SVG icons became a react component, considering that it can be exported in an icon library separate from the main project and to allow reusability
