// src/Card.jsx

import { FaCogs, FaTools } from "react-icons/fa"

export default function Card({ title, description, price, type, image }) {
  // Color del badge según tipo
  const badgeColor =
    type === "producto" ? "bg-green-200 text-green-800" : "bg-blue-200 text-blue-800"
  // Ícono según tipo
  const Icon = type === "producto" ? FaCogs : FaTools

  return (
    <div className="relative border rounded-2xl bg-white w-full max-w-sm shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-1 mb-8">
      {image && (
        <div className="h-48 w-full overflow-hidden rounded-t-2xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-110 transition duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <Icon className="text-4xl text-green-600" />
          <h2 className="text-2xl font-extrabold text-gray-900">{title}</h2>
        </div>
        <p className="text-gray-700 mb-5">{description}</p>
        {price && (
          <p className="text-lg text-gray-800 font-semibold mb-4">
            Precio: <span className="text-green-700">{price}</span>
          </p>
        )}
        <button className="w-full py-3 bg-green-600 text-white font-semibold rounded-full shadow-md hover:bg-green-700 transition duration-300 mb-4 text-sm sm:text-base">
          Ver más
        </button>
        <span
          className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${badgeColor}`}
        >
          {type === "producto" ? "Producto" : "Servicio"}
        </span>
      </div>
    </div>
  )
}
