const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export const searchUsers = async (search) => {
  const params = new URLSearchParams({
    q: search,
  });
  const response = await fetch(`${GITHUB_URL}/search/users?${params}`);
  const { items } = await response.json();

  return items;
};
