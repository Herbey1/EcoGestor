// src/App.jsx

import { useState } from "react"
import {
  FaGlobeAmericas,
  FaFacebookSquare,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa"
import { SiX } from "react-icons/si"
import { catalogItems } from "./data.js"
import Card from "./Card.jsx"

export default function App() {
  const [search, setSearch] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Filtrar items por búsqueda
  const filteredItems = catalogItems.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )
  const productos = filteredItems.filter((i) => i.type === "producto")
  const servicios = filteredItems.filter((i) => i.type === "servicio")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulación de envío
    console.log("Enviado:", { name, email, message })
    setSubmitted(true)
    // Limpiar campos
    setName("")
    setEmail("")
    setMessage("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  return (
    <div className="bg-white text-gray-900 font-sans">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 sm:mb-12 relative z-30">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <FaGlobeAmericas className="text-green-700" size={40} />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-green-800 select-none">
              EcoGestor
            </h2>
          </div>

          {/* Botón hamburguesa (solo en pantallas < sm) */}
          <button
            onClick={toggleMenu}
            className="sm:hidden text-2xl text-gray-700 hover:text-green-700 focus:outline-none bg-transparent p-2 rounded"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Menú horizontal en pantallas ≥ sm */}
          <nav className="hidden sm:flex items-center space-x-8 font-semibold text-base">
            {["productos", "servicios", "about", "contacto"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="
                  relative group
                  text-gray-700 hover:text-green-700
                  after:content-[''] after:absolute after:bottom-0 after:left-0
                  after:h-0.5 after:w-0 after:bg-green-700
                  after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>

          {/* Menú desplegable en pantallas < sm */}
          <nav
            className={`
              absolute top-full left-0 right-0 bg-white shadow-lg
              transform origin-top transition-transform duration-300
              ${menuOpen ? "scale-y-100" : "scale-y-0"}
              sm:hidden flex flex-col items-center space-y-2 py-4
              font-semibold text-base
            `}
          >
            {["productos", "servicios", "about", "contacto"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setMenuOpen(false)}
                className="
                  text-gray-700 hover:text-green-700
                  px-4 py-2 w-full text-center
                  border-b last:border-b-0
                  border-gray-200
                "
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>
        </header>

        {/* Buscador */}
        <div className="max-w-lg mx-auto mb-8 sm:mb-12">
          <input
            type="text"
            placeholder="Buscar producto o servicio..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-green-400 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-gray-900 placeholder-gray-500 text-sm sm:text-base shadow-md focus:outline-none focus:ring-2 focus:ring-green-600"
          />
        </div>

        {/* Sección de resultados de búsqueda: Productos */}
        <section
          id="productos"
          className="mb-12 sm:mb-16 py-6 sm:py-8 bg-gray-100 rounded-xl px-4 sm:px-6"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-700 mb-4 sm:mb-6">
            Productos
          </h2>
          {productos.length > 0 ? (
            <div className="grid gap-4 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {productos.map(({ id, type, title, description, price, image }) => (
                <Card
                  key={id}
                  type={type}
                  title={title}
                  description={description}
                  price={price}
                  image={image}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 italic">No se encontraron productos.</p>
          )}
        </section>

        {/* Sección de resultados de búsqueda: Servicios */}
        <section
          id="servicios"
          className="mb-12 sm:mb-16 py-6 sm:py-8 bg-gray-50 rounded-xl px-4 sm:px-6"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 mb-4 sm:mb-6">
            Servicios
          </h2>
          {servicios.length > 0 ? (
            <div className="grid gap-4 sm:gap-8 md:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {servicios.map(({ id, type, title, description, price, image }) => (
                <Card
                  key={id}
                  type={type}
                  title={title}
                  description={description}
                  price={price}
                  image={image}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 italic">No se encontraron servicios.</p>
          )}
        </section>

        {/* Sección de Video de presentación (tamaño ajustado al ancho de la página) */}
        <section id="video" className="mb-16 sm:mb-20 px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-700 mb-6 text-center">
            Conoce EcoGestor en acción
          </h2>
          <div className="mx-auto w-full">
            <video
              src="/videos/EcoGestor.mp4"
              controls
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </section>

        {/* Sección “Sobre EcoGestor” */}
        <section
          id="about"
          className="mb-16 sm:mb-20 py-8 sm:py-12 px-4 sm:px-6 text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
            ¿Qué es EcoGestor?
          </h2>
          <p className="max-w-lg sm:max-w-2xl mx-auto text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
            EcoGestor es una plataforma integral de gestión de residuos que combina
            sensores IoT, optimización de rutas mediante IA y un panel de control
            con analítica avanzada. Nuestro objetivo es ayudar a municipios y
            empresas a reducir costos, mejorar la eficiencia operativa y cumplir con
            las normativas ambientales de manera sencilla e intuitiva.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#productos"
              className="bg-green-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-green-700 transition text-sm sm:text-base"
            >
              Conoce más
            </a>
            <a
              href="#contacto"
              className="bg-green-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:bg-green-700 transition text-sm sm:text-base"
            >
              Contáctanos
            </a>
          </div>
        </section>

        {/* Sección Contacto con formulario */}
        <section
          id="contacto"
          className="mb-16 sm:mb-20 py-8 sm:py-12 bg-green-50 rounded-xl px-4 sm:px-6"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800 mb-6 sm:mb-8">
            Contacto
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-6">
            Para más información, escríbenos a{" "}
            <strong>contacto@ecogestor.com</strong>.
          </p>
          <form
            onSubmit={handleSubmit}
            className="max-w-md sm:max-w-lg mx-auto flex flex-col gap-4"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white border border-green-400 rounded-full px-4 py-2 text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white border border-green-400 rounded-full px-4 py-2 text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full bg-white border border-green-400 rounded-lg px-4 py-2 text-gray-900 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-full shadow-md hover:bg-green-700 transition text-sm sm:text-base"
            >
              Enviar
            </button>
            {submitted && (
              <p className="text-center text-green-800 text-sm sm:text-base mt-2">
                ¡Tu mensaje ha sido enviado!
              </p>
            )}
          </form>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-8 px-4 sm:px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6">
            <p className="text-sm sm:text-base">© 2025 EcoGestor. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a
                href="https://x.com/EcoGestor4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-green-400 transition"
                aria-label="X (Twitter) EcoGestor"
              >
                <SiX />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61576314706859"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-green-400 transition"
                aria-label="Facebook EcoGestor"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/ecogestor-gestor-897541366/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-green-400 transition"
                aria-label="LinkedIn EcoGestor"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xs sm:text-sm mb-2">Política de privacidad | Términos y condiciones</p>
            <p className="text-xs sm:text-sm">Hecho con ♥ por el equipo de EcoGestor</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
