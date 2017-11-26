export default function factorsOf(a: number): number[] {
    if ( a === 0 ) return [];

    let factors = [];
    factors.push(1);

    let factor = 2;
    while (factor <= a / 2) {
        if (a % factor === 0) {
            factors.push(factor);
        }
        factor += 1;
    }

    factors.push(a);

    return factors.filter(function(item:number, pos:number):boolean{
        return factors.indexOf(item)== pos;
    });
};
