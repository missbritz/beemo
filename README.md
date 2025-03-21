# beemo
[![CI Prod](https://github.com/missbritz/beemo/actions/workflows/publish.yml/badge.svg)](https://github.com/missbritz/beemo/actions/workflows/publish.yml)
Built with Next.js, tailwindCss and is consuming GraphQL from a self-hosted Strapi CMS. Check this out up and running at [https://britzoblan.com](https://britzoblan.com)


## Getting Started
### 1.  Starting the Mock Server
To start the graphQL mock server, run the following command.  This will start the mock server at `Port:4000`.  You can test the mock server through your browser or postman through `http://localhost:4000`.  Replace `yarn` with `npm`, `bun`, `pnpm`
```bash
yarn start-server
```
### 2. Prepare the environment
Run the command below to prepare the environment
```bash
yarn prepare-env
```
### 3. Running the Development Server
Start the development server:
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.