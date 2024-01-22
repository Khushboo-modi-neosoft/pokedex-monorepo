# Pokedex - A Monorepo Project with Lerna

Pokedex is a monorepo application handled with the help of Lerna. It includes packages bundled using rollup, resulting in a dist file, containing the bundle in `cjs` and `esm` format and a project codebases.

## Packages
  This monorepo is structured with the following 2 packages:
  
  ### - components 
  It contains reusable React components ie DataGrid and PokemonCard, which can be reused in different projects.

  ### - utils 
  It contains common utility functions and helpers that are used by the `pokedex` project and can be reused in different projects.
    
## Project
  It contains one project codebases
  
 ### - pokedex 
 This is the main application which is built using `Next.js` along with `typescript`. It uses the `components` and `utils` from the respective packages.


## Getting Started

Follow the below instructions to set up and run the `pokedex-monorepo` project on your local machine.

### Prerequisites

- [NVM](https://github.com/coreybutler/nvm-windows#readmes) installed
- [Node.js](https://nodejs.org/en/) (v18) installed on your machine.
- Yarn installed.
- Typescript

### Installation

1. To use the specified node version download NVM and switch with the help of the following command:

```bash
# Downloads the node version
nvm install

#to use the specified node version
nvm use
```

2. Install the dependencies for all packages and the main project:

```bash
# Using npm
npm run setup

# Using yarn
yarn setup
```

### Running the Application

1. Run the development server:

```bash
# Runs the Appliction in developmemnt mode
yarn dev
```

2. Run the application in production server:

```bash
# builds the applition before running in production
yarn build

# production mode
yarn production
```

3. Run the appliction in docker:

```bash
# Image Creation
docker build . -t < IMAGE_TAG_NAME >

# To run the image in a container
docker run -d --name < CONTAINER_NAME > -p 3000:3000 < IMAGE_TAG_NAME >

# To stop the running container
docker stop < CONTAINER_NAME >
```

The Pokedex application will now be accessible at `http://localhost:3000` using any one of the above methods.

### Test
To run test the applcation we have used `jest` along with `@testing-library/react` and `@testing-library/jest-dom`
  
```bash
# runs the test cases present in the appliction
 yarn test
```

### Checking Storybook

```bash
# Runs the storybook inside components file
yarn storybook
```
the Storybook server should be up and running at `http://localhost:3001`.
