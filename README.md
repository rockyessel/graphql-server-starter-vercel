# GraphQL Server Starter for Vercel

A minimalistic yet versatile GraphQL server starter designed to streamline the development of GraphQL-powered applications. This project is built with scalability and simplicity in mind, making it suitable for side hustles, educational purposes, or full-fledged production-grade applications.

## Key Features

### 1. **Dynamic GraphQL API**
   - Users have their own dynamic GraphQL endpoints at `/username/graphql`.
   - Each user endpoint is protected with **authorization**, ensuring privacy and security. Unauthorized access attempts are denied.

### 2. **Global GraphQL Endpoint**
   - Publicly accessible at `/graphql` without restrictions.
   - Ideal for shared resources or testing purposes.

### 3. **Dictionary Query Functionality**
   - Enables users to search for word meanings.
   - Utilizes web scraping techniques to fetch dictionary data.
   - Great for developers new to web scraping—learn foundational techniques from the codebase.

### 4. **Customizable GraphQL Queries**
   - The power of GraphQL allows users to:
     - Fetch only the fields they need.
     - Control how the data is displayed and accessed.
   - Supports resource queries like `users` and `posts`, demonstrating relational data handling.

---

## Getting Started

### Prerequisites
- **Node.js** (v16 or later)
- A **Vercel account** for deployment

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rockyessel/graphql-server-starter-vercel.git
   cd graphql-server-starter-vercel
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the environment variables:
   - Create a `.env` file in the project root.
   - Add the necessary variables:
     ```env
     SAMPLE='HelloWorld'
     JWT_SECRET="JWT_SECRET"
     ```

4. Run the server locally:
   ```bash
   npm run dev
   ```

5. Visit the endpoints:
   - Public endpoint: [http://localhost:4000/graphql](http://localhost:4000/graphql)
   - Dynamic user endpoint (example): [http://localhost:4000/emilys/graphql](http://localhost:4000/emilys/graphql)

---

## Deployment on Vercel

1. Fork or clone the repository.
2. Link the project to your Vercel account.
3. Add environment variables in the Vercel dashboard.
4. Deploy the project with one click from the dashboard.

---

## Example Queries

### Dictionary Query
Fetch the meaning of a word:
```graphql
query {
  dictionary(word: "example") {
    word
    meaning
  }
}
```

### User Query
Fetch user details and their posts:
```graphql
query {
  user(username: "emilys") {
    name
    email
    posts {
      title
      content
    }
  }
}
```

### Post Query
Fetch all posts:
```graphql
query {
  posts {
    title
    author {
      username
      email
    }
  }
}
```

---

## Security and Authorization

- Public endpoints (`/graphql`) are accessible without restrictions.
- Private endpoints (`/username/graphql`) require a valid authorization token.
- Unauthorized attempts to access protected resources are denied with an appropriate error message.

---

## Learnings and Highlights

1. **Web Scraping Techniques:**
   - Explore the dictionary query feature to understand scraping fundamentals.

2. **Dynamic GraphQL Endpoints:**
   - Learn how to set up and manage user-specific paths dynamically.

3. **Authorization in GraphQL:**
   - Implement secure access control to sensitive resources.

---

## Contributing

Contributions are welcome! If you have ideas for improvements or additional features, feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Special thanks to [rockyessel](https://github.com/rockyessel) for this incredible starter project.
- Inspired by the need for scalable and secure GraphQL applications.
