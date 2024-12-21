import { award01, award02, award03, award05 } from './images'

const wines = [
    {
        title: 'Chapel Hill Shiraz',
        price: '$56',
        tags: 'AU | Bottle',
    },
    {
        title: 'Catena Malbee',
        price: '$59',
        tags: 'AU | Bottle',
    },
    {
        title: 'La Vieillw Rose',
        price: '$44',
        tags: 'FR | 750 ml',
    },
    {
        title: 'Rhino Pale Ale',
        price: '$31',
        tags: 'CA | 750 ml',
    },
    {
        title: 'Irish Guinness',
        price: '$26',
        tags: 'IE | 750 ml',
    },
]

const cocktails = [
    {
        title: 'Aperol Sprtiz',
        price: '$20',
        tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
    },
    {
        title: "Dark 'N' Stormy",
        price: '$16',
        tags: 'Dark rum | Ginger beer | Slice of lime',
    },
    {
        title: 'Daiquiri',
        price: '$10',
        tags: 'Rum | Citrus juice | Sugar',
    },
    {
        title: 'Old Fashioned',
        price: '$31',
        tags: 'Bourbon | Brown sugar | Angostura Bitters',
    },
    {
        title: 'Negroni',
        price: '$26',
        tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
    },
]

const awards = [
    {
        imgUrl: award02,
        title: 'Bib Gourmand',
        subtitle: 'Recognized for exceptional food at moderate prices, showcasing culinary artistry.',
    },
    {
        imgUrl: award01,
        title: 'Rising Star',
        subtitle: 'Celebrating the next generation of culinary talent and innovation.',
    },
    {
        imgUrl: award05,
        title: 'AA Hospitality',
        subtitle: 'Awarded for outstanding service, ambiance, and guest experience.',
    },
    {
        imgUrl: award03,
        title: 'Outstanding Chef',
        subtitle: 'Honoring excellence in culinary skills and leadership in the kitchen.',
    },
];


export { 
    wines, 
    cocktails, 
    awards 
}