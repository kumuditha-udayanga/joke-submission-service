# Submission Microservice

## Getting Started

Node version: v20.15.1

#### Configuration

1. Setup environment variables , Rename `example.env` to `.env`

2. Next set values to the environment variables.

   Note
   - Create a free cluster and user for the cluster on MongoDB atlas
   - Create a collection
   - Get the connection URI by going to connect option in clusters and selecting drivers option.
   - Copy and paste URI in .env file, add your user credentials and collection name

3. Install dependencies

```bash
npm install
```

5. Then, run the development server:

```bash
npm start
```