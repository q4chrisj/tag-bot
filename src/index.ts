import * as core from "@actions/core";
import * as github from "@actions/github";

async function run(): Promise<void> {
  try {
    const token = core.getInput("token");
    const octokit = github.getOctokit(token);
    const repo = github.context.repo;
  

    octokit.rest.repos.listTags({
      owner: repo.owner,
      repo: repo.repo
    })
    .then(({ data } ) => {

      if(data.length === 0) {
        throw Error("No tags found in repository");
      }
      
      console.log(data);
      for (const tag in data) {
        console.log(tag);
      }
    });
  
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
