export {};

let name = 'Suga'

name = 'gasu'

let nickname = 'Suga' as const

// 決められた文字列リテラルのみ代入可能
nickname = 'Suga'

// as constはreadonly name: 'suga'と同じ
// 全ての要素をreadonlyにしてくれる
let profile = {
  name: 'suga',
  height: 182
} as const

// profile.name = 'hara'
// profile.height = 185