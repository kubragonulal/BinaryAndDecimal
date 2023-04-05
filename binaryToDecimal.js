console.log(convert(110));
function convert(number) {
    let toplam=0;
    let numberString = number.toString(); 
    for (let i = 0; i < numberString.length; i++) {
            toplam+=parseInt(numberString.charAt(i)) * Math.pow(2, numberString.length-i-1);
        }
        return toplam;
    }
