//importer le fichier json qui contien les reference de l'imc de l'oms

import data from '../data/referenceImc.json';
// console.log(data)
const calculImc = (poids, taille) => {
  let imc = poids / ((taille / 100) * (taille / 100));
  imc = parseFloat(imc.toFixed(2));
  // console.log(imctest)
  // console.log(poids, taille)

  let situationPondereale = data.find((situation) => {
    const min = situation.value.min;
    const max = situation.value.max;
    return imc >= min && imc <= max;
  });
  console.log(situationPondereale)


  if (situationPondereale) {
    return {
      type: `${situationPondereale.name} Vous êtes de type: ${situationPondereale.type}`,
      imc: imc
    };
  } else {
    return {
      type: "Impossible de déterminer la situation pondérale correspondante.",
      imc: imc
    };
  }
};

export default calculImc;


