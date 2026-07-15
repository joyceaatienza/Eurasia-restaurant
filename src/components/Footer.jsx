function Footer() {
  return (
    <footer className="bg-[#1d080f] text-white px-6 md:px-16 py-2">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">

        {/* Contact Us */}
        <div className="flex flex-col items-center">
          <h3 className="text-xs font-serif font-bold mb-3">Contact Us</h3>
          <div className="grid grid-cols-2 gap-x-10 gap-y-2">
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
              </svg>
              <span className="font-serif text-xs ">Eurasia</span>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.3 2.6 3.4 4.7 6 6l2-2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.8c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z" />
              </svg>
              <span className="font-serif text-xs ">0927 012 4998</span>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span className="font-serif text-xs ">eurasiarestaurant_</span>
            </div>

            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m3 6 9 7 9-7" />
              </svg>
              <a href="mailto:eurasiarestaurant01@gmail.com" className="font-serif text-xs underline hover:text-amber-300">
                eurasiarestaurant01@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Feedback */}
        <div className="flex flex-col items-center">
          <h3 className="text-xs font-serif font-bold mb-3">Give your feedback</h3>
          <a href="#"
          className="border border-amber-300 text-amber-300 rounded-full px-5 py-1 text-xs font-serif hover:bg-amber-300 hover:text-neutral-900 transition"
          >
            Feedback
            </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer