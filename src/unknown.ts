export {};

const kansu = (): number => 43

let numberAny: any = kansu()
let numberUnknown: unknown = kansu()

let sumAny = numberAny + 10
// typeof numberUnknownの型はnumber型なのでifが実行される
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10
}