const githubService = require("../../src/integrations/github/github.service");
const axios = require("axios");

jest.mock("axios");

test("should return current user", async () => {
  const data = {
    login: "alensnajder",
    id: 1263398,
    node_id: "MDQ6VXNlcjEyNjMzOTg=",
    avatar_url: "https://avatars3.githubusercontent.com/u/1263398?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/alensnajder",
    html_url: "https://github.com/alensnajder",
    followers_url: "https://api.github.com/users/alensnajder/followers",
    following_url:
      "https://api.github.com/users/alensnajder/following{/other_user}",
    gists_url: "https://api.github.com/users/alensnajder/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/alensnajder/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/alensnajder/subscriptions",
    organizations_url: "https://api.github.com/users/alensnajder/orgs",
    repos_url: "https://api.github.com/users/alensnajder/repos",
    events_url: "https://api.github.com/users/alensnajder/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/alensnajder/received_events",
    type: "User",
    site_admin: false,
    name: "Alen Snajder",
    company: null,
    blog: "",
    location: "Maribor, Slovenia",
    email: "alen.snajder@gmail.com",
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 3,
    public_gists: 0,
    followers: 1,
    following: 1,
    created_at: "2011-12-14T16:01:46Z",
    updated_at: "2020-12-11T23:22:03Z",
  };

  axios.get.mockResolvedValue({
    data: data,
  });

  const currentUser = await githubService.getCurrentUser();

  expect(currentUser).toEqual(data);
});

test("should return current user repositories", async () => {
  const data = [
    {
      id: 183237336,
      node_id: "MDEwOlJlcG9zaXRvcnkxODMyMzczMzY=",
      name: "gatekeeper-api",
      full_name: "alensnajder/gatekeeper-api",
      private: false,
      owner: {
        login: "alensnajder",
        id: 1263398,
        node_id: "MDQ6VXNlcjEyNjMzOTg=",
        avatar_url: "https://avatars3.githubusercontent.com/u/1263398?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/alensnajder",
        html_url: "https://github.com/alensnajder",
        followers_url: "https://api.github.com/users/alensnajder/followers",
        following_url:
          "https://api.github.com/users/alensnajder/following{/other_user}",
        gists_url: "https://api.github.com/users/alensnajder/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/alensnajder/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/alensnajder/subscriptions",
        organizations_url: "https://api.github.com/users/alensnajder/orgs",
        repos_url: "https://api.github.com/users/alensnajder/repos",
        events_url: "https://api.github.com/users/alensnajder/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/alensnajder/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/alensnajder/gatekeeper-api",
      description: null,
      fork: false,
      url: "https://api.github.com/repos/alensnajder/gatekeeper-api",
      forks_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/forks",
      keys_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/teams",
      hooks_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/hooks",
      issue_events_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/events",
      assignees_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/branches{/branch}",
      tags_url: "https://api.github.com/repos/alensnajder/gatekeeper-api/tags",
      blobs_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/languages",
      stargazers_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/stargazers",
      contributors_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/contributors",
      subscribers_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/subscribers",
      subscription_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/subscription",
      commits_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/merges",
      archive_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/downloads",
      issues_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/labels{/name}",
      releases_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/alensnajder/gatekeeper-api/deployments",
      created_at: "2019-04-24T13:42:36Z",
      updated_at: "2020-11-24T14:37:32Z",
      pushed_at: "2020-12-12T00:28:47Z",
      git_url: "git://github.com/alensnajder/gatekeeper-api.git",
      ssh_url: "git@github.com:alensnajder/gatekeeper-api.git",
      clone_url: "https://github.com/alensnajder/gatekeeper-api.git",
      svn_url: "https://github.com/alensnajder/gatekeeper-api",
      homepage: null,
      size: 175,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 1,
      license: {
        key: "mit",
        name: "MIT License",
        spdx_id: "MIT",
        url: "https://api.github.com/licenses/mit",
        node_id: "MDc6TGljZW5zZTEz",
      },
      forks: 0,
      open_issues: 1,
      watchers: 0,
      default_branch: "master",
      permissions: { admin: true, push: true, pull: true },
    },
  ];
  axios.get.mockResolvedValue({
    data: data,
  });

  const userRepositories = await githubService.getCurrentUserRepositories();
  expect(userRepositories).toEqual(data);
});

test("should return repository by id", async () => {
  const data = {
    id: 206408424,
    node_id: "MDEwOlJlcG9zaXRvcnkyMDY0MDg0MjQ=",
    name: "gatekeeper-android",
    full_name: "alensnajder/gatekeeper-android",
    private: false,
    owner: {
      login: "alensnajder",
      id: 1263398,
      node_id: "MDQ6VXNlcjEyNjMzOTg=",
      avatar_url: "https://avatars3.githubusercontent.com/u/1263398?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/alensnajder",
      html_url: "https://github.com/alensnajder",
      followers_url: "https://api.github.com/users/alensnajder/followers",
      following_url:
        "https://api.github.com/users/alensnajder/following{/other_user}",
      gists_url: "https://api.github.com/users/alensnajder/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/alensnajder/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/alensnajder/subscriptions",
      organizations_url: "https://api.github.com/users/alensnajder/orgs",
      repos_url: "https://api.github.com/users/alensnajder/repos",
      events_url: "https://api.github.com/users/alensnajder/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/alensnajder/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/alensnajder/gatekeeper-android",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/alensnajder/gatekeeper-android",
    forks_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/forks",
    keys_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/teams",
    hooks_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/hooks",
    issue_events_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/events",
    assignees_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/tags",
    blobs_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/languages",
    stargazers_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/stargazers",
    contributors_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/contributors",
    subscribers_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/subscribers",
    subscription_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/subscription",
    commits_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/merges",
    archive_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/downloads",
    issues_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/labels{/name}",
    releases_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/alensnajder/gatekeeper-android/deployments",
    created_at: "2019-09-04T20:33:05Z",
    updated_at: "2019-11-05T01:57:11Z",
    pushed_at: "2019-11-05T01:57:09Z",
    git_url: "git://github.com/alensnajder/gatekeeper-android.git",
    ssh_url: "git@github.com:alensnajder/gatekeeper-android.git",
    clone_url: "https://github.com/alensnajder/gatekeeper-android.git",
    svn_url: "https://github.com/alensnajder/gatekeeper-android",
    homepage: null,
    size: 1494,
    stargazers_count: 2,
    watchers_count: 2,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 2,
    default_branch: "master",
    permissions: { admin: true, push: true, pull: true },
    temp_clone_token: "",
    allow_squash_merge: true,
    allow_merge_commit: true,
    allow_rebase_merge: true,
    delete_branch_on_merge: false,
    network_count: 0,
    subscribers_count: 1,
  };
  axios.get.mockResolvedValue({
    data: data,
  });

  const repository = await githubService.getRepositoryById(206408424);
  expect(repository).toEqual(data);
});

test("should return repository commits count", async () => {
  axios.get.mockResolvedValue({
    headers: {
      link:
        '<https://api.github.com/repositories/892275/commits?per_page=1&page=2>; rel="next", <https://api.github.com/repositories/892275/commits?per_page=1&page=1863>; rel="last"',
    },
  });

  const commitsCount = await githubService.getRepositoryCommitsCount(
    "accessToken",
    1
  );
  expect(commitsCount).toBe(1863);
});
