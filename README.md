This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

then run the mock data server

```bash
npm run server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Concepts

- The src/app/user-hydration component injects user data into the global client state at the root of the application. However, this data does not require the pages to be entirely client-side. The server component structure of the pages is partially preserved, ensuring application performance. This implementation aims to make it easier to retrieve data from the client to be sent in the ticket.

- Design system concepts applied to the components in the src/components folder, that is, they are application agnostic components and can be used in different contexts

- Each store on the website has a static page generated, ensuring better loading performance.

- The Material UI and AntDesign styling libraries are not used as they compromise the application's performance, especially when it comes to the use of Server Components.

- Native CSS styling was preferably used to ensure less coupling to a library, as it has greater CSS control and is ultimately independent of third-party libs, which ensures greater flexibility in improving performance.
