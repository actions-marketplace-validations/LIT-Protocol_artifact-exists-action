# Artifact Exists Action

This action checks if an artifact exists and is available in the workflow.

# Lit Fork Notes
* Updated to work with artifact v4 api
* Updated to use listArtifacts so we don't have to download a full artifact to check if it exists.

## Inputs

- `name`(**Required**) - The name of the artifact to be checked.

## Outputs

- `exists` - Determines if the artifact with the provided name is present.

## Example usage

```yaml
uses: LIT-Protocol/artifact-exists-action@v0
with:
  name: "coverage-artifact"
```
