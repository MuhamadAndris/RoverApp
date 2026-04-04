import type { Product } from "./types/product"
import type { TransactionReportByDate } from "@/types/report"
import type { Transaction } from "./types/transaction"

export const simulasiApiTransactions:Transaction[] = [
        {
            id: "0E1-2601001",
            storeId: "0E1",
            svpUserId: "2405004",
            agentSalesByUserId: "2212010",
            createdByUserId: "2212010",
            createdAt: new Date(2026,1,1),
            updatedAt: new Date(2026,1,1),
            totalAmount: 1195000,
            totalQty: 2,
            items: [
                {
                    id: "0E1-2601001-001",
                    productId: "071253123",
                    brand: "Lojel",
                    name: "CUBO",
                    color: "RED",
                    size: "SMALL",
                    qty: 1,
                    normalPrice: 100000,
                    finalPrice: 1090000,
                    img: [{
                        id: 1,
                        url: "samplel url",
                        isPrimary: true
                    }],
                    promo: {
                        id: 45,
                        type: "buy_x_get_y",
                        value: 1200000,
                        label: "Buy 1 Get 1"
                    }
                },

                {
                    id: "itms-sample-2",
                    productId: "971253555",
                    brand: "Lojel",
                    name: "cubo",
                    color: "red",
                    size: "small",
                    qty: 10,
                    normalPrice: 1195000,
                    finalPrice: 1090000,
                    img: [{
                        id: 1,
                        url: "samplel url",
                        isPrimary: true
                    }],
                    promo: {
                        id: 45,
                        type: "percentage",
                        value: 10
                    }
                },
            ]
        },
        {
            id: "0E1-2601002",
            storeId: "0E1",
            svpUserId: "2405005",
            agentSalesByUserId: "2212011",
            createdByUserId: "2212011",
            createdAt: new Date(2026,1,2),
            updatedAt: new Date(2026,1,2),
            totalAmount: 850000,
            totalQty: 3,
            items: [
                {
                    id: "0E1-2601002-001",
                    productId: "071253124",
                    brand: "Lojel",
                    name: "CUBO PRO",
                    color: "BLUE",
                    size: "LARGE",
                    qty: 2,
                    normalPrice: 300000,
                    finalPrice: 270000,
                    img: [{
                        id: 2,
                        url: "sample url 2",
                        isPrimary: true
                    }],
                    promo: {
                        id: 46,
                        type: "percentage",
                        value: 10
                    }
                },
                {
                    id: "0E1-2601002-002",
                    productId: "071253125",
                    brand: "Lojel",
                    name: "CUBO MINI",
                    color: "GREEN",
                    size: "SMALL",
                    qty: 1,
                    normalPrice: 250000,
                    finalPrice: 225000,
                    img: [{
                        id: 3,
                        url: "sample url 3",
                        isPrimary: true
                    }],
                    promo: {
                        id: 47,
                        type: "normal_price",
                        value: 25000
                    }
                }
            ]
        },
        {
            id: "0E1-2601003",
            storeId: "0E1",
            svpUserId: "2405006",
            agentSalesByUserId: "2212012",
            createdByUserId: "2212012",
            createdAt: new Date(2026,1,3),
            updatedAt: new Date(2026,1,3),
            totalAmount: 1500000,
            totalQty: 5,
            items: [
                {
                    id: "0E1-2601003-001",
                    productId: "071253126",
                    brand: "Lojel",
                    name: "CUBO MAX",
                    color: "BLACK",
                    size: "XL",
                    qty: 3,
                    normalPrice: 400000,
                    finalPrice: 360000,
                    img: [{
                        id: 4,
                        url: "sample url 4",
                        isPrimary: true
                    }],
                    promo: {
                        id: 48,
                        type: "percentage",
                        value: 10
                    }
                },
                {
                    id: "0E1-2601003-002",
                    productId: "071253127",
                    brand: "Lojel",
                    name: "CUBO LITE",
                    color: "WHITE",
                    size: "MEDIUM",
                    qty: 2,
                    normalPrice: 350000,
                    finalPrice: 315000,
                    img: [{
                        id: 5,
                        url: "sample url 5",
                        isPrimary: true
                    }],
                    promo: {
                        id: 49,
                        type: "buy_x_get_y",
                        value: 700000,
                        label: "Buy 2 Get 1"
                    }
                }
            ]
        },
        {
            id: "0E1-2601004",
            storeId: "0E1",
            svpUserId: "2405007",
            agentSalesByUserId: "2212013",
            createdByUserId: "2212013",
            createdAt: new Date(2026,1,4),
            updatedAt: new Date(2026,1,4),
            totalAmount: 600000,
            totalQty: 2,
            items: [
                {
                    id: "0E1-2601004-001",
                    productId: "071253128",
                    brand: "Lojel",
                    name: "CUBO SPORT",
                    color: "YELLOW",
                    size: "LARGE",
                    qty: 1,
                    normalPrice: 300000,
                    finalPrice: 270000,
                    img: [{
                        id: 6,
                        url: "sample url 6",
                        isPrimary: true
                    }],
                    promo: {
                        id: 50,
                        type: "percentage",
                        value: 10
                    }
                },
                {
                    id: "0E1-2601004-002",
                    productId: "071253129",
                    brand: "Lojel",
                    name: "CUBO URBAN",
                    color: "GRAY",
                    size: "MEDIUM",
                    qty: 1,
                    normalPrice: 330000,
                    finalPrice: 297000,
                    img: [{
                        id: 7,
                        url: "sample url 7",
                        isPrimary: true
                    }],
                    promo: {
                        id: 51,
                        type: "normal_price",
                        value: 33000
                    }
                }
            ]
        },
        {
            id: "0E1-2601005",
            storeId: "0E1",
            svpUserId: "2405008",
            agentSalesByUserId: "2212014",
            createdByUserId: "2212014",
            createdAt: new Date(2026,1,5),
            updatedAt: new Date(2026,1,5),
            totalAmount: 2000000,
            totalQty: 4,
            items: [
                {
                    id: "0E1-2601005-001",
                    productId: "071253130",
                    brand: "Lojel",
                    name: "CUBO PREMIUM",
                    color: "SILVER",
                    size: "XL",
                    qty: 2,
                    normalPrice: 500000,
                    finalPrice: 450000,
                    img: [{
                        id: 8,
                        url: "sample url 8",
                        isPrimary: true
                    }],
                    promo: {
                        id: 52,
                        type: "percentage",
                        value: 10
                    }
                },
                {
                    id: "0E1-2601005-002",
                    productId: "071253131",
                    brand: "Lojel",
                    name: "CUBO DELUXE",
                    color: "GOLD",
                    size: "LARGE",
                    qty: 2,
                    normalPrice: 550000,
                    finalPrice: 495000,
                    img: [{
                        id: 9,
                        url: "sample url 9",
                        isPrimary: true
                    }],
                    promo: {
                        id: 53,
                        type: "buy_x_get_y",
                        value: 1100000,
                        label: "Buy 1 Get 1"
                    }
                }
            ]
        }
    ]

