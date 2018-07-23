const Bundler = require("parcel-bundler");
const Path = require("path");
const { spawn, execSync, fork } = require("child_process");

// Entrypoint file location
const file = Path.join(__dirname, "./src/index.html");

console.log("file", file);

const options = {
  //outDir: './dist', // The out directory to put the build files in, defaults to dist
  //outFile: 'index.html', // The name of the outputFile
  publicUrl: "./" // The url to server on, defaults to dist
};

async function runBundle() {
  // Initializes a bundler using the entrypoint location and options provided
  const bundler = new Bundler(file, options);

  bundler.on("bundled", bundle => {
    // bundler contains all assets and bundles, see documentation for details
    // gets called once after first bundle
  });

  bundler.bundle();

  // Run the bundler, this returns the main bundle
  // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
  const bundle = bundler.serve().then(server => {
    console.log("server listen");
    spawn("yarn", ["start:electron"], {
      stdio: "inherit",
      shell: true
    });
  });
  await bundle;
}

runBundle();
