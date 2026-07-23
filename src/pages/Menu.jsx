import { useState } from 'react'
import heroImage from '../assets/bgHero.jpg'
import logo from '../assets/logoword.png'
import trayIcon from '../assets/tray-icon.png'

const categories = [
  'Best Sellers',
  'Appetizers',
  'Main Courses',
  'Salad',
  'Pasta',
  'Noodles',
  'Veggies & Rice',
  'Sandwiches',
  'Pizza',
  'Kids Menu',
  'Dessert',
  "Chef's Special",
  'Beverage',
]

// Replace with real data — move to its own file (e.g. src/data/menuItems.js) once you're ready
const menuItems = [
  {
    id: 1,
    name: 'Filet Mignon',
    flags: '🇮🇹🐄🐷',
    description: 'Pan grilled 250 grams tenderloin served with potato puree, french beans and peppercorn sauce',
    price: 1391,
    image: '/menu/filet-mignon.jpg',
    category: 'Best Sellers',
  },
  {
    id: 2,
    name: 'Tom Ka Ghai',
    flags: '🇹🇭🐔',
    description: 'Thai coconut soup with chicken, galangal, and lemongrass',
    price: 288,
    image: '/menu/tom-ka-ghai.jpg',
    category: 'Appetizers',
  },
  {
    id: 3,
    name: 'Salpicao',
    flags: '🇵🇭🐄',
    description: 'Cubed beef sauteed in garlic, butter, and soy sauce',
    price: 690,
    image: '/menu/salpicao.jpg',
    category: 'Main Courses',
  },
  {
    id: 4,
    name: 'Tutto Mare',
    flags: '🇮🇹🦐',
    description: 'Seafood pasta in a light white wine tomato sauce',
    price: 578,
    image: '/menu/tutto-mare.jpg',
    category: 'Pasta',
  },
  {
    id: 5,
    name: 'Strawberry Yogurt Smoothie',
    flags: '🍓',
    description: 'Fresh strawberries blended with yogurt and honey',
    price: 200,
    image: '/menu/strawberry-smoothie.jpg',
    category: 'Beverage',
  },
]

function Menu() {
  const [activeCategory, setActiveCategory] = useState(categories[0])
  const filteredItems = menuItems.filter((item) => item.category === activeCategory)

  return (
    // CHANGE 1: Turn outer container into flex flex-col min-h-screen
    <div className="min-h-screen flex flex-col bg-white text-[#1d080f]">
      
      {/* Hero */}
      <div className="relative h-64 md:h-80 overflow-hidden shrink-0">
        <img src={heroImage} alt="" className="absolute inset-0 w-full h-60 object-cover" />
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative h-full flex items-start justify-center pt-16 md:pt-20 px-4">
          <img src={logo} alt="Eurasia Restaurant" className="h-24 md:h-36 w-auto" />
        </div>
      </div>

      {/* Sidebar + grid */}
      {/* CHANGE 2: Add flex-1 to this section so it stretches to fill remaining space */}
      <div className="px-6 md:px-10 py-10 flex flex-col md:flex-row gap-10 flex-1">
        <aside className="md:w-56 shrink-0">
          <nav className="flex md:flex-col gap-1 overflow-x-auto md:overflow-visible md:sticky md:top-24 font-heading">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative whitespace-nowrap text-left px-4 py-2.5 rounded-md text-sm md:text-base transition-colors ${
                  cat === activeCategory
                    ? 'bg-[#1d080f] text-white font-bold'
                    : 'text-neutral-500 hover:bg-neutral-100 hover:text-[#1d080f]'
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="border border-neutral-200 rounded-lg overflow-hidden flex flex-col"
              >
                <div className="p-4 pb-0">
                  <h3 className="font-heading text-lg font-bold">
                    {item.name} <span className="text-base align-middle">{item.flags}</span>
                  </h3>
                  <p className="font-bold mt-1">Php. {item.price}</p>
                </div>

                <img src={item.image} alt={item.name} className="h-40 w-full object-cover mt-3" />

                <div className="p-4 flex flex-col flex-1">
                  <p className="text-sm text-neutral-500 text-center leading-relaxed flex-1">
                    {item.description}
                  </p>

                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-[#1d080f] text-white text-sm py-2 rounded-md hover:opacity-90">
                      Buy Now
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-1.5 border border-neutral-300 text-sm py-2 rounded-md hover:bg-neutral-100">
                      <img src={trayIcon} alt="" className="h-4 w-4" />
                      Add to Tray
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredItems.length === 0 && (
              <p className="text-neutral-400 col-span-full text-center py-12">
                No items in this category yet.
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}

export default Menu