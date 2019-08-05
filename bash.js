const { pwd } = require('./pwd');
const { ls } = require('./ls');
const { cat } = require('./cat')
const { curl } = require('./curl')

process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');

    if (cmd === 'pwd') {
        pwd();
    }

    if (cmd === 'ls') {
        ls();
    }

    const cmds = cmd.split(" ");

    if (cmds[0] === 'cat') {
        cat(cmds[1]);
    }

    if (cmds[0] === 'curl') {
        curl(cmds[1]);
    }
});

