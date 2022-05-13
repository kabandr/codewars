import shell from "shelljs";

// Run external tool synchronously
if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
  shell.exec("git add .");
  shell.exec('git add commit -m "woooooooo"');
  shell.exec("git push origin master");
  shell.echo("Successfully pushed to github repo!");
  shell.exit(1);
}
