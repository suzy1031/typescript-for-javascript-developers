export{};

class Person {
  // コンストラクタの引数にアクセス修飾子に書く
  constructor(public name: string, protected age:number) {
  }
}

const me = new Person('suga', 33)
console.log(me)