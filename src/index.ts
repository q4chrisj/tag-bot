import * as core from "@actions/core";
import github from "@actions/github";

async function run() {

  const token = core.getInput("token");
  //const octokit = github.getOctokit(token);

  // console.log("hello?");
  // console.log(repo.repo);

  // const tags = await octokit.rest.repos.listTags({
  //   owner: repo.owner,
  //   repo: repo.repo
  // });

  // for (var tag in tags) {
  //   console.log(tag);
  //   core.info(tag);
  // }
}

run();