export const simulasiApiDataPoroducts:Product[] = [
    {
        id: "971253111",
        color: "ROSE",
        name: "CUBO REFRESH",
        size: "MEDIUM",
        img: [
            {
                id:1,
                url: "https://via.placeholder.com/200?text=Cubo",
                title: "gambar bagian depan",
                isPrimary: true
            },
        ],
        normalPrice: 500000,
        promo: {
            id: 1,
            type: "percentage",
            value: 10
        },
        finalPrice: 450000,
        brand: "lojel"
    },
    {
        id: "971253112",
        color: "BLUE",
        name: "CUBO PRO",
        size: "LARGE",
        img: [
            {
                id:2,
                url: "https://via.placeholder.com/200?text=Cubo+Pro",
                title: "gambar bagian depan",
                isPrimary: true
            },
        ],
        normalPrice: 600000,
        promo: {
            id: 2,
            type: "percentage",
            value: 15
        },
        finalPrice: 510000,
        brand: "lojel"
    },
    {
        id: "971253113",
        color: "GREEN",
        name: "CUBO MINI",
        size: "SMALL",
        img: [
            {
                id:3,
                url: "https://via.placeholder.com/200?text=Cubo+Mini",
                title: "gambar bagian depan",
                isPrimary: true
            },
        ],
        normalPrice: 400000,
        promo: {
            id: 3,
            type: "normal_price",
            value: 50000
        },
        finalPrice: 350000,
        brand: "lojel"
    },
    {
        id: "971253114",
        color: "BLACK",
        name: "CUBO MAX",
        size: "XL",
        img: [
            {
                id:4,
                url: "https://via.placeholder.com/200?text=Cubo+Max",
                title: "gambar bagian depan",
                isPrimary: true
            },
        ],
        normalPrice: 700000,
        promo: {
            id: 4,
            type: "percentage",
            value: 20
        },
        finalPrice: 560000,
        brand: "lojel"
    },
    {
        id: "971253115",
        color: "WHITE",
        name: "CUBO LITE",
        size: "MEDIUM",
        img: [
            {
                id:5,
                url: "https://via.placeholder.com/200?text=Cubo+Lite",
                title: "gambar bagian depan",
                isPrimary: true
            },
        ],
        normalPrice: 450000,
        promo: {
            id: 5,
            type: "buy_x_get_y",
            value: 900000,
            label: "Buy 2 Get 1"
        },
        finalPrice: 450000,
        brand: "lojel"
    },
    {
        id: "971253116",
        color: "YELLOW",
        name: "CUBO SPORT",
        size: "LARGE",
        img: [
            {
                id:6,
                url: "https://via.placeholder.com/200?text=Cubo+Sport",
                title: "gambar bagian depan",
                isPrimary: true
            },
        ],
        normalPrice: 550000,
        promo: {
            id: 6,
            type: "percentage",
            value: 10
        },
        finalPrice: 495000,
        brand: "lojel"
    },
    {
        id: "971253117",
        color: "GRAY",
        name: "CUBO URBAN",
        size: "MEDIUM",
        img: [
            {
                id:7,
                url: "https://via.placeholder.com/200?text=Cubo+Urban",
                title: "gambar bagian depan",
                isPrimary: true
            },
        ],
        normalPrice: 480000,
        promo: {
            id: 7,
            type: "normal_price",
            value: 48000
        },
        finalPrice: 432000,
        brand: "lojel"
    },
    {
        id: "971253118",
        color: "SILVER",
        name: "CUBO PREMIUM",
        size: "XL",
        img: [
            {
                id:8,
                url: "https://via.placeholder.com/200?text=Cubo+Premium",
                title: "gambar bagian depan",
                isPrimary: true
            },
        ],
        normalPrice: 800000,
        promo: {
            id: 8,
            type: "percentage",
            value: 12
        },
        finalPrice: 704000,
        brand: "lojel"
    },
    {
        id: "971253119",
        color: "GOLD",
        name: "CUBO DELUXE",
        size: "LARGE",
        img: [
            {
                id:9,
                url: "https://via.placeholder.com/200?text=Cubo+Deluxe",
                title: "gambar bagian depan",
                isPrimary: true
            },
        ],
        normalPrice: 900000,
        promo: {
            id: 9,
            type: "buy_x_get_y",
            value: 1800000,
            label: "Buy 1 Get 1"
        },
        finalPrice: 900000,
        brand: "lojel"
    },
    {
        id: "971253120",
        color: "PURPLE",
        name: "CUBO ELITE",
        size: "SMALL",
        img: [
            {
                id:10,
                url: "https://via.placeholder.com/200?text=Cubo+Elite",
                title: "gambar bagian depan",
                isPrimary: true
            },
        ],
        normalPrice: 650000,
        promo: {
            id: 10,
            type: "percentage",
            value: 15
        },
        finalPrice: 552500,
        brand: "lojel"
    }
]

