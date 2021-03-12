const tab = new Array(50, 10, 60, 120);
let n = tab.length;
let sum=0;
for(i=0; i<n; i++)
{
    sum += tab[i];
}
let result = sum / n;

console.log(result)