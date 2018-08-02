"strict mode";

/*let str = prompt("Enter word");

for(let i = 0; i < str.length; i++){
    document.write(`<p>`);
    document.write(str[i]);
    document.write('-(' + str.charCodeAt(i) + ')');
    document.write(`</p>`);
}*/
document.write(`<p>`);
for(let j = 0; j < 100; j++){
    let res = String.fromCharCode(j);
    document.write(res);
}
document.write(`</p>`);