export const simulasiApiLaporanTransaksi:TransactionReportByDate[] = [
    {  
        date: new Date(2026,2,1),
        transactions: [
            {
                saler: "andris",
                id: "0E1-2603001",
                items: [
                    {
                        id: "0E1-2603001-001",
                        productId: "971253111",
                        brand: "lojel",
                        name: "CUBO REFRESH",
                        color: "ROSE",
                        size: "MEDIUM",
                        qty: 2,
                        finalPrice: 450000,
                        total: 900000,
                        promo: {
                            type: "percentage",
                            value: 10
                        }
                    },
                    {
                        id: "0E1-2603001-002",
                        productId: "971253112",
                        brand: "lojel",
                        name: "CUBO PRO",
                        color: "BLUE",
                        size: "LARGE",
                        qty: 3,
                        finalPrice: 510000,
                        total: 1530000,
                        promo: {
                            type: "percentage",
                            value: 15
                        }
                    },
                ]
            },
        ]
    },
    {  
        date: new Date(2026,2,2),
        transactions: [{
            saler: "rijal",
            id: "0E1-2603002",
            items: [{
                id: "0E1-2603002-001",
                productId: "971253113",
                brand: "lojel",
                name: "CUBO MINI",
                color: "GREEN",
                size: "SMALL",
                qty: 4,
                finalPrice: 350000,
                total: 1400000,
                promo: {
                    type: "normal_price",
                    value: 50000
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,3),
        transactions: [{
            saler: "andris",
            id: "0E1-2603003",
            items: [{
                id: "0E1-2603003-001",
                productId: "971253114",
                brand: "lojel",
                name: "CUBO MAX",
                color: "BLACK",
                size: "XL",
                qty: 3,
                finalPrice: 560000,
                total: 1680000,
                promo: {
                    type: "percentage",
                    value: 20
                }
            },
            {
                id: "0E1-2603003-002",
                productId: "971253115",
                brand: "lojel",
                name: "CUBO LITE",
                color: "WHITE",
                size: "MEDIUM",
                qty: 3,
                finalPrice: 450000,
                total: 1350000,
                promo: {
                    type: "buy_x_get_y",
                    value: 900000,
                    label: "Buy 2 Get 1"
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,4),
        transactions: [{
            saler: "rijal",
            id: "0E1-2603004",
            items: [{
                id: "0E1-2603004-001",
                productId: "971253116",
                brand: "lojel",
                name: "CUBO SPORT",
                color: "YELLOW",
                size: "LARGE",
                qty: 5,
                finalPrice: 495000,
                total: 2475000,
                promo: {
                    type: "percentage",
                    value: 10
                }
            },
            {
                id: "0E1-2603004-002",
                productId: "971253117",
                brand: "lojel",
                name: "CUBO URBAN",
                color: "GRAY",
                size: "MEDIUM",
                qty: 2,
                finalPrice: 432000,
                total: 864000,
                promo: {
                    type: "normal_price",
                    value: 48000
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,5),
        transactions: [{
            saler: "andris",
            id: "0E1-2603005",
            items: [{
                id: "0E1-2603005-001",
                productId: "971253118",
                brand: "lojel",
                name: "CUBO PREMIUM",
                color: "SILVER",
                size: "XL",
                qty: 4,
                finalPrice: 704000,
                total: 2816000,
                promo: {
                    type: "percentage",
                    value: 12
                }
            },
            {
                id: "0E1-2603005-002",
                productId: "971253119",
                brand: "lojel",
                name: "CUBO DELUXE",
                color: "GOLD",
                size: "LARGE",
                qty: 4,
                finalPrice: 900000,
                total: 3600000,
                promo: {
                    type: "buy_x_get_y",
                    value: 1800000,
                    label: "Buy 1 Get 1"
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,6),
        transactions: [{
            saler: "rijal",
            id: "0E1-2603006",
            items: [{
                id: "0E1-2603006-001",
                productId: "971253120",
                brand: "lojel",
                name: "CUBO ELITE",
                color: "PURPLE",
                size: "SMALL",
                qty: 1,
                finalPrice: 552500,
                total: 552500,
                promo: {
                    type: "percentage",
                    value: 15
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,7),
        transactions: []
    },
    {  
        date: new Date(2026,2,8),
        transactions: [{
            saler: "andris",
            id: "0E1-2603008",
            items: [{
                id: "0E1-2603008-001",
                productId: "971253111",
                brand: "lojel",
                name: "CUBO REFRESH",
                color: "ROSE",
                size: "MEDIUM",
                qty: 5,
                finalPrice: 450000,
                total: 2250000,
                promo: {
                    type: "percentage",
                    value: 10
                }
            },
            {
                id: "0E1-2603008-002",
                productId: "971253112",
                brand: "lojel",
                name: "CUBO PRO",
                color: "BLUE",
                size: "LARGE",
                qty: 5,
                finalPrice: 510000,
                total: 2550000,
                promo: {
                    type: "percentage",
                    value: 15
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,9),
        transactions: [{
            saler: "rijal",
            id: "0E1-2603009",
            items: [{
                id: "0E1-2603009-001",
                productId: "971253113",
                brand: "lojel",
                name: "CUBO MINI",
                color: "GREEN",
                size: "SMALL",
                qty: 5,
                finalPrice: 350000,
                total: 1750000,
                promo: {
                    type: "normal_price",
                    value: 50000
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,10),
        transactions: []
    },
    {  
        date: new Date(2026,2,11),
        transactions: [{
            saler: "andris",
            id: "0E1-2603011",
            items: [{
                id: "0E1-2603011-001",
                productId: "971253114",
                brand: "lojel",
                name: "CUBO MAX",
                color: "BLACK",
                size: "XL",
                qty: 6,
                finalPrice: 560000,
                total: 3360000,
                promo: {
                    type: "percentage",
                    value: 20
                }
            },
            {
                id: "0E1-2603011-002",
                productId: "971253115",
                brand: "lojel",
                name: "CUBO LITE",
                color: "WHITE",
                size: "MEDIUM",
                qty: 6,
                finalPrice: 450000,
                total: 2700000,
                promo: {
                    type: "buy_x_get_y",
                    value: 900000,
                    label: "Buy 2 Get 1"
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,12),
        transactions: [{
            saler: "rijal",
            id: "0E1-2603012",
            items: [{
                id: "0E1-2603012-001",
                productId: "971253116",
                brand: "lojel",
                name: "CUBO SPORT",
                color: "YELLOW",
                size: "LARGE",
                qty: 7,
                finalPrice: 495000,
                total: 3465000,
                promo: {
                    type: "percentage",
                    value: 10
                }
            },
            {
                id: "0E1-2603012-002",
                productId: "971253117",
                brand: "lojel",
                name: "CUBO URBAN",
                color: "GRAY",
                size: "MEDIUM",
                qty: 2,
                finalPrice: 432000,
                total: 864000,
                promo: {
                    type: "normal_price",
                    value: 48000
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,13),
        transactions: []
    },
    {  
        date: new Date(2026,2,14),
        transactions: [{
            saler: "andris",
            id: "0E1-2603014",
            items: [{
                id: "0E1-2603014-001",
                productId: "971253118",
                brand: "lojel",
                name: "CUBO PREMIUM",
                color: "SILVER",
                size: "XL",
                qty: 4,
                finalPrice: 704000,
                total: 2816000,
                
                promo: {
                    type: "percentage",
                    value: 12
                }
            },
            {
                id: "0E1-2603014-002",
                productId: "971253119",
                brand: "lojel",
                name: "CUBO DELUXE",
                color: "GOLD",
                size: "LARGE",
                qty: 4,
                finalPrice: 900000,
                total: 3600000,
                promo: {
                    type: "buy_x_get_y",
                    value: 1800000,
                    label: "Buy 1 Get 1"
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,15),
        transactions: [{
            saler: "rijal",
            id: "0E1-2603015",
            items: [{
                id: "0E1-2603015-001",
                productId: "971253120",
                brand: "lojel",
                name: "CUBO ELITE",
                color: "PURPLE",
                size: "SMALL",
                qty: 1,
                finalPrice: 552500,
                total: 552500,
                promo: {
                    type: "percentage",
                    value: 15
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,16),
        transactions: [{
            saler: "andris",
            id: "0E1-2603016",
            items: [{
                id: "0E1-2603016-001",
                productId: "971253111",
                brand: "lojel",
                name: "CUBO REFRESH",
                color: "ROSE",
                size: "MEDIUM",
                qty: 3,
                finalPrice: 450000,
                total: 1350000,
                
                promo: {
                    type: "percentage",
                    value: 10
                }
            },
            {
                id: "0E1-2603016-002",
                productId: "971253112",
                brand: "lojel",
                name: "CUBO PRO",
                color: "BLUE",
                size: "LARGE",
                qty: 3,
                finalPrice: 510000,
                total: 1530000,
                promo: {
                    type: "percentage",
                    value: 15
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,17),
        transactions: [{
            saler: "rijal",
            id: "0E1-2603017",
            items: [{
                id: "0E1-2603017-001",
                productId: "971253113",
                brand: "lojel",
                name: "CUBO MINI",
                color: "GREEN",
                size: "SMALL",
                qty: 5,
                finalPrice: 350000,
                total: 1750000,
                promo: {
                    type: "normal_price",
                    value: 50000
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,18),
        transactions: []
    },
    {  
        date: new Date(2026,2,19),
        transactions: [{
            saler: "andris",
            id: "0E1-2603019",
            items: [{
                id: "0E1-2603019-001",
                productId: "971253114",
                brand: "lojel",
                name: "CUBO MAX",
                color: "BLACK",
                size: "XL",
                qty: 6,
                finalPrice: 560000,
                total: 3360000,
                promo: {
                    type: "percentage",
                    value: 20
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,20),
        transactions: [{
            saler: "rijal",
            id: "0E1-2603020",
            items: [{
                id: "0E1-2603020-001",
                productId: "971253115",
                brand: "lojel",
                name: "CUBO LITE",
                color: "WHITE",
                size: "MEDIUM",
                qty: 6,
                finalPrice: 450000,
                total: 2700000,
                promo: {
                    type: "buy_x_get_y",
                    value: 900000,
                    label: "Buy 2 Get 1"
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,21),
        transactions: [{
            saler: "andris",
            id: "0E1-2603021",
            items: [{
                id: "0E1-2603021-001",
                productId: "971253116",
                brand: "lojel",
                name: "CUBO SPORT",
                color: "YELLOW",
                size: "LARGE",
                qty: 7,
                finalPrice: 495000,
                total: 3465000,
                promo: {
                    type: "percentage",
                    value: 10
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,22),
        transactions: [{
            saler: "rijal",
            id: "0E1-2603022",
            items: [{
                id: "0E1-2603022-001",
                productId: "971253117",
                brand: "lojel",
                name: "CUBO URBAN",
                color: "GRAY",
                size: "MEDIUM",
                qty: 2,
                finalPrice: 432000,
                total: 864000,
                promo: {
                    type: "normal_price",
                    value: 48000
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,23),
        transactions: []
    },
    {  
        date: new Date(2026,2,24),
        transactions: [{
            saler: "andris",
            id: "0E1-2603024",
            items: [{
                id: "0E1-2603024-001",
                productId: "971253118",
                brand: "lojel",
                name: "CUBO PREMIUM",
                color: "SILVER",
                size: "XL",
                qty: 4,
                finalPrice: 704000,
                total: 2816000,
                promo: {
                    type: "percentage",
                    value: 12
                }
            },
            {
                id: "0E1-2603024-002",
                productId: "971253119",
                brand: "lojel",
                name: "CUBO DELUXE",
                color: "GOLD",
                size: "LARGE",
                qty: 4,
                finalPrice: 900000,
                total: 3600000,
                promo: {
                    type: "buy_x_get_y",
                    value: 1800000,
                    label: "Buy 1 Get 1"
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,25),
        transactions: [{
            saler: "rijal",
            id: "0E1-2603025",
            items: [{
                id: "0E1-2603025-001",
                productId: "971253120",
                brand: "lojel",
                name: "CUBO ELITE",
                color: "PURPLE",
                size: "SMALL",
                qty: 1,
                finalPrice: 552500,
                total: 552500,
                promo: {
                    type: "percentage",
                    value: 15
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,26),
        transactions: [{
            saler: "andris",
            id: "0E1-2603026",
            items: [{
                id: "0E1-2603026-001",
                productId: "971253111",
                brand: "lojel",
                name: "CUBO REFRESH",
                color: "ROSE",
                size: "MEDIUM",
                qty: 4,
                finalPrice: 450000,
                total: 1800000,
                promo: {
                    type: "percentage",
                    value: 10
                }
            },
            {
                id: "0E1-2603026-002",
                productId: "971253112",
                brand: "lojel",
                name: "CUBO PRO",
                color: "BLUE",
                size: "LARGE",
                qty: 4,
                finalPrice: 510000,
                total: 2040000,
                promo: {
                    type: "percentage",
                    value: 15
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,27),
        transactions: [{
            saler: "rijal",
            id: "0E1-2603027",
            items: [{
                id: "0E1-2603027-001",
                productId: "971253113",
                brand: "lojel",
                name: "CUBO MINI",
                color: "GREEN",
                size: "SMALL",
                qty: 5,
                finalPrice: 350000,
                total: 1750000,
                promo: {
                    type: "normal_price",
                    value: 50000
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,28),
        transactions: []
    },
    {  
        date: new Date(2026,2,29),
        transactions: [{
            saler: "andris",
            id: "0E1-2603029",
            items: [{
                id: "0E1-2603029-001",
                productId: "971253114",
                brand: "lojel",
                name: "CUBO MAX",
                color: "BLACK",
                size: "XL",
                qty: 6,
                finalPrice: 560000,
                total: 3360000,
                promo: {
                    type: "percentage",
                    value: 20
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,30),
        transactions: [{
            saler: "rijal",
            id: "0E1-2603030",
            items: [{
                id: "0E1-2603030-001",
                productId: "971253115",
                brand: "lojel",
                name: "CUBO LITE",
                color: "WHITE",
                size: "MEDIUM",
                qty: 6,
                finalPrice: 450000,
                total: 2700000,
                promo: {
                    type: "buy_x_get_y",
                    value: 900000,
                    label: "Buy 2 Get 1"
                }
            }]
        }]
    },
    {  
        date: new Date(2026,2,31),
        transactions: [{
            saler: "andris",
            id: "0E1-2603031",
            items: [{
                id: "0E1-2603031-001",
                productId: "971253116",
                brand: "lojel",
                name: "CUBO SPORT",
                color: "YELLOW",
                size: "LARGE",
                qty: 7,
                finalPrice: 495000,
                total: 3465000,
                promo: {
                    type: "percentage",
                    value: 10
                }
            }]
        }]
    },
]