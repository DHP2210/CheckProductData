const productData =
{
    laptop: [
        {
            productId: "LAP1",
            category: "laptop",
            company: "Acer",
            name: "Acer Nitro 5",
            price: 50000,
            quantity: 2,
            availability: 1,
        },

        {
            productId: "LAP2",
            category: "laptop",
            company: "Acer",
            name: "ROG 6",
            price: 70000,
            quantity: 3,
            availability: 0,
        },

        {
            productId: "LAP3",
            category: "laptop",
            company: "MSI",
            name: "MSI",
            price: 150000,
            quantity: 10,
            availability: 1,
        },
    ],

    mobile: [
        {
            productId: "MOB1",
            category: "mobile",
            company: "Oneplus",
            name: "Oneplus 6t",
            price: 100000,
            quantity: 8,
            availability: 0,
        },

        {
            productId: "MOB2",
            category: "mobile",
            company: "iphone",
            name: "iPhone 16",
            price: 140000,
            quantity: 5,
            availability: 1,
        },

        {
            productId: "MOB3",
            category: "mobile",
            company: "Samsung",
            name: "Samsung s23",
            price: 150000,
            quantity: 10,
            availability: 0,
        },
    ],
}





function getFilterItems(enterFilter) {
    let matchTwoObjects = [];
    for (let i in Object.keys(enterFilter)) {

        switch (Object.keys(enterFilter)[i]) {
            case 'category':
                console.log('-- For category: [laptop]  & mobile --')
                for (key in productData) {
                    for (let i in productData[key]) {
                        for (let j in enterFilter.category) {
                            // console.log(enterFilter.category[j]) --laptop
                            if (productData[key][i].category === enterFilter.category[j]) {
                                matchTwoObjects.push(productData[key][i]);
                                // console.log(productData[key][i])
                            }
                        }

                    }
                }
                break;

            case 'availability':
                console.log('-- For checking The Availability(0 , 1) --')
                for (key in productData) {
                    for (let i in productData[key]) {
                        for (let j in enterFilter.availability) {
                            // console.log(enterFilter.availability[j])
                            if (productData[key][i].availability === enterFilter.availability[j]) {

                                matchTwoObjects.push(productData[key][i]);
                                // console.log(productData[key][i])
                            }
                        }
                    }
                }
                break;

            case 'quantity':
                console.log('-- Check The Quantity --')
                for (key in productData) {
                    for (let i in productData[key]) {
                        for (let j in enterFilter.quantity) {
                            // console.log(enterFilter.quantity)
                            if (productData[key][i].quantity === enterFilter.quantity[j]) {
                                matchTwoObjects.push(productData[key][i]);
                                // console.log(productData[key][i])
                            }
                        }
                    }
                }
                break;


            case 'name':
                console.log('-- Check The Name --')
                for (key in productData) {
                    for (let i in productData[key]) {
                        for (let j in enterFilter.name) {
                            // console.log(enterFilter.name[j])
                            if (productData[key][i].name === enterFilter.name[j]) {
                                matchTwoObjects.push(productData[key][i]);
                                // console.log(productData[key][i])
                            }
                        }
                    }
                }
                break;

            case 'company':
                console.log('-- Check The Company --')
                for (key in productData) {
                    for (let i in productData[key]) {
                        for (let j in enterFilter.company) {
                            // console.log(enterFilter.company)
                            if (productData[key][i].company === enterFilter.company[j]) {
                                matchTwoObjects.push(productData[key][i]);
                                // console.log(productData[key][i])
                            }
                        }
                    }
                }
                break;


            case 'price':

                switch (enterFilter.price.compare) {
                    case 'greaterThan':
                        console.log('-- Check The Pricing --')

                        for (key in productData) {
                            // console.log(productData[key][i].price)
                            for (let i in productData[key]) {
                                for (let j in enterFilter.price) {
                                    if (productData[key][i].price > enterFilter.price[j]) {
                                        matchTwoObjects.push(productData[key][i]);
                                        // console.log(productData[key][i])
                                    }
                                }
                            }
                        }
                        break;

                    case 'lessThan':
                        console.log('-- Check The Pricing --')

                        for (key in productData) {
                            for (let i in productData[key]) {
                                for (let j in enterFilter.price) {
                                    if (productData[key][i].price < enterFilter.price[j]) {
                                        matchTwoObjects.push(productData[key][i]);
                                        // console.log(productData[key][i])
                                    }
                                }
                            }
                        }
                        break;

                    case 'equal':
                        console.log('-- Check The Pricing --')
                        for (key in productData) {
                            for (let i in productData[key]) {
                                // console.log(productData[key][i])
                                for (let j in enterFilter.price) {
                                    if (productData[key][i].price === enterFilter.price[j]) {
                                        matchTwoObjects.push(productData[key][i]);
                                        // console.log(productData[key][i])
                                        // console.log(enterFilter.price[j])
                                    }
                                }
                            }
                        }
                        break;
                }
        }
    }
    return matchTwoObjects;
}

let filters = {
    availability: [],
    category: [''],
    company: ['Samsung'],
    name: [],
    quantity: [10],
    price: {
        amount: 100000,
        compare: 'lessThan',
    },
}
matchedItem = getFilterItems(filters);
console.log(matchedItem)
























//*********  To create an Array of Object
// 1.) create empty array  x = [];
// 2.) And Push that array x.push(something you want to console.)
// full ex below,
/*
      var  matchedProduct = [];
      matchedProduct.push(mobile);
      return matchedProduct;
      let mobileProducts = PrintMobile('quantity', 8);
      console.log(mobileProducts);
*/
// *******************


// function product(products, category1) {
//     let obj = products[0]
//     for (let product in obj) {
//         console.log(obj[product]);
//         if (obj[product] === category1) {
//             console.log('H')
//             break;
//         }
//         // if (category1 === products > )
//         // console.log(products)
//     }
// }

// product(productData, 'mobile')

// console.log(productData[0].laptop);

// productData.forEach((product) => {
//     console.log(product.laptop);
//     console.log(product.mobile);
// })

// var printObject = function (productData, laptops) {
//     for (var i = 0; i < productData.length; i++) {
//         var printObject2 = Object.keys(productData[i]).length;
//         console.log(printObject2);
//         console.log(typeof productData[i])
//         for (var j = 0; j < productData[i]; j++) {
//             // if (productData[i].laptop[j].laptops === laptops) {
//             //     return productData[i].laptop[j];
//             // }
//         }
//     }
// }

// printObject(productData, 'laptop')
// console.log(productData.length)

// productData.forEach(category => {
//     // Loop through each category (laptop, mobile)
//     Object.keys(category).forEach(cat => {
//         console.log(`Category: ${cat}`);
//         // Loop through each product in the category
//         Object.keys(category[cat]).forEach(productKey => {
//             console.log(productKey, category[cat][productKey]);
//         });
//     });
// });

// console.log(product[category])

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(arr);
// // Math.min(...arr)

/*
function Printmobile(propertymobile, value) {
    for (let mobileId in productData[0].mobile) {
        let mobile = productData[0].mobile[mobileId];
        if (mobile[propertymobile] === value) {
            console.log(mobile);
        }
    }
}
Printmobile('quantity', 8)
Printmobile('name', 'iPhone 16');
*/

// function minmaxvalue() {
//     let arr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

//     let minValue = Math.min(...arr2);
//     let maxValue = Math.max(...arr2)
//     console.log(minValue)
//     console.log(maxValue)
// }
// minmaxvalue();
