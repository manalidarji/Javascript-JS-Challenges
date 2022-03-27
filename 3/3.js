const menu = [
    {
        name: 'Spagetti & Meatballs',
        isVeg: false
    },
    {
        name: 'Tiramisu',
        isVeg: true
    },
    {
        name: 'Chicken Parmesan',
        isVeg: false
    },
    {
        name: 'Stuffed Potatoes',
        isVeg: true
    }
];

const vegMenu = menu.filter(item => item.isVeg);

console.log('Veg Menu is ready', vegMenu);