# c5-github-repos-search

Get a list of Github repositories of specified username sorted by numbers of stars in descending order and last updated time

## Installation

```js
# using npm
npm install c5-github-repos-search

# using yarn
yarn add c5-github-repos-search
```

## Usage

```js
# using require
const { getRepos } = require('c5-github-repos-search');

# using import
import { getRepos } from 'c5-github-repos-search';
```

## Example

### Using promises:

```js
getRepos({
  username: "c5m7b4", // provide GitHub username here
  page: 1, // optional property: default value is 1
  per_page: 50, // optional property: default value is 30
}).then((repositories) => console.log(repositories));
```

### Using async/await:

```js
const getRepositories = async function () {
  const repositories = await getRepos({
    username: "c5m7b4", // provide GitHub username here
    page: 1, // optional property: default value is 1
    per_page: 50, // optional property: default value is 30
  });
  console.log(repositories);
};

getRepositories();
```
