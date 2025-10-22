const navLinks = [
  {
    id: "cocktails",
    title: "Cocktails",
  },
  {
    id: "about",
    title: "À propos",
  },
  {
    id: "art",
    title: "L'Art",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const cocktailLists = [
	{
		name: "Chapel Hill Shiraz",
		country: "Australie",
		detail: "Bouteille",
		price: "6 500 FCFA",
	},
	{
		name: "Caten Malbee",
		country: "Argentine",
		detail: "Bouteille",
		price: "32 000 FCFA",
	},
	{
		name: "Rhino Pale Ale",
		country: "Canada",
		detail: "750 ml",
		price: "13 000 FCFA",
	},
	{
		name: "Irish Guinness",
		country: "Irlande",
		detail: "600 ml",
		price: "19 000 FCFA",
	},
];

const mockTailLists = [
	{
		name: "Éclosion Tropicale",
		country: "États-Unis",
		detail: "Bouteille",
		price: "6 500 FCFA",
	},
	{
		name: "Passion - Menthe",
		country: "États-Unis",
		detail: "Bouteille",
		price: "32 000 FCFA",
	},
	{
		name: "Éclat d’Agrumes",
		country: "Canada",
		detail: "750 ml",
		price: "13 000 FCFA",
	},
	{
		name: "Fleur de Lavande",
		country: "Irlande",
		detail: "600 ml",
		price: "19 000 FCFA",
	},
];



const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
	"Mélanges parfaitement équilibrés",
	"Garnis à la perfection",
	"Toujours servis bien frais",
	"Agités et mélangés avec expertise",
];

const goodLists = [
	"Ingrédients soigneusement sélectionnés",
	"Techniques signatures uniques",
	"L’art du bartending en action",
	"Saveurs fraîchement infusées",
];

const storeInfo = {
	heading: "Où nous trouver",
	address: "456, Boulevard des Saveurs, Cotonou, Bénin",
	contact: {
		phone: "+229 61 23 45 67",
		email: "contact@barleparadis.com",
	},
};

const openingHours = [
	{ day: "Lun–Jeu", time: "11h00 – 00h00" },
	{ day: "Ven", time: "11h00 – 02h00" },
	{ day: "Sam", time: "09h00 – 02h00" },
	{ day: "Dim", time: "09h00 – 01h00" },
];


const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];


const allCocktails = [
	{
		id: 1,
		name: "Mojito Classique",
		image: "/images/drink1.png",
		title: "Ingrédients simples, saveur audacieuse",
		description:
			"Préparée avec de la tequila, du jus de citron vert et de la liqueur d’orange, la Margarita est facile à réaliser et pleine de caractère. Ajoute un bord salé pour la boisson parfaite lors des soirées d’été.",
	},
	{
		id: 2,
		name: "Mojito à la Framboise",
		image: "/images/drink2.png",
		title: "Un classique acidulé qui ne déçoit jamais",
		description:
			"La Margarita est un grand classique qui équilibre le citron vert acidulé, la tequila douce et une touche de sucre. Secouée, glacée ou sur glace — elle reste toujours fraîche et désaltérante.",
	},
	{
		id: 3,
		name: "Brise Violette",
		image: "/images/drink3.png",
		title: "Ingrédients simples, saveur audacieuse",
		description:
			"Préparée avec de la tequila, du jus de citron vert et de la liqueur d’orange, la Margarita est facile à réaliser et pleine de caractère. Ajoute un bord salé pour la boisson parfaite lors des soirées d’été.",
	},
	{
		id: 4,
		name: "Mojito Curaçao",
		image: "/images/drink4.png",
		title: "Préparé avec soin, servi avec amour",
		description:
			"Chaque cocktail est préparé avec des ingrédients frais et une passion pour la perfection de chaque gorgée, que ce soit pour une célébration ou un simple moment de détente.",
	},
];


export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};
