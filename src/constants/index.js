export const categories = [
    {
        id: 1,
        name: 'Pizza',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 2,
        name: 'Burger',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 3,
        name: 'Italian',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 4,
        name: 'Chinese',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 6,
        name: 'Sweets',
        image: require('../assets/images/pizzaIcon.png'),
    },

]


export const featured = [
    {
        id: 1,
        title: 'Hot and Spicy',
        description: 'soft and tender fried chicken',
        restaurants: [
            {
                id: 1,
                name: 'Pizza Hunt',
                image: require('../assets/restaurent/r1.jpg'),
                description: 'Hot and spicy pizzas',
                lng: -85.5324269,
                lat: 38.2145602,
                address: '434 second street',
                stars: 4,
                reviews: '4.4k',
                category: 'Fast Food',
                imgUrl :"https://i.ibb.co/https://i.ibb.co/zXXDy55/r3.jpggwwvsmZ/lol.jpg",
    
                dishes: [
                    {
                       id: 1,
                       name: 'Margherita Pizza',
                       description: ' Classic pizza with fresh mozzarella, tomatoes, and basil',
                       price: 10,
                       image:  require('../assets/pizza/p1.jpg')
                    },
                    {
                       id: 2,
                       name: 'Pepperoni Pizza',
                       description: 'Classic burger with melted cheddar cheese',
                       price: 13,
                       image:  require('../assets/pizza/p2.jpg')
                    },
                    {
                       id: 3,
                       name: 'Hawaiian Pizza',
                       description: 'Pizza with ham, pineapple, and cheese',
                       price: 10,
                       image:  require('../assets/pizza/p3.jpg')
                    },
                    {
                        id :4,
                        name: "Classic Burger",
                        description: "Juicy beef patty with lettuce, tomato, onion, and special sauce",
                        price: 12,
                        image:require('../assets/burger/bur1.jpg')
                      },
                      {
                        id :5,
                        name: "Cheeseburger",
                        description: "Classic burger with melted cheddar cheese",
                        price: 14,
                        image:require('../assets/burger/b2.jpg')
                      },
                    
                ]
        
            },
            {
                id: 2,
                name: 'Bellam Non veg',
                image: require('../assets/restaurent/r2.jpg'),
                description: 'Hot and spicy pizzas',
                lng: -85.5324269,
                lat: 38.2145602,
                address: 'Lower parel',
                stars: 4,
                reviews: '4.4k',
                category: 'Fast Food',
                dishes: [
                    {
                       id: 1,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                    {
                       id: 2,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                    {
                       id: 3,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                ]
        
            },
            {
                id: 3,
                name: 'Shrushti',
                image: require('../assets/restaurent/r3.jpg'),
                description: 'Hot and spicy pizzas',
                lng: -85.5324269,
                lat: 38.2145602,
                address: '434 Dadar',
                stars: 4,
                reviews: '4.4k',
                category: 'Dinner',
                imgUrl :"https://i.ibb.co/https://i.ibb.co/zXXDy55/r3.jpggwwvsmZ/lol.jpg",
                dishes: [ 
                    {
                       id: 1,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                    {
                       id: 2,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                    {
                       id: 3,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                ]
        
            }
        ]
    },
    {
        id: 2,
        title: 'Fine Dinning',
        description: 'soft and tender fried chicken',
        restaurants: [
            {
                id: 1,
                name: 'Gods',
                image: require('../assets/restaurent/d1.jpg'),
                description: 'Veg and Non veg',
                lng: -85.5324269,
                lat: 38.2145602,
                address: 'lower parel east',
                stars: 3,
                reviews: '4.1k',
                category: 'Dinnig',
                imgUrl :"https://i.ibb.co/https://i.ibb.co/zXXDy55/r3.jpggwwvsmZ/lol.jpg",
    
                dishes: [
                    {
                       id: 1,
                       name: 'Margherita Pizza',
                       description: ' Classic pizza with fresh mozzarella, tomatoes, and basil',
                       price: 10,
                       image:  require('../assets/pizza/p1.jpg')
                    },
                    {
                       id: 2,
                       name: 'Pepperoni Pizza',
                       description: 'Classic burger with melted cheddar cheese',
                       price: 13,
                       image:  require('../assets/pizza/p2.jpg')
                    },
                    {
                       id: 3,
                       name: 'Hawaiian Pizza',
                       description: 'Pizza with ham, pineapple, and cheese',
                       price: 10,
                       image:  require('../assets/pizza/p3.jpg')
                    },
                    {
                        id :4,
                        name: "Classic Burger",
                        description: "Juicy beef patty with lettuce, tomato, onion, and special sauce",
                        price: 12,
                        image:require('../assets/burger/bur1.jpg')
                      },
                      {
                        id :5,
                        name: "Cheeseburger",
                        description: "Classic burger with melted cheddar cheese",
                        price: 14,
                        image:require('../assets/burger/b2.jpg')
                      },
                    
                ]
        
            },
            {
                id: 2,
                name: 'Bellam Non veg',
                image: require('../assets/restaurent/d2.jpg'),
                description: 'Hot and spicy pizzas',
                lng: -85.5324269,
                lat: 38.2145602,
                address: 'Lower parel',
                stars: 4,
                reviews: '4.4k',
                category: 'Fast Food',
                dishes: [
                    {
                       id: 1,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                    {
                       id: 2,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                    {
                       id: 3,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                ]
        
            },
            {
                id: 3,
                name: 'Shrushti',
                image: require('../assets/restaurent/d3.jpg'),
                description: 'Hot and spicy pizzas',
                lng: -85.5324269,
                lat: 38.2145602,
                address: '434 Dadar',
                stars: 4,
                reviews: '4.4k',
                category: 'Dinner',
                imgUrl :"https://i.ibb.co/https://i.ibb.co/zXXDy55/r3.jpggwwvsmZ/lol.jpg",
                dishes: [ 
                    {
                       id: 1,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                    {
                       id: 2,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                    {
                       id: 3,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                ]
        
            }
        ]
    },
    {
        id: 3,
        title: 'Cafes and Coffee Shops',
        description: 'soft and tender fried chicken',
        restaurants: [
            {
                id: 1,
                name: 'Gods',
                image: require('../assets/restaurent/d1.jpg'),
                description: 'Veg and Non veg',
                lng: -85.5324269,
                lat: 38.2145602,
                address: 'lower parel east',
                stars: 3,
                reviews: '4.1k',
                category: 'Dinnig',
                imgUrl :"https://i.ibb.co/https://i.ibb.co/zXXDy55/r3.jpggwwvsmZ/lol.jpg",
    
                dishes: [
                    {
                       id: 1,
                       name: 'Margherita Pizza',
                       description: ' Classic pizza with fresh mozzarella, tomatoes, and basil',
                       price: 10,
                       image:  require('../assets/pizza/p1.jpg')
                    },
                    {
                       id: 2,
                       name: 'Pepperoni Pizza',
                       description: 'Classic burger with melted cheddar cheese',
                       price: 13,
                       image:  require('../assets/pizza/p2.jpg')
                    },
                    {
                       id: 3,
                       name: 'Hawaiian Pizza',
                       description: 'Pizza with ham, pineapple, and cheese',
                       price: 10,
                       image:  require('../assets/pizza/p3.jpg')
                    },
                    {
                        id :4,
                        name: "Classic Burger",
                        description: "Juicy beef patty with lettuce, tomato, onion, and special sauce",
                        price: 12,
                        image:require('../assets/burger/bur1.jpg')
                      },
                      {
                        id :5,
                        name: "Cheeseburger",
                        description: "Classic burger with melted cheddar cheese",
                        price: 14,
                        image:require('../assets/burger/b2.jpg')
                      },
                    
                ]
        
            },
            {
                id: 2,
                name: 'Bellam Non veg',
                image: require('../assets/restaurent/d2.jpg'),
                description: 'Hot and spicy pizzas',
                lng: -85.5324269,
                lat: 38.2145602,
                address: 'Lower parel',
                stars: 4,
                reviews: '4.4k',
                category: 'Fast Food',
                dishes: [
                    {
                       id: 1,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                    {
                       id: 2,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                    {
                       id: 3,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                ]
        
            },
            {
                id: 3,
                name: 'Shrushti',
                image: require('../assets/restaurent/d3.jpg'),
                description: 'Hot and spicy pizzas',
                lng: -85.5324269,
                lat: 38.2145602,
                address: '434 Dadar',
                stars: 4,
                reviews: '4.4k',
                category: 'Dinner',
                imgUrl :"https://i.ibb.co/https://i.ibb.co/zXXDy55/r3.jpggwwvsmZ/lol.jpg",
                dishes: [ 
                    {
                       id: 1,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                    {
                       id: 2,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                    {
                       id: 3,
                       name: 'pizza',
                       description: 'cheezy garlic pizza',
                       price: 10,
                       image:  require('../assets/images/pizzaDish.png')
                    },
                ]
        
            }
        ]
    }
    
]
