const menu = [
	{
		id: 1,
		title: 'buttermilk pancakes',
		category: 'breakfast',
		price: 15.99,
		img:
			'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
		desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `
	},
	{
		id: 2,
		title: 'diner double',
		category: 'lunch',
		price: 13.99,
		img: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `
	},
	{
		id: 3,
		title: 'godzilla milkshake',
		category: 'shakes',
		price: 6.99,
		img: 'https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`
	},
	{
		id: 4,
		title: 'country delight',
		category: 'breakfast',
		price: 20.99,
		img: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `
	},
	{
		id: 5,
		title: 'egg attack',
		category: 'lunch',
		price: 22.99,
		img: 'https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `
	},
	{
		id: 6,
		title: 'oreo dream',
		category: 'shakes',
		price: 18.99,
		img: 'https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`
	},
	{
		id: 7,
		title: 'bacon overflow',
		category: 'breakfast',
		price: 8.99,
		img: 'https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `
	},
	{
		id: 8,
		title: 'american classic',
		category: 'lunch',
		price: 12.99,
		img: 'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `
	},
	{
		id: 9,
		title: 'quarantine buddy',
		category: 'shakes',
		price: 16.99,
		img: 'https://images.pexels.com/photos/3951901/pexels-photo-3951901.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
	},
	{
		id: 10,
		title: 'steak dinner',
		category: 'dinner',
		price: 39.99,
		img: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`
	}
];

const sectionCenter = document.querySelector('.section-center');
const filterContainer = document.querySelector('.btn-container');

export const displayMenuItems = (menuItems) => {
	let displayMenu = menuItems.map((item) => {
		return `<article class="menu-item">
                    <img src="${item.img}" alt="menu item" class="photo" />
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </header>
                        <p class="item-text">
                           ${item.desc}
                        </p>
                    </div>
                </article>`;
	});
	displayMenu = displayMenu.join('');
	sectionCenter.innerHTML = displayMenu;
};

// display menu only if user is on the menu page
if (sectionCenter) {
	displayMenuItems(menu);

	// filter menus
	filterContainer.addEventListener('click', (e) => {
		let category = e.target.dataset.id;
		let menuItems = menu.filter((item) => {
			return item.category === category;
		});

		if (category === 'all') {
			displayMenuItems(menu);
		} else {
			displayMenuItems(menuItems);
		}
	});
}
