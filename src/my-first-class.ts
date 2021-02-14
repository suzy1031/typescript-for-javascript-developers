export{};

class Person {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`
  }
}
// new演算子
let taro = new Person('taro', 30)
console.log(taro.profile())
// let hanko = new Person()