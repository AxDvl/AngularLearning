const array0 = [3, 4, 2, 1];
const array1 = [3, 5, 2, 2, 8];

console.log(intersect(array0, array1));

function intersect(array0, array1){
    const res = [];
	array0.forEach(x=>{
        if (array1.indexOf(x)!==-1 && res.indexOf(x)===-1){
            res.push(x); 
        }         
    });

    return res;
}