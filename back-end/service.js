const {  QuimeraModel, TubaraoModel, RaiaModel, allAnimalsModel } =  require('./schema');
const { atualizaQuery } = require('./utils');

exports.quimera = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      let quimera = {}
      let arrayQuimera = []; 
      let mensagem
      quimera = await QuimeraModel.findOne(query);
      quimera && arrayQuimera.push(quimera);
      mensagem = "Sua espécie é"
      if (!quimera) {
          mensagem = "Sua espécie provavelmente é"
        do {
          quimera = await QuimeraModel.find(query);
          
          if (quimera.length > 0 ) {
            arrayQuimera.push(...quimera)
            break;
          };
          query = await atualizaQuery(query);
        } while (quimera.length === 0 );
      }


      resolve({
        animais: arrayQuimera, 
        mensagem: mensagem  
      });
    } catch (error) {
      console.log("error ==> ", error);
      reject(error);

    }
  });
};


exports.tubarao = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      let tubarao = {};
      let filtroTubarao = []
      let arrayTubarao = [];
      tubarao = await TubaraoModel.findOne(query);
      tubarao && arrayTubarao.push(tubarao);
      mensagem = "Sua espécie é"
      if (!tubarao) {
          mensagem = "Sua espécie provavelmente é"
        do {
          tubarao = await TubaraoModel.find(query);
          
          if (tubarao.length > 0 ) {
            for (let index = 0; index < tubarao.length; index++) {
              const animais = tubarao[index];
              const {Animal, Ordem, Família, Genero, Especie, ID_fishbase} = animais;

              filtroTubarao.push({
                Animal,
                Ordem,
                Família,
                Genero,
                Especie,
                ID_fishbase
              });
            }

            arrayTubarao.push(...filtroTubarao)
            break;
          };
          query = await atualizaQuery(query);
        } while (tubarao.length === 0 );
      }


      resolve({
        animais: arrayTubarao, 
        mensagem: mensagem  
      });
    } catch (error) {
      console.log("error ==> ", error);
      reject(error);

    }
  });
};


exports.raia = (query) => {
  return new Promise(async (resolve, reject) => {
    try {
      let raia = {};
      let filtroRaia = []
      let arrayRaia = [];
      raia = await RaiaModel.findOne(query);
      raia && arrayRaia.push(raia);
      mensagem = "Sua espécie é"
      if (!raia) {
          mensagem = "Sua espécie provavelmente é"
        do {
          raia = await RaiaModel.find(query);
          
          if (raia.length > 0 ) {
            for (let index = 0; index < raia.length; index++) {
              const animais = raia[index];
              const {Animal, Ordem, Família, Genero, Especie, ID_fishbase} = animais;

              filtroRaia.push({
                Animal,
                Ordem,
                Família,
                Genero,
                Especie,
                ID_fishbase
              });
            }

            arrayRaia.push(...filtroRaia)
            break;
          };
          query = await atualizaQuery(query);
        } while (raia.length === 0 );
      }

      resolve({
        animais: arrayRaia, 
        mensagem: mensagem  
      });
    } catch (error) {
      console.log("error ==> ", error);
      reject(error);

    }
  });
};


exports.listaAnimais = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const animais = await allAnimalsModel.find().sort({ Animal: 1 });


      resolve(animais);
    } catch (error) {
      console.log("error ==> ", error);
      reject(error);

    }
  });
};
