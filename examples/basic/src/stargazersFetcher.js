export default function fetchStargazers(repositoryName) {
  let url = `https://api.github.com/repos/${repositoryName}/stargazers`;
  return fetch(url).then(response => response.json());
}
