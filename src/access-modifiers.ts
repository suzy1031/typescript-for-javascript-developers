export{};

class Person {
  public name: string
  // private age: number
  protected age: number
  protected nationality: string

  constructor(name: string, age: number, nationality: string) {
    this.name = name
    this.age = age
    this.nationality = nationality
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}`
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // 親クラスのコンストラクタを継承
    super(name, age, nationality)
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`
  }
}

// new演算子
let taro = new Person('taro', 30, 'Japan')
console.log(taro.profile())
console.log(taro.name)
// console.log(taro.age)
// let hanko = new Person()