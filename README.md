# graphql-server-starter-vercel

This is a starter template for building a GraphQL server that can be easily deployed on Vercel. This template provides a foundation for developing your GraphQL API with a focus on simplicity and scalability.

## ⚠️ Status: In Progress

This project is currently under development. Please check back for updates! Last update: 28/10/2024 - 8:48 GMT

## Features

- Easy setup for a GraphQL server
- Built with Express and Apollo Server
- Support for CORS and logging using Morgan
- Middleware for handling GraphQL requests
- Static file serving
- Ready for deployment on Vercel

## Getting Started

To get started with your own GraphQL server, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rockyessel/graphql-server-starter-vercel.git
   ```

2. Navigate to the project directory:

   ```bash
   cd graphql-server-starter-vercel
   ```

3. Install the dependencies:

   ```bash
   yarn install
   ```

### Running the Server

To start the server locally, run:

```bash
yarn run dev
```

The server will run on `http://localhost:8000/graphql` by default.

### Deploying to Vercel

1. Push your code to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and create a new project.
3. Import your GitHub repository and follow the instructions to deploy.

## Usage

Once your server is up and running, you can access the GraphQL API at `http://localhost:8000/graphql`. You can use tools like [Postman](https://www.postman.com/) or [GraphQL Playground](https://github.com/graphql/graphql-playground) to test your API.

## Scripts

This project includes the following scripts:

```json
"scripts": {
  "build": "rimraf ./dest && tsc",
  "start": "node dest/src/server.js",
  "lint": "eslint . --ext .ts",
  "dev": "npx nodemon",
  "start:dev": "rimraf ./dest && tsc && npm start",
  "postinstall": "patch-package",
  "deploy": "npm run build && vercel --prod && rimraf ./dest"
}
```

- **`test`**: Placeholder for tests.
- **`build`**: Cleans the destination folder and compiles TypeScript files.
- **`start`**: Starts the compiled server.
- **`lint`**: Runs ESLint on the project files.
- **`dev`**: Starts the server in development mode with Nodemon.
- **`start:dev`**: Cleans the destination folder, compiles TypeScript files, and starts the server.
- **`postinstall`**: Runs after npm install to patch any packages.
- **`deploy`**: Builds the project, deploys it to Vercel, and cleans up the destination folder.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
