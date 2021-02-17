export {};

let name: any = 'suga'

// 型アサーション
let length = (<string>name).length
// 非推奨
// let length = (name: string).length

// length = 'foo'