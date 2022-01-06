module.exports = function toReadable (number) {
    number = `${number}`;

    function singleDigits (number) {
        switch (number) {
            case '0':
                return 'zero';
            case '1':
                return 'one';
            case '2':
                return 'two';
            case '3':
                return 'three';
            case '4':
                return 'four';
            case '5':
                return 'five';
            case '6':
                return 'six';
            case '7':
                return 'seven';
            case '8':
                return 'eight';
            case '9':
                return 'nine';
        }
    }

    function exception (number) {
        switch (number) {
            case '11':
                return 'eleven';
            case '12':
                return 'twelve';
            case '13':
                return 'thirteen';
            case '14':
                return 'fourteen';
            case '15':
                return 'fifteen';
            case '16':
                return 'sixteen';
            case '17':
                return 'seventeen';
            case '18':
                return 'eighteen';
            case '19':
                return 'nineteen';
        }
    }

    function dozensDigits (number) {
        switch (number) {
            case '0':
                return '';
            case '1':
                return 'ten';
            case '2':
                return 'twenty';
            case '3':
                return 'thirty';
            case '4':
                return 'forty';
            case '5':
                return 'fifty';
            case '6':
                return 'sixty';
            case '7':
                return 'seventy';
            case '8':
                return 'eighty';
            case '9':
                return 'ninety';
        }
    }
  
    if (number.length === 1) { 
        return singleDigits(number);
    } else if (number.length === 2 && number[0] == 1 && number[1] < 1) {
        return dozensDigits(number[0]);
    } else if (number.length === 2 && number[0] == 1 && number[1] >= 1) {
        return exception(number);
    } else if (number.length === 2 && number[1] == 0) {
        return dozensDigits(number[0]);
    } else if (number.length === 2 && number[1] != 0) {
        return dozensDigits(number[0]) + ' ' + singleDigits(number[1])
    } else if (number.length === 3 && number[1] == 1 && number[2] > 0) {
        return singleDigits(number[0]) + ' hundred ' + exception(number.slice(1))
    } else if (number.length === 3 && number[1] == 0 && number[2] == 0) {
        return singleDigits(number[0]) + ' hundred'
    } else if (number.length === 3 && number[1] == 0) {
        return singleDigits(number[0]) + ' hundred ' + singleDigits(number[2])
    } else if (number.length === 3 && number[2] == 0) {
        return singleDigits(number[0]) + ' hundred ' + dozensDigits(number[1])
    } else {
        return singleDigits(number[0]) + ' hundred ' + dozensDigits(number[1]) + ' ' + singleDigits(number[2])
    }
  
}
