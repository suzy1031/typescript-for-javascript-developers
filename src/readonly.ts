export{};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('suga')
console.log(myVisaCard.owner)
// myVisaCard.owner = '菅原'