/* eslint-disable eqeqeq */
/* eslint-disable func-names */
/* eslint-disable consistent-return */
/* eslint-disable no-cond-assign */
/* eslint-disable prefer-template */
/* eslint-disable no-param-reassign */
// eslint-disable-next-line func-names
// export const inWords = function (num) {
//   const a = [
//     '',
//     'One ',
//     'Two ',
//     'Three ',
//     'Four ',
//     'Five ',
//     'Six ',
//     'Seven ',
//     'Eight ',
//     'Nine ',
//     'Ten ',
//     'Eleven ',
//     'Twelve ',
//     'Thirteen ',
//     'Fourteen ',
//     'Fifteen ',
//     'Sixteen ',
//     'Seventeen ',
//     'Eighteen ',
//     'Nineteen ',
//   ];
//   const b = [
//     '',
//     '',
//     'Twenty',
//     'Thirty',
//     'Forty',
//     'Fifty',
//     'Sixty',
//     'Seventy',
//     'Eighty',
//     'Ninety',
//   ];

//   // eslint-disable-next-line no-cond-assign
//   if ((num = num.toString()).length > 9) return 'overflow';

//   // eslint-disable-next-line prefer-template
//   const n = ('000000000' + num)
//     .substr(-9)
//     .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
//   // eslint-disable-next-line consistent-return
//   if (!n) return;
//   let str = '';
//   // eslint-disable-next-line prefer-template
//   str +=
//     n[1] !== 0
//       ? (a[Number(n[1])] || `${b[n[1][0]]} ${a[n[1][1]]}`) + 'Crore '
//       : '';
//   // eslint-disable-next-line prefer-template
//   str +=
//     n[2] !== 0
//       ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'Lakh '
//       : '';
//   // eslint-disable-next-line prefer-template
//   str +=
//     n[3] !== 0
//       ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'Thousand '
//       : '';
//   // eslint-disable-next-line prefer-template
//   str +=
//     n[4] !== 0
//       ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'Hundred '
//       : '';
//   // eslint-disable-next-line prefer-template
//   str +=
//     n[5] !== 0
//       ? (str !== '' ? 'and ' : '') +
//         (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) +
//         'only '
//       : '';
//   return str;
// };
// // document.getElementById('number').onkeyup = function () {
// //     document.getElementById('words').innerHTML = inWords(document.getElementById('number').value);
// // };

export const inWords = function (num) {
  const a = [
    '',
    'one ',
    'two ',
    'three ',
    'four ',
    'five ',
    'six ',
    'seven ',
    'eight ',
    'nine ',
    'ten ',
    'eleven ',
    'twelve ',
    'thirteen ',
    'fourteen ',
    'fifteen ',
    'sixteen ',
    'seventeen ',
    'eighteen ',
    'nineteen ',
  ];
  const b = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  if ((num = num.toString()).length > 9) return 'overflow';
  const n = ('000000000' + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return;
  let str = '';
  str +=
    n[1] != 0
      ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore '
      : '';
  str +=
    n[2] != 0
      ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh '
      : '';
  str +=
    n[3] != 0
      ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand '
      : '';
  str +=
    n[4] != 0
      ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred '
      : '';
  str +=
    n[5] != 0
      ? (str != '' ? 'and ' : '') +
        (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) +
        'only '
      : '';
  return str;
};

// document.getElementById('number').onkeyup = function () {
//     document.getElementById('words').innerHTML = inWords(document.getElementById('number').value);
// };
