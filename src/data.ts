import { Food } from "./app/shared/models/Food";

export const sample_foods: Food[]=[
    {
        id:1,
        name:'Biriyani',
        cookTime:'30',
        price:120,
        favorite:false,
        origins:['India'],
        stars:4.5,
        imageUrl: 'images/Biriyani.jpeg',
        tags:['Lunch']
       },
       {
        id:2,
        name:'Pizza',
        cookTime:'30',
        price:450,
        favorite:true,
        origins:['Italy'],
        stars:4.5,
        imageUrl: 'images/Pizza.jpeg',
        tags:['Italian','Lunch']
       },
       {
        id:3,
        name:'Burger',
        cookTime:'10',
        price:150,
        favorite:true,
        origins:['USA','Germany'],
        stars:4.0,
        imageUrl: 'images/Burger.jpeg',
        tags:['Fastfood']
       },
       {
        id:4,
        name:'Tiramisu',
        cookTime:'5',
        price:250,
        favorite:false,
        origins:['Italy'],
        stars:4.7,
        imageUrl: 'images/Tiramisu.jpeg',
        tags:['Italian','Dessert']
       },
       {
        id:5,
        name:'Infused Chicken',
        cookTime:'30',
        price:900,
        favorite:true,
        origins:['London'],
        stars:4.5,
        imageUrl: 'images/InfusedChicken.jpeg',
        tags:['Sidedish']
       },
       {
        id:6,
        name:'Cake',
        cookTime:'60',
        price:500,
        favorite:true,
        origins:['Greece'],
        stars:4.5,
        imageUrl: 'images/Cake.jpeg',
        tags:['Dessert']
       },
       {
        id:7,
        name:'Icecream',
        cookTime:'10',
        price:200,
        favorite:true,
        origins:['China'],
        stars:4.5,
        imageUrl: 'images/Icecream.jpeg',
        tags:['Dessert']
       },
       {
        id:8,
        name:'Parota',
        cookTime:'20',
        price:100,
        favorite:true,
        origins:['Kerala'],
        stars:4.7,
        imageUrl: 'images/Parota.jpeg',
        tags:['Lunch']
       },
       {
        id:9,
        name:'Pull Me Up',
        cookTime:'15',
        price:250,
        favorite:true,
        origins:['Kerala'],
        stars:4.5,
        imageUrl: 'images/Pullmeup.jpeg',
        tags:['Dessert']
       },
       {
        id:10,
        name:'Sandwich',
        cookTime:'10',
        price:60,
        favorite:false,
        origins:['England'],
        stars:4.0,
        imageUrl: 'images/Sandwich.jpeg',
        tags:['Fastfood']
       }
]