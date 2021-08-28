/*

we can either use ctrl c to close the server of node
else
we can use process module to do so

sytax is like process.exit(exitCode)
exitcode basically is some sort of signal to os
every exitcode signifies something
like 0 -> success
can also set exit code for process like
process.exitCode = val

*/

let val = require('process')
while (1)
{
    console.log(1)
    val.exit(1)
}

