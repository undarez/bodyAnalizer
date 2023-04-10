import { useState } from 'react';
import Select from 'react-select';
import './_calculeBmr.scss';
import calculBmr from '../../function/BMRCalcule.js';
import coefficientBMR from '../../data/coefficientBMR.json';
import calculImc from '../../function/IMCCalcule.js';

const Bmr = () => {
      const [CoeffBMR] = coefficientBMR;
      const [userData, setUserData] = useState({
            poids: '',
            taille: '',
            age: '',
      });
      const [bmr, setBmr] = useState(0);
      const [affichage, setAffichage] = useState(0);
      const [imc, setImc] = useState(0);

      const options = [
            {
                  value: CoeffBMR.bmrX1,
                  label: 'Sédentaire, pas d’activité physique',
            },
            {
                  value: CoeffBMR.bmrX2,
                  label: 'Activité physique légère une à deux fois par semaine',
            },
            {
                  value: CoeffBMR.bmrX3,
                  label: 'Activité physique modérée trois à quatre fois par semaine',
            },
            {
                  value: CoeffBMR.bmrX4,
                  label: 'Activité physique modérée quotidienne',
            },
            {
                  value: CoeffBMR.bmrX5,
                  label: 'Activité physique intense six à sept fois par semaine',
            },
      ];

      const calculateBmr = () => {
            const { poids, taille, age } = userData;
            console.log(userData);
            const calculateBmr = calculBmr(poids, taille, age);
            setBmr(Number(calculateBmr));
            calculateImc();
      };

      const calculateImc = () => {
            const { poids, taille } = userData;
            console.log(userData);
            const calculateImc = calculImc(poids, taille);
            setImc(calculateImc);
            console.log(calculateImc);
      };

      const TotalCal = (selectedOption) => {
            const { poids, taille, age } = userData;
            console.log(userData);
            const calculateBmr = calculBmr(poids, taille, age);
            setBmr(Number(calculateBmr));
            setAffichage(selectedOption * Number(calculateBmr));
            calculateImc();
      };

      return (
            <body>
                  <form
                        onSubmit={(e) => {
                              e.preventDefault();
                        }}
                  >
                        <input
                              type="number"
                              value={userData.poids}
                              placeholder="Poids"
                              onChange={(e) =>
                                    setUserData({
                                          ...userData,
                                          poids: e.target.value,
                                    })
                              }
                        />
                        <input
                              type="number"
                              value={userData.taille}
                              placeholder="Taille"
                              onChange={(e) =>
                                    setUserData({
                                          ...userData,
                                          taille: e.target.value,
                                    })
                              }
                        />
                        <input
                              type="number"
                              value={userData.age}
                              placeholder="Age"
                              onChange={(e) =>
                                    setUserData({
                                          ...userData,
                                          age: e.target.value,
                                    })
                              }
                        />

                        <button type="submit" onClick={calculateBmr}>
                              Calculer BMR
                        </button>
                  </form>
                  <div className="container-value">
                        <p className="bmr-text">Valeur de BMR: {bmr}</p>
                  </div>
                  <Select
                        onChange={(e) => {
                              TotalCal(e.value);
                        }}
                        options={options}
                  />
                  <div className="container-value">
                        <p className="bmr-text">Résultat: {affichage}</p>
                  </div>
                  <div className='container-imc_resultat'>
                        <p className="resultat">
                              Vous êtes actuellement en : {imc.type}
                        </p>
                        <p className="resultat ">votre imc est de : {imc.imc}</p>
                  </div>
            </body>
      );
};

export default Bmr;
