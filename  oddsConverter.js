const oddsConverter = odds => {
    let probabilities = [];

    odds.map((el) => {
        let splities = el.split("/");
        let numerator = Number(splities[0]);
        let denominator = Number(splities[1]);
        probabilities.push(probabilitie(numerator, denominator));

    });
    function probabilitie(numerator, denominator) {
        let calc = ((denominator / (denominator + numerator)) * 100).toFixed(1);
        return calc;
    }
    let maior = probabilities.sort((a, b) => a - b);
    let ultimo = maior[maior.length - 1];


    return ultimo[ultimo.length - 1] == 0 ? `${ultimo.slice(0, 2)}%` : `${ultimo}%`;
};

console.log(oddsConverter(['9/1', '20/1', '1/3', '20/1', '1/5']));
console.log(oddsConverter(['4/1', '50/1', '1/6']));
console.log(oddsConverter(['9/2', '1/9', '1/2']));




