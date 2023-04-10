
import dataBmr from '../data/referenceBmr.json';


const calculBmr = (poids, taille, age) =>{
    const [dataBMR] = dataBmr
    let bmr = ((dataBMR.poids * poids)+(dataBMR.taille * taille)-(dataBMR.age * age)+ dataBMR.rajoute).toFixed(2);

return bmr;
};

export default calculBmr;

