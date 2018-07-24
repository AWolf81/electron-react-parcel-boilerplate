const Bundler = require("parcel-bundler");
const Path = require("path");
const { spawn, execSync, fork } = require("child_process");

// Entrypoint file location
const file = Path.join(__dirname, "./src/index.html");

console.log("file", file);

const options = {
  outDir: "./dist", // The out directory to put the build files in, defaults to dist
  outFile: "index.html", // The name of the outputFile
  publicUrl: "./dist", // The url to server on, defaults to dist
  watch: false, // whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
  cache: true, // Enabled or disables caching, defaults to true
  cacheDir: ".cache", // The directory cache gets put in, defaults to .cache
  minify: false, // Minify files, enabled if process.env.NODE_ENV === 'production'
  target: "browser", // browser/node/electron, defaults to browser
  https: false, // Server files over https or http, defaults to false
  logLevel: 3, // 3 = log everything, 2 = log warnings & errors, 1 = log errors
  hmrPort: 0, // The port the hmr socket runs on, defaults to a random free port (0 in node.js resolves to a random free port)
  sourceMaps: true, // Enable or disable sourcemaps, defaults to enabled (not supported in minified builds yet)
  hmrHostname: "", // A hostname for hot module reload, default to ''
  detailedReport: false // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
};

function runBundle() {
  // Initializes a bundler using the entrypoint location and options provided
  const bundler = new Bundler(file, options);

  // bundler.on("buildEnd", () => {
  //   // run post-build scripts
  //   spawn("yarn", ["start:electron"], {
  //     stdio: "inherit",
  //     shell: true
  //   });
  // });

  // bundler.on("bundled", bundle => {
  //   // bundler contains all assets and bundles, see documentation for details
  //   // gets called once after first bundle
  //   //spawn("yarn", ["start:electron"], { stdio: "inherit", shell: true });
  // });

  //bundler.bundle();

  // Run the bundler, this returns the main bundle
  // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
  const bundle = bundler.serve().then(server => {
    console.log("server listen");
    spawn("yarn", ["start:electron"], {
      stdio: "inherit",
      shell: true
    });
  });

  return bundle;
}

(async function() {
  await runBundle();
})();
