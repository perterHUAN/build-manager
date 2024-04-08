const main = async () => {
  const BuildClass = (await import(process.argv[2])).default;
  const builder = new BuildClass(...process.argv.slice(3));
  try {
    builder.build();
  } catch (err) {
    console.log("Build failed:", err);
  }
};

main();
