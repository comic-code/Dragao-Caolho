const weapons = [
  {
    "label": "Adaga",
    "price": "2po",
    "damage": "1d4",
    "damageType": "Perfurante",
    "weight": "0,5kg",
    "properties": "Ágil, leve, arremesso (6/18)",
    "type": "Simples Corpo-a-Corpo"
  },
  {
    "label": "Azagaia",
    "price": "5pp",
    "damage": "1d6",
    "damageType": "Perfurante",
    "weight": "1kg",
    "properties": "Arremesso (9/36)",
    "type": "Simples Corpo-a-Corpo"
  },
  {
    "label": "Cajado",
    "price": "2pp",
    "damage": "1d6",
    "damageType": "Cortante",
    "weight": "2kg",
    "properties": "Versátil (1d8)",
    "type": "Simples Corpo-a-Corpo"
  },
  {
    "label": "Clava Grande",
    "price": "2pp",
    "damage": "1d8",
    "damageType": "Esmagador",
    "weight": "5kg",
    "properties": "Duas Mãos",
    "type": "Simples Corpo-a-Corpo"
  },
  {
    "label": "Desarmado",
    "price": null,
    "damage": "1",
    "damageType": "Cortante",
    "weight": null,
    "properties": "Leve",
    "type": "Simples Corpo-a-Corpo"
  },
  {
    "label": "Foice Curta",
    "price": "1po",
    "damage": "1d6",
    "damageType": "Cortante",
    "weight": "1,5kg",
    "properties": "Versátil (1d8), arremesso (6/18)",
    "type": "Simples Corpo-a-Corpo"
  },
  {
    "label": "Lança",
    "price": "1po",
    "damage": "1d6",
    "damageType": "Perfurante",
    "weight": "1,5kg",
    "properties": "Versátil (1d8), arremesso (6/18)",
    "type": "Simples Corpo-a-Corpo"
  },
  {
    "label": "Maça",
    "price": "5po",
    "damage": "1d6",
    "damageType": "Esmagador",
    "weight": "2kg",
    "properties": null,
    "type": "Simples Corpo-a-Corpo"
  },
  {
    "label": "Machadinha",
    "price": "5po",
    "damage": "1d6",
    "damageType": "Cortante",
    "weight": "1kg",
    "properties": "Leve, arremesso (6/18)",
    "type": "Simples Corpo-a-Corpo"
  },
  {
    "label": "Martelo Leve",
    "price": "2po",
    "damage": "1d4",
    "damageType": "Esmagador",
    "weight": "1kg",
    "properties": "Leve, arremesso (6/18)",
    "type": "Simples Corpo-a-Corpo"
  },
  {
    "label": "Porrete",
    "price": null,
    "damage": "1d4",
    "damageType": "Esmagador",
    "weight": "1kg",
    "properties": "Leve",
    "type": "Simples Corpo-a-Corpo"
  },
  {
    "label": "Arco Curto",
    "price": "25po",
    "damage": "1d6",
    "damageType": "Perfurante",
    "weight": "1kg",
    "properties": "24/96. Munição, duas mãos",
    "type": "Simples à Distância"
  },
  {
    "label": "Besta Leve",
    "price": "25po",
    "damage": "1d8",
    "damageType": "Perfurante",
    "weight": "2,5kg",
    "properties": "30/120. Munição, recarga, duas mãos",
    "type": "Simples à Distância"
  },
  {
    "label": "Dardo",
    "price": "1pp",
    "damage": "1d4",
    "damageType": "Perfurante",
    "weight": "0,125kg",
    "properties": "6/18. Ágil, arremesso",
    "type": "Simples à Distância"
  },
  {
    "label": "Funda",
    "price": "1pp",
    "damage": "1d4",
    "damageType": "Cortante",
    "weight": null,
    "properties": "9/36. Munição",
    "type": "Simples à Distância"
  },
  {
    "label": "Machado",
    "price": "10po",
    "damage": "1d8",
    "damageType": "Cortante",
    "weight": "2kg",
    "properties": "Versátil (1d10)",
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Mangual",
    "price": "10po",
    "damage": "1d8",
    "damageType": "Esmagador",
    "weight": "1kg",
    "properties": null,
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Glaive",
    "price": "20po",
    "damage": "1d10",
    "damageType": "Cortante",
    "weight": "3kg",
    "properties": "Pesada, alcance, duas mãos.",
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Machado Grande",
    "price": "30po",
    "damage": "1d12",
    "damageType": "Cortante",
    "weight": "3,5kg",
    "properties": "Pesada, duas mãos.",
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Espada Duas Mãos",
    "price": "50po",
    "damage": "2d6",
    "damageType": "Cortante",
    "weight": "3kg",
    "properties": "Pesada, duas mãos.",
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Alabarda",
    "price": "20po",
    "damage": "1d10",
    "damageType": "Cortante",
    "weight": "3kg",
    "properties": "Pesada, alcance, duas mãos.",
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Lança de Montaria",
    "price": "10po",
    "damage": "1d12",
    "damageType": "Perfurante",
    "weight": "3kg",
    "properties": "Alcance, especial.",
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Espada Longa",
    "price": "15po",
    "damage": "1d8",
    "damageType": "Cortante",
    "weight": "1,5kg",
    "properties": "Versátil (1d10)",
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Marreta",
    "price": "10po",
    "damage": "2d6",
    "damageType": "Esmagador",
    "weight": "5kg",
    "properties": "Pesada, duas mãos.",
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Maça Estrela",
    "price": "15po",
    "damage": "1d8",
    "damageType": "Perfurante",
    "weight": "2kg",
    "properties": null,
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Pique",
    "price": "5po",
    "damage": "1d10",
    "damageType": "Perfurante",
    "weight": "9kg",
    "properties": "Pesada, alcance, duas mãos.",
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Florete",
    "price": "25po",
    "damage": "1d8",
    "damageType": "Perfurante",
    "weight": "1kg",
    "properties": "Ágil.",
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Cimitarra",
    "price": "25po",
    "damage": "1d6",
    "damageType": "Cortante",
    "weight": "1,5kg",
    "properties": "Ágil, leve.",
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Espada Curta",
    "price": "10po",
    "damage": "1d6",
    "damageType": "Perfurante",
    "weight": "1kg",
    "properties": "Ágil, leve.",
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Tridente",
    "price": "5po",
    "damage": "1d6",
    "damageType": "Perfurante",
    "weight": "2kg",
    "properties": "Arremesso (6/18), versátil (1d8).",
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Picareta de Guerra",
    "price": "5po",
    "damage": "1d8",
    "damageType": "Perfurante",
    "weight": "1kg",
    "properties": null,
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Martelo de Guerra",
    "price": "15po",
    "damage": "1d8",
    "damageType": "Esmagador",
    "weight": "1kg",
    "properties": "Versátil (1d10)",
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Chicote",
    "price": "2po",
    "damage": "1d4",
    "damageType": "Cortante",
    "weight": "1,5kg",
    "properties": "Ágil, alcance.",
    "type": "Marcial Corpo a Corpo"
  },
  {
    "label": "Zarabatana",
    "price": "10po",
    "damage": "1",
    "damageType": "Perfurante",
    "weight": "0,5kg",
    "properties": "7,5/30. Munição, recarga",
    "type": "Marcial à Distância"
  },
  {
    "label": "Besta de Mão",
    "price": "75po",
    "damage": "1d6",
    "damageType": "Perfurante",
    "weight": "1,5kg",
    "properties": "9/36. Munição, leve, recarga",
    "type": "Marcial à Distância"
  },
  {
    "label": "Besta Pesada",
    "price": "50po",
    "damage": "1d10",
    "damageType": "Perfurante",
    "weight": "9kg",
    "properties": "30/120. Munição, pesada, recarga, duas mãos",
    "type": "Marcial à Distância"
  },
  {
    "label": "Arco Longo",
    "price": "50po",
    "damage": "1d8",
    "damageType": "Perfurante",
    "weight": "1kg",
    "properties": "45/180. Munição, pesada, duas mãos",
    "type": "Marcial à Distância"
  },
  {
    "label": "Rede",
    "price": "1po",
    "damage": null,
    "damageType": null,
    "weight": "1,5kg",
    "properties": "1,5/4,5. Especial, arremesso",
    "type": "Marcial à Distância"
  }
]

export default weapons;