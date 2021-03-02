# typescript-npm-monorepo-example

This is an example that uses the workspaces feature of npm v7 to implement a feature similar to [Gradle](https://gradle.org/)'s [MultiProject](https://docs.gradle.org/current/userguide/multi_project_builds.html).

## Features

* [TypeScript](https://www.typescriptlang.org/)
* [npm](https://www.npmjs.com/) v7 or later
  * [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)
  * monorepo (Multi Project)
* [Visual Studio Code](https://code.visualstudio.com/)
  * Extensions
    * [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
    * [Editorconfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
    * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## TIPS

### Cannot read property 'extraneous' of undefined

```sh
$ npm i
npm ERR! Cannot read property 'extraneous' of undefined

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/hoge/.npm/_logs/2021-02-24T16_35_18_864Z-debug.log
```

The above seems to happen when you create `package-lock.json` under Node.js v15 and then run `npm install` on v15. Please delete `package-lock.json` and `node_modules`, and then re-run `npm install`.

上記はNode.js v15未満で `package-lock.json` を作成した後、v15で `npm install` した際に発生するようです。 `package-lock.json` と `node_modules` を削除後、改めて `npm install` してください。
