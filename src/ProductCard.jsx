export default function ProductCard() {
  return (
    <div className="border rounded-xl shadow-md p-5 bg-white w-full sm:w-80 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-bold text-green-600 mb-2">Plataforma de Monitoreo Inteligente</h2>
      <p className="text-gray-700 text-sm">
        Sistema con sensores IoT que permite el monitoreo en tiempo real de residuos. Mejora eficiencia, reduce costos y cumple regulaciones.
      </p>
      <p className="mt-4 text-sm text-gray-500">Desde <span className="font-bold text-green-700">$199/mes</span></p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Ver más
      </button>
    </div>
  )
}
