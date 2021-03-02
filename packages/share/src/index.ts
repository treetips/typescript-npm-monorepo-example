/**
 * This export and below are related.
 * [share/package.json] { "types": "./build/index.d.ts" }
 *
 * What you export here can be referenced by other projects.
 *
 * If you do not export here, you will not get a compile error in the editor,
 * but you will get an error when you npm run build.
 *
 * The reason why npm run build gives a compilation error is
 * that the project references feature in tsconfig.json only affects the pre-compiled .ts.
 *
 * @see https://www.typescriptlang.org/docs/handbook/project-references.html
 */
export * from "./libs";
export * from "./types";
