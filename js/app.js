const coleccionPopcornflix = firebase.firestore().collection("Popcornflix"); 
let dataPopcornflix=[]
coleccionPopcornflix.get()
  .then((results) => {
    console.log(results)
    const data = results.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dataPopcornflix.push(...data)
    console.log("Toda data en la coleccion 'Popcornflix' ", data); 
 });
console.log(dataPopcornflix)

<!--esta función me trae todo el array de datos cargado en el firebase-->