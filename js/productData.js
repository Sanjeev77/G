// Product Data - Replace with your actual affiliate links
// All products with category and price information
const allProductsData = [
    {
        "id": 7002,
        "title": "Baby Einstein Sea Dreams Soother Musical Crib Toy and Sound Machine, Newborn and up",
        "price": "$34.92",
        "priceValue": 34.92,
        "category": "toys-games",
        "image": "https://m.media-amazon.com/images/I/712HQvdzQhL._AC_SX679_.jpg",
        "rating": 4.6,
        "affiliateLink": "https://www.amazon.com/Baby-Einstein-Soother-Melodies-Newborns/dp/B07DM86Z43/ref=sr_1_2?tag=giftonbudget-21&tag=giftonbudget-21&dib=eyJ2IjoiMSJ9.uJ_i6WelILtgzVJ4sU3DEP52nd-9jYJ-y9nRI5Ui0C4XyqoxD_oah7XQ0F3oyrcHc8T7bnNhIIVSS-JmSOhYs7Yu0XJiLfyOJ9GIPunl219ZbS0XES5XfnfodbBb3B7uPA6awGkyuzoX_Noa7O8Nz2U8eD0xQ9YOvbYWr-rB1fflJzkCitNGl89IfIqJXaM937nV8pvKUN3cVpg5t7DGzwnxkmnV1TdYjuND4zragMkHKDkYcD7Gyqdkcg795FSK1sr-59fGF-Mn85bi053-JdbIS4rpPZYL61JypuNNTcU.HBqJYzUCRqo11u8h5GHWUR1ESGFcEinsPB9P3XUe4D4&dib_tag=se&keywords=toys&qid=1757858897&sr=8-2&th=1",
        "featured": false
    },
    {
        "id": 7003,
        "title": "Transformable Fidget Spinners 4 Pcs for Kids and Adults Stress Relief Sensory Toys for Boys and Girls Fingertip Gyros for Party Favors Stocking Stuffers Bulk for Kids",
        "price": "$9.98",
        "priceValue": 9.98,
        "category": "toys-games",
        "image": "https://m.media-amazon.com/images/I/71mr6NdQE4L._AC_SX679_.jpg",
        "rating": 4.6,
        "affiliateLink": "https://www.amazon.com/Transformable-Spinners-Sensory-Fingertip-Valentines/dp/B09LMBLYF1/ref=sr_1_1?dib=eyJ2IjoiMSJ9.UBI0TyBZyB2AP776C2M_juAiI1HAziIdmO78uGiaRknFTyaYu5r2CRKqW2kddbOB5xned4vRWKNnKl9vwfwL678HcE5JDkd3EaYlkItUNTRS-UnnQ9oj-j8J_modEOTW0Yp6OQApfFHe9885G4Z3OfiDzQozUwxPyax7Yw4tPiHAtidMyeArbUkkWMLY7TGrzEliMNJHZWUh8fV-ssQ-rUZw8DYJLyGEgp9euVD2u3tvNoBLDssZ4nNKZ1wpQzLcsHljBbOghnWXySauf12VLGHyQaoDACbOT7SC9_NXqSE.tb4FEcjS4MHmJ1QC8OHcIAsetqJwAH_jfnht0UeIjpw&dib_tag=se&keywords=toys&qid=1757864046&refinements=p_36%3A-1000%2Cp_n_g-1004151746091%3A5442388011&rnid=165794011&s=toys-and-games&sr=1-1&th=1&tag=giftonbudget-21",
        "featured": false
    },
    {
        "id": 7004,
        "title": "Schylling NeeDoh Original - Sensory Fidget Toy - Assorted Colors - Ages 3 to Adult , 1 Count ( Pack of 1)",
        "price": "$4",
        "priceValue": 4,
        "category": "toys-games",
        "image": "https://m.media-amazon.com/images/I/71iQbLmlBrL._AC_SX679_.jpg",
        "rating": 4,
        "affiliateLink": "https://www.amazon.com/Schylling-Stress-Colors-Shipped-Randomly/dp/B076FGVCRH/ref=sr_1_2?dib=eyJ2IjoiMSJ9.UBI0TyBZyB2AP776C2M_juAiI1HAziIdmO78uGiaRknFTyaYu5r2CRKqW2kddbOB5xned4vRWKNnKl9vwfwL678HcE5JDkd3EaYlkItUNTRS-UnnQ9oj-j8J_modEOTW0Yp6OQApfFHe9885G4Z3OfiDzQozUwxPyax7Yw4tPiHAtidMyeArbUkkWMLY7TGrzEliMNJHZWUh8fV-ssQ-rUZw8DYJLyGEgp9euVD2u3tvNoBLDssZ4nNKZ1wpQzLcsHljBbOghnWXySauf12VLGHyQaoDACbOT7SC9_NXqSE.tb4FEcjS4MHmJ1QC8OHcIAsetqJwAH_jfnht0UeIjpw&dib_tag=se&keywords=toys&qid=1757864046&refinements=p_36%3A-1000%2Cp_n_g-1004151746091%3A5442388011&rnid=165794011&s=toys-and-games&sr=1-2&tag=giftonbudget-21",
        "featured": false
    },
    {
        "id": 7005,
        "title": "Toddler Boys Construction Truck Vehicle Toy Set with Play Mat and Die-Cast Toy Car, Transport Carrier Truck for Kids 3-5, Birthday Gifts Toys for 3-8 Year Old Boys",
        "price": "$28.02",
        "priceValue": 28.02,
        "category": "toys-games",
        "image": "https://m.media-amazon.com/images/I/812xnV-V-GL._AC_SX679_.jpg",
        "rating": 4.1,
        "affiliateLink": "https://www.amazon.com/NIPLOOOW-Toddler-Construction-Die-Cast-Birthday/dp/B0D7M51TRB/ref=sr_1_10?dib=eyJ2IjoiMSJ9.vHlNFP2KRluifVJJb9qIrtUzWRnVloch8dklKEqLeJccYnIOzX-hHXp9HU0jOWyzJ31Hq6l65xlpOW7j0oTD8etDXXTD7Cj7xGZIcu7auuJW1u63Gp6QBjpq6Jvb6wpzaQkTaKt1yMdaRwi94NPcX-xID_HZInEnxLyDswLjPMSsDij7Q63abiAf19X_qnr8EvZNr4bImJ6w3Fcad9JdWFyWPcRbMHB_i3s8SW8z-Rzd303DsF7Be57imgsmqm_bpSRKxK5ILkzkXcSz2eSyzJ-muyoK6uGbnSoKZVjAUto.vc_K7EuzPBmnArxlIhsaxCw6lycYb6Q1jUVk1ZAWnLo&dib_tag=se&keywords=toys&qid=1757947391&refinements=p_n_g-1004151746091%3A5442388011&rnid=165794011&sr=8-10&tag=giftonbudget-21",
        "featured": false
    }
];

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = allProductsData;
}