export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run'
  }
}

class Lion extends Animal {
  // 子クラス内で定義されたメンバ変数
  public speed: number

  constructor(name: string, speed: number) {
    // 親クラスからの継承
    super(name)

    this.speed = speed
  }
  run(): string {
    // 親メソッドの呼び出しsuper.メソッド名()
    return `${super.run()} ${this.speed}km/h`
  }
}

// let animal = new Animal()
// console.log(animal.run())

// let lion = new Lion()
// console.log(lion.run())

console.log(new Animal('Mickey').run())
console.log(new Lion('Simba', 80).run())