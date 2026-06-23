// 获取UUID
const uuid = () => {
    var dg = new Date(1582, 10, 15, 0, 0, 0, 0);
    var dc = new Date();
    var t = dc.getTime() - dg.getTime();
    var tl = getIntegerBits(t, 0, 31);
    var tm = getIntegerBits(t, 32, 47);
    var thv = getIntegerBits(t, 48, 59) + '1';
    var csar = getIntegerBits(rand(4095), 0, 7);
    var csl = getIntegerBits(rand(4095), 0, 7);
    var n = getIntegerBits(rand(8191), 0, 7) +
        getIntegerBits(rand(8191), 8, 15) +
        getIntegerBits(rand(8191), 0, 7) +
        getIntegerBits(rand(8191), 8, 15) +
        getIntegerBits(rand(8191), 0, 15);
    return tl + tm + thv + csar + csl + n;
};
const getIntegerBits = (val, start, end) => {
    var base16 = returnBase(val, 16);
    var quadArray = [];
    var quadString = '';
    var i = 0;
    for (i = 0; i < base16.length; i++) {
        quadArray.push(base16.substring(i, i + 1));
    }
    for (i = Math.floor(start / 4); i <= Math.floor(end / 4); i++) {
        if (!quadArray[i] || quadArray[i] === '') quadString += '0';
        else quadString += quadArray[i];
    }
    return quadString;
};
const returnBase = (number, base) => {
    return (number).toString(base).toUpperCase();
};

const rand = (max) => {
    return Math.floor(Math.random() * (max + 1));
};