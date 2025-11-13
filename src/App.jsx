import { useState } from 'react'

function App() {
  const [email, setEmail] = useState('')

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-40 bg-white/70 backdrop-blur border-b border-neutral-200/70">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-serif text-2xl tracking-tight">Maison Aurelia</a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#collections" className="hover:text-neutral-900 transition-colors">Collections</a>
            <a href="#story" className="hover:text-neutral-900 transition-colors">Our Story</a>
            <a href="#atelier" className="hover:text-neutral-900 transition-colors">Atelier</a>
            <a href="#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm border border-neutral-300 rounded-full hover:border-neutral-900 transition-colors">Sign In</button>
            <button className="px-4 py-2 text-sm rounded-full bg-neutral-900 text-white hover:bg-black transition-colors">Shop</button>
          </div>
          <div className="md:hidden text-sm">Menu</div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1920&auto=format&fit=crop"
          alt="Tailored suit"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 h-full mx-auto max-w-7xl px-6 flex flex-col justify-end pb-24">
          <div className="max-w-2xl">
            <p className="text-neutral-100/80 uppercase tracking-[0.25em] text-xs mb-4">Est. 1972 • London</p>
            <h1 className="font-serif text-white text-5xl sm:text-6xl leading-tight">
              Quiet Luxury, Tailored to Perfection
            </h1>
            <p className="mt-4 text-neutral-100/90 leading-relaxed">
              Heritage craftsmanship meets modern restraint. Timeless silhouettes in noble fabrics, made to be worn for decades.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#collections" className="px-6 py-3 rounded-full bg-white text-neutral-900 font-medium hover:bg-neutral-100 transition-colors">Shop New Arrivals</a>
              <a href="#story" className="px-6 py-3 rounded-full border border-white/70 text-white hover:bg-white/10 transition-colors">Explore Heritage</a>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collection */}
      <section id="collections" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl">Signature Collection</h2>
              <p className="mt-2 text-neutral-600">Foundational pieces that anchor the old‑money wardrobe.</p>
            </div>
            <a href="#" className="hidden sm:inline-block text-sm underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-800">View all</a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              title: 'The Savile Jacket',
              img: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1600&auto=format&fit=crop',
              price: '£890'
            },{
              title: 'Cashmere Crew',
              img: 'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600&auto=format&fit=crop',
              price: '£520'
            },{
              title: 'Oxford Shirt',
              img: 'https://images.unsplash.com/photo-1520975682031-ae2d2c8c9f6f?q=80&w=1600&auto=format&fit=crop',
              price: '£240'
            }].map((item, i) => (
              <a key={i} href="#" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100">
                  <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-neutral-600">Maison Essentials</p>
                  </div>
                  <p className="text-sm">{item.price}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Story */}
      <section id="story" className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1601397210737-a5534480bdc5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBdGVsaWVyfGVufDB8MHx8fDE3NjMwMTU0OTJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Atelier" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="uppercase tracking-[0.25em] text-xs text-neutral-600">Our Story</p>
            <h3 className="mt-3 font-serif text-3xl sm:text-4xl leading-tight">A Heritage of Discretion</h3>
            <p className="mt-4 text-neutral-700 leading-relaxed">
              Born on a quiet Mayfair street, Maison Aurelia has dressed generations who favour understatement over spectacle. Each garment is cut in limited runs using Italian and British mills, finished by hand in our London atelier.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div>
                <p className="font-serif text-3xl">50+</p>
                <p className="text-xs text-neutral-600">Years Crafting</p>
              </div>
              <div>
                <p className="font-serif text-3xl">12</p>
                <p className="text-xs text-neutral-600">Master Tailors</p>
              </div>
              <div>
                <p className="font-serif text-3xl">98%</p>
                <p className="text-xs text-neutral-600">Natural Fibres</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Atelier Strip */}
      <section id="atelier" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-2xl border border-neutral-200 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[320px]">
                <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1920&auto=format&fit=crop" alt="Hand finishing" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="p-8 sm:p-12">
                <h4 className="font-serif text-2xl">The Atelier</h4>
                <p className="mt-3 text-neutral-700 leading-relaxed">Every seam considered. Every lining chosen with intent. Our atelier combines time‑honoured techniques with modern precision to create garments of quiet confidence.</p>
                <div className="mt-6 flex gap-3">
                  <a href="#" className="px-5 py-2.5 rounded-full bg-neutral-900 text-white hover:bg-black transition-colors">Book a Fitting</a>
                  <a href="#" className="px-5 py-2.5 rounded-full border border-neutral-300 hover:border-neutral-900 transition-colors">Discover Process</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h5 className="font-serif text-2xl">Join the Ledger</h5>
          <p className="mt-3 text-neutral-700">Access private releases, trunk shows, and seasonal editorials. No noise. Ever.</p>
          <form className="mt-6 max-w-xl mx-auto flex gap-3" onSubmit={(e)=>e.preventDefault()}>
            <input
              type="email"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 px-4 py-3 rounded-full border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-900/10"
            />
            <button className="px-6 py-3 rounded-full bg-neutral-900 text-white hover:bg-black transition-colors">Subscribe</button>
          </form>
          <p className="mt-3 text-xs text-neutral-500">By subscribing, you agree to receive communications from Maison Aurelia.</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <p className="font-serif text-xl">Maison Aurelia</p>
            <p className="mt-3 text-neutral-600">Savile Row, London</p>
            <p className="text-neutral-600">Concierge: +44 20 1234 5678</p>
          </div>
          <div>
            <p className="font-medium">Collection</p>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li><a href="#">Tailoring</a></li>
              <li><a href="#">Knitwear</a></li>
              <li><a href="#">Shirting</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Maison</p>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Atelier</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <p className="font-medium">Legal</p>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-200 py-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Maison Aurelia. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
