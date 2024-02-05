const core = require("@actions/core");
const { DefaultArtifactClient } = require("@actions/artifact");

async function run() {
  try {
    const name = core.getInput("name", { required: true });
    const artifactClient = new DefaultArtifactClient();
    // get a single artifact
    core.info(
      `Starting check for ${name}`
    );
    try {
      const artifactResponse = await artifactClient.getArtifact(
        name,
      );
      core.info(`Artifact ${artifactResponse.artifact.name} exists.`);
      core.setOutput("exists", true);
    } catch (err) {
      core.info(`Artifact ${name} does not exist or is not available.`);
      core.debug(err);
      core.setOutput("exists", false);
    }
  } catch (err) {
    core.setFailed(err.message);
  }
}

run();
