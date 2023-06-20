// async function ash256(message) {
//     async function digestMessage(message) {
//         const msgUint8 = new TextEncoder().encode(message);                           // encode comme (utf-8) Uint8Array
//         const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // fait le condensé
//         const hashArray = Array.from(new Uint8Array(hashBuffer));                     // convertit le buffer en tableau d'octet
//         const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convertit le tableau en chaîne hexadélimale
//         return hashHex;
//     }

//     let digestHex = await digestMessage(message);
//     return digestHex
// }

// const informations = ['aaron.roussel@XXXXXXXX.com:3e8b13ceadf72fdf34913d06c3dac79f5f4303df43b546bf889ae8fab2ae5611', 'nolan.leclerq@XXXXXXXX.com:8bec2e44621ab084eca4c710ac08947e3854b7316b5f675cbb167948fd380fa7', 'leon.perrier@XXXXXXXX.com:f789715707ed3780a6dfa52c73030814d8de27277129a450c120d48b67388f9e', 'claude.ganier@XXXXXXXX.com:3d193c8ff322c2a2bf5002eec9af3ed3337d0d88c0e2bba3fb7415913db4baf7', 'walim.leclerq@XXXXXXXX.com:31df069aff2f459d860b4e7236715ecc3b7c9de8ae18b0bfab6444d9ed7cee0b', 'jade.garcia@XXXXXXXX.com:fc6b4e473d9565bd26e8f0f478e477aa01d372128b95d597d58bf09a0fd8828a', 'ines.roux@XXXXXXXX.com:21d0734b929110965e749e8ee1bf71caa5624e7923a1ad0be29efa7f5cc65c50', 'jules.fleury@XXXXXXXX.com:5a51885bcd0779bb31eadb08b3d837ad223faa592e5aacb7ac6f4ec74ffc7479', 'anne.perez@XXXXXXXX.com:c6603afd349299b002dae0e239ab6454231be1c21a8cda7cd3b0319b9c13c2df', 'jade.roche@XXXXXXXX.com:60659e165df461d2f4353bba4ae73eb994ec5faa2fd529e8736387a19e53c559', 'arthur.prevost@XXXXXXXX.com:521ff92e699f9bc48fb0b21095b8f1e8e204dc5b99891a07117271d886cf3391', 'pauline.ganier@XXXXXXXX.com:cedf120cf44c4a0c720b493b904e05dda66544a43a0e8f4d63c1213e5c34cda1', 'chloe.menard@XXXXXXXX.com:57037f62a08c903bbee747e6a078f1016b2ebb41ba8177f12e79ba8d15048525', 'alix.vasseur@XXXXXXXX.com:556ce1c3666c3089e8f440a9e4c20c305d506e36cc3cf9693ce258866029d529'];
// async function decrypte(informations) {

//     const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//     for (let i = 0; i < informations.length; i++) {
//         let information = informations[i]
//         let code = information.split(":")[1]
//         let last_name = information.split(".")[1].slice(0, 3).toUpperCase()
//         let name = information.split(".")[0]

//         for (let j = 0; j < letter.length; j++) {
//             for (let k = 10; k <= 99; k++) {
//                 let text = `${name}${last_name}@${k}${letter[j]}`
//                 const data = await ash256(text)
//                 if (data === code) {
//                     return text
//                 }
//             }
//         }
//     }
// }
// decrypte(informations).then((data) => { console.log(data) })
