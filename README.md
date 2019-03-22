```
npm i -g @angular-devkit/architect-cli
```

## Schematics

- Update `angular.json`
- ?? Install the NS CLI

## Builder

- You point to the builder in `angular.json` with `packageName:builderName`
- In `packageName`'s `package.json` you have a property called `builders` which points to a JSON file
- The JSON file contains the `builderName` and points to the builder's implementation
