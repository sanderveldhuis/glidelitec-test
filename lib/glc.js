import { execSync } from 'node:child_process';

try {
  const buffer = execSync('tsc --help');
  console.log(buffer.toString());
} catch (error) {
  console.log(error.stdout.toString());
  console.log(error.stderr.toString());
}
