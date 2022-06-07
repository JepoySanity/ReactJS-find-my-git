const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const searchUsers = async (search) => {
  const params = new URLSearchParams({
    q: search,
  });
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
  const { items } = await response.json();

  return items;
};

export const getUserInfo = async (login) => {
  const response = await fetch(`${GITHUB_URL}/users/${login}`);
  const data = await response.json();

  return data;
};

export const getUserRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`);
  const data = await response.json();

  return data;
};
