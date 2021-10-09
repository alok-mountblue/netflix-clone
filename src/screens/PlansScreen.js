// import React, { useEffect, useState } from 'react';
// import db from '../firebase';
// const PlansScreen = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     db.collection('production').where('active', '==', true),
//       get().then((querySnapshot) => {
//         const product = {};
//         querySnapshot.forEach(async (productDoc) => {
//           products[productDoc.id] = productDoc.data();
//           const priceSnap = await productDoc.ref.collection('prices').get();
//           priceSnap.docs.forEach((doc) => {
//             products[productDoc.id].prices = {
//               priceId: price.id,
//               priceData: price.data(),
//             };
//           });
//         });
//         setProducts(products);
//       });
//   }, []);

//   console.log(products);
//   return <div className='PlansScreen'></div>;
// };

// export default PlansScreen;
