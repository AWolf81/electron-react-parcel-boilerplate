[![Build Status](https://travis-ci.org/AWolf81/electron-react-parcel-boilerplate.svg?branch=master)](https://travis-ci.org/AWolf81/electron-react-parcel-boilerplate)

[![codecov](https://codecov.io/gh/AWolf81/electron-react-parcel-boilerplate/branch/master/graph/badge.svg)](https://codecov.io/gh/AWolf81/electron-react-parcel-boilerplate)

# Electron React Parcel.js boilerplate

This boilerplate uses Parcel for building/bundling. It supports the following:

- Babel transpilation ES6 with JSX
- Every feature of Create-React-App (e.g. async/await & class-properties)
- Flowjs for type checking
- SASS stylesheets
- Jest for unit testing
- Uses Bulma.sass for styling
- Electron builder for bundling for production
- TravisCI for continous integration
- Codecov for coverage reporting

## Why I created this boilerplate?

I created this boilerplate because I wanted to learn how I can configure electron builder and I think that the setup is easier with Parcel.js.

## Installation

Clone the repo via git:

`git clone --depth=1 https://github.com/awolf81/electron-react-parcel-boilerplate.git your-project-name`

And then install dependencies with yarn.

`$ cd your-project-name`
`$ yarn`

Note: If you can't use yarn, run `npm install`.

## Usage

Run `yarn start` to start development server with hot reloading.
Run `yarn dist` to build for production - tweaking & extending `build` section in `package.json` maybe required (e.g. add custom icons, categories for each OS, etc.)

## Todos

- [x] Add flowjs
- [x] Add jest
- [x] Improve starting of dev server - electron starts too early and displays blank page
- [ ] Save builtin typescript linter setting of VS code to avoid errors for flowjs (error types only supported in ts files) - Disabled manually `@builtin typescript` for current workspace.
- [ ] Add [Spectron](https://electronjs.org/spectron) for e2e testing

# Contribution

I've you like the boilerplate and there is something to improve feel free to fork and improve. PRs welcome.

# License

MIT License
Copyright (c) 2018 Alexander Wolf
