export {};

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void
}

interface Senshi {
  kougeki(): void
}

// implements => 実装
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log('ionazun')
  }

  kougeki(): void {
    console.log('kougei')
  }
}

const jiro = new Jiro()
jiro.ionazun()
jiro.kougeki()