export{};

enum Months {
  // 0からインクリメントさせたくない場合
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December
}

console.log(Months.January)
console.log(Months.February)
console.log(Months.December)

// const MonthJs = {
//   January: 0,
//   February: 1,
// }

// console.log(MonthJs.January)
// console.log(MonthJs.February)

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#00800',
  BLUE = '#0000FF',
  BLACK = '#000000',
  // YELLOW = '#FFFF00'
}

let green = COLORS.GREEN
console.log({ green })

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080'
}

COLORS.YELLOW