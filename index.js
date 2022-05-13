import shell from "shelljs";

// Run external tool synchronously
if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
    shell.exec('git add .');
  shell.echo("Error: Git commit failed");
  shell.exit(1);
}
