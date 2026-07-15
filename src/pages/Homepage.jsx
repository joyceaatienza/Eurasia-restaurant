import logo from '../assets/logopic2.png'
import bg from '../assets/bg.jpg'
import { useRef } from "react";

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

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({
        left: direction === "next" ? amount : -amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] flex flex-col items-center justify-center text-center overflow-hidden">
        <img src={bg} alt="Restaurant interior" className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/60" />

        <div className="relative z-10 flex flex-col items-center">
         <img src={logo} alt="Eurasia Restaurant" className="w-64 md:w-96 h-auto mb-6 md:mb-8" />
         <p className="mt-4 md:mt-6 text-xs md:text-base text-[#1d080f] font-serif px-6">
          5th Floor ARADA VIRTUCIO Building, Banay-Banay, San Jose, Batangas
          </p>
          <p className="text-xs md:text-base text-[#1d080f] font-serif px-6">
            [Weekdays] 11:00am-10:00pm &nbsp;|&nbsp; [Weekends] 10:00am-10:00pm
            </p>
        </div>
      </div>

      {/* Best Seller Section */}
      <div className="max-w-6xl mx-auto px-6 py-11">
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px flex-1 bg-neutral-300" />
          <h2 className="text-7xl font-serif font-bold tracking-wide text-[#1d080f]">BEST SELLER</h2>
          <div className="h-px flex-1 bg-neutral-300" />
        </div>

        <div className="relative">
          {/* Prev Arrow */}
          <button
            onClick={() => scroll("prev")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 shadow-md w-10 h-10 rounded-full hover:bg-white transition flex items-center justify-center text-xl"
          >
            ‹
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {bestSellers.map((item, i) => (
              <div
                key={i}
                className="relative min-w-[320px] h-[420px] flex-shrink-0 rounded-lg overflow-hidden group"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-serif font-semibold mb-1">{item.name}</h3>
                  <p className="text-sm text-neutral-200">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={() => scroll("next")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 shadow-md w-10 h-10 rounded-full hover:bg-white transition flex items-center justify-center text-xl"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  )
}

export default Homepage