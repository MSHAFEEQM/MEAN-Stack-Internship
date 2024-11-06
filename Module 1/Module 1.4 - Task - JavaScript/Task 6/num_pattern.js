
var limit = 4

for (var i = 1; i <= limit; i++) {
    for(var k = limit-i ; k> 0;k--)
        process.stdout.write(" ")
    for (var j = 0; j < i; j++) {
        process.stdout.write(" " +i)
    }
    console.log("")
}
