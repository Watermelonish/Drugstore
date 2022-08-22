const cars = [{ make: 'audi', model: 'r8', year: '2012' }, { make: 'audi', model: 'rs5', year: '2013' }, { make: 'ford', model: 'mustang', year: '2012' }, { make: 'ford', model: 'fusion', year: '2015' }, { make: 'kia', model: 'optima', year: '2012' }]
function sortByKey(arr, key){
    return result =  arr.reduce(function (r, a) {
        r[a.key] = r[a.key] || [];
        r[a.key].push(a);
        return r;
    }, Object.create(null));
}
console.log(sortByKey(cars, 'make'));