## Schematics

- Update `angular.json`
- ?? Install the NS CLI

## Builder

- You point to the builder in `angular.json` with `packageName:builderName`
- In `packageName`'s `package.json` you have a property called `builders` which points to a JSON file
- The JSON file contains the `builderName` and points to the builder's implementation

## Invoke the builder

To invoke the builder (until we switch the CLI to the new architect API):

```
npm i -g @angular-devkit/architect-cli@next
architect projectName:serve --ios
```