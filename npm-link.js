var package = require('./package.json');
var cp = require('child_process');

// 0. Remove node_modules
cp.execSync('rm -rf node_modules', { stdio: 'inherit' })

// 1. Install dep modules globally

let modules = Object.keys(package.dependencies).join(' ') + ' ' +
			Object.keys(package.devDependencies).join(' ');

let cmd = 'npm install -g ' + modules
// let cmd = 'npm install -g ' + modules

console.log('\n\n' + cmd + '\n\n');

cp.execSync(cmd, {
	stdio: 'inherit'
})
// Done


// 2. link
cmd = 'npm link ' + modules

console.log('\n\n' + cmd + '\n\n');

cp.execSync(cmd, {
	stdio: 'inherit'
})
