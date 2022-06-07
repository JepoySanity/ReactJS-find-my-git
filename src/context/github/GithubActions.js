import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const github = axios.create({
  baseURL: GITHUB_URL,
});

export const searchUsers = async (search) => {
  const params = new URLSearchParams({
    q: search,
  });
  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

export const getUserInfoAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?${params}`),
  ]);

  return { user: user.data, repos: repos.data };
};
