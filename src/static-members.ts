export{};

// new演算子でインスタンス化しないで使える
class Me {
  static isProgrammer: boolean = true
  static firstName: string = 'Kohei'
  static lastName: string = 'Sugawara'

  static work() {
    return `Hey, guys! this is ${this.firstName}! Are you interested in TypeScript?`
  }
}

// let me = new Me()
// console.log(me.isProgrammer)
console.log(Me.isProgrammer)
console.log(Me.work())