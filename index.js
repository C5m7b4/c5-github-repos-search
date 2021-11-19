const axios = require("axios");

console.log("getting git repos");

const getRepos = async ({
  username = "C5m7b4",
  page = 1,
  per_page = 30,
} = {}) => {
  try {
    const repos = await axios.get(
      `https://api.github.com/users/${username}/repos?page=${page}&per_page=${per_page}&sort=updated`
    );

    return repos.data
      .map((repo) => {
        return {
          name: repo.name,
          url: repo.html_url,
          description: repo.description,
          stars: repo.stargazers_count,
        };
      })
      .sort((first, second) => second.start - first.start);
  } catch (err) {
    console.log(err);
    return [];
  }
};

module.exports = { getRepos };
// getRepos().then((repositories) => console.log(repositories));
