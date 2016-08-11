exports.convert = function(num) {
    var dollars = "$";
    var numCommas = "";

    if (num > 1000) {
        numCommas = numCommas + Math.round(num / 1000) + ',';
        // console.log("numC",numCommas);

        numThousands = (Math.round(num / 1000) * 1000);
        // console.log("numT",numThousands);

        numSecond = (numThousands - num) * -1;
        numCommas = numCommas + numSecond;
        dollars = dollars + numCommas + ".00";
        // console.log(dollars);
    } else {
        dollars = dollars + num + ".00";
        // console.log(dollars);
    }
    return dollars;
};
