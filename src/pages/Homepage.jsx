function Homepage() {
  const bestSellers = [
    {
      name: 'Filet Mignon',
      price: 'Php. 1391',
      desc: 'Pan grilled 250 grams tenderloin served with potato puree, french beans and peppercorn sauce',
      img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=500',
    },
    {
      name: 'Truffle Pasta',
      price: 'Php. 890',
      desc: 'Fresh tagliatelle tossed in creamy truffle sauce with parmesan shavings',
      img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500',
    },
    {
      name: 'Wagyu Pizza',
      price: 'Php. 990',
      desc: 'Thin crust pizza topped with wagyu beef, onions and mozzarella',
      img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[420px] py-10 flex flex-col items-center justify-center text-center overflow-hidden">       
         <img
          src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1600"
          alt="Restaurant interior"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-neutral-900 flex items-center justify-center mb-4 bg-white/70">
          <span className="text-2xl md:text-4xl">🦁</span>
          </div>
         <h1 className="text-3xl md:text-5xl font-serif tracking-[0.2em] md:tracking-[0.3em] text-neutral-900">EURASIA</h1>
         <p className="text-sm md:text-lg font-serif tracking-[0.3em] md:tracking-[0.5em] text-neutral-700 mt-1">RESTAURANT</p>
         <p className="mt-4 md:mt-6 text-xs md:text-base text-neutral-800 font-serif px-6">
          5th Floor ARADA VIRTUCIO Building, Banay-Banay, San Jose, Batangas
          </p>
          <p className="text-xs md:text-base text-neutral-800 font-serif px-6">
            [Weekdays] 11:00am-10:00pm &nbsp;|&nbsp; [Weekends] 10:00am-10:00pm
            </p>
        </div>
      </div>

      {/* Best Seller Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px flex-1 bg-neutral-300" />
          <h2 className="text-xl font-serif font-bold tracking-wide text-neutral-900">BEST SELLER</h2>
          <div className="h-px flex-1 bg-neutral-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((item, i) => (
            <div key={i} className="border border-neutral-200 p-5 flex flex-col">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-serif font-bold">{item.name}</h3>
              </div>
              <p className="text-sm font-semibold text-neutral-700 mb-3">{item.price}</p>
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-full mb-4"
              />
              <p className="text-sm text-neutral-600 text-center mb-4 flex-1">{item.desc}</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-neutral-900 text-white py-2 text-sm font-semibold hover:bg-neutral-800">
                  Buy Now
                </button>
                <button className="flex-1 bg-neutral-200 text-neutral-900 py-2 text-sm font-semibold hover:bg-neutral-300">
                  Add to Tray
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Homepage