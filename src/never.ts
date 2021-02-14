export {};

function error(message: string): never {
  throw new Error(message)
}

try {
  let result = error('test')
  console.log({ result })
} catch (error) {
  console.log({ error })
}

let foo: void = undefined
// error => never型を返す関数
let bar: never = error('only me')