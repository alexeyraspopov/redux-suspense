import React from 'react';

export default function StargazerList({ stargazers }) {
  return (
    <ul>
      {stargazers.map(stargazer => (
        <li key={stargazer.login}>
          <a href={stargazer.html_url}>{stargazer.login}</a>
        </li>
      ))}
    </ul>
  );
}
