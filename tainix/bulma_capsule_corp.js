// const objets = ['LBNMECMEABR-132', 'ICFCGILXK-107', 'TFHXJS-104', 'AYQPWFN-532', 'EARALYKEY-347', 'UFTNPRI-184', 'XTQSAYFOF-555', 'PPENOM-401', 'DTJOXDRWACG-551', 'QEUGBCG-240', 'DRRIYFMMQ-283', 'ZPSHAQJICCYV-102', 'UOOVIF-142', 'YERKKVK-359', 'DITXAUHRFE-213', 'LONAEEY-378', 'NBFJKU-274', 'PKRZHVHSBYB-451', 'RMQFWBMMAE-223', 'AJUIVSPPLUPH-482', 'LBKLKKXXJQTA-330', 'MYKOKHLKYAC-295', 'PYCPWQL-126', 'UBSLESZK-331', 'OOMYIBHNRANA-538', 'ITQMLQVZLQ-176', 'GXUEPN-220', 'WBVLZVD-450', 'PROIURDIJOMM-369', 'AWDRFJWJ-280', 'QSPBVXMN-339', 'FCFUWXYVK-490', 'LMGIJYDZEIF-339', 'PIKVUN-209', 'PXWUNCZQ-257', 'MFTLXHVMQT-213', 'HZTUJR-384', 'AEUGICLJMYW-392', 'VAUEOCQPJA-296', 'GJXAOKAAOQ-352', 'MLPSETO-258', 'LOBWZCB-352', 'WTMJMQTDOCI-136', 'DKIKJHPXPAFU-122', 'BWAMGL-216', 'ASHKJCKRXO-190', 'BYDBAXUSLSE-206', 'GGRSXWG-237', 'QYISRAGPSS-165', 'NLNOZKFLXEL-415', 'YYFLPZ-545', 'FFQSPIDK-284', 'DDPXPO-462', 'HQQOOFWU-539', 'EAEOQVDGBW-177', 'UPLMUPIHBB-151', 'XZQWZXLSJZ-366', 'YYNLKQB-235', 'BCXDBD-111', 'HUMHGUFZOY-516', 'FTILGOK-181', 'WUTQLUYNWYQX-388', 'ZNUTGPWYK-533', 'YRDSBQSMEB-352', 'HBBKZQDMZ-176', 'QPBQJHX-257', 'UMXSXS-143', 'SXIERTEDJMN-127', 'FVPUMMUVU-172', 'BNBIUALU-146', 'UODPFWS-378', 'JZOUKRTPYQAG-189', 'DFZOMXQQ-181', 'SGZJQJKEMFVJ-381', 'SWQYXJGL-475', 'YJEBOZLUZ-279', 'FVLEHYOVPEE-208', 'HKBZLEATCML-321', 'MNPQUI-240', 'LITDRYWTWA-110', 'PKIOQND-321', 'BAHJAFU-408', 'VOLGYXCBQKWD-125', 'RADFRGO-192', 'QKIRALDZAFOA-427', 'GHCNZKCPBZVF-206', 'JNAOIA-484', 'HLJCWFOOBZ-481', 'BIBOJHOZLD-453', 'CNSTTB-147', 'JLVTHLQVGED-160', 'BQQPZVSDGA-212', 'MYPVJGITT-160', 'VIOIHP-128', 'TPSGRIKBQAE-484', 'RVVKQQIFKT-537', 'CYBHWCSXUYLC-474', 'JXGXQOJQWNL-416', 'BBPOQCL-212', 'PJCDFOII-493'];
// const capsules = ['LOEY-47', 'DDPO-46', 'GJOQ-35', 'BAFU-40', 'BILD-45', 'JXNL-41', 'LOEY-37', 'OXMI-25', 'PKMN-33', 'GHVF-20', 'NCMT-48', 'KSDQ-37', 'YYPZ-54', 'IIKV-31', 'JIJO-27', 'DZEA-13', 'WLIT-25', 'VKHS-38', 'PCUU-23', 'JXNL-54', 'ZPYV-10', 'NFYJ-13', 'GJOQ-21', 'AGBF-29', 'GHVF-14'];

// function reduce_object(objets) {
//     let objets_reduce = []
//     for (let i = 0; i < objets.length; i++) {
//         let item = objets[i].split("-")
//         let first_letter_and_second = item[0][0] + item[0][1]
//         let last_letter_before_last = item[0][item[0].length - 2] + item[0][item[0].length - 1]
//         let weight = Math.floor(item[1] / 10)

//         objets_reduce.push({ name: first_letter_and_second + last_letter_before_last + "-" + weight, weight: parseInt(item[1]) })
//     }
//     return objets_reduce
// }
// let objets_reduce = reduce_object(objets)
// console.log(objets_reduce);

// function find_capsule(objets, capsules) {
//     let capsules_good = 0
//     for (let i = 0; i < objets.length; i++) {
//         for (let j = 0; j < capsules.length; j++) {
//             if (objets[i].name === capsules[j]) {
//                 capsules_good += objets[i].weight
//             }
//         }

//     }
//     return capsules_good
// }
// console.log(find_capsule(objets_reduce, capsules));

