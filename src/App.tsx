const App = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 gap-8">
            <div className="bg-linear-45 from-blue-500 to-green-500 p-8 rounded text-2xl font-bold text-white">Angled
                Gradient
            </div>
            <div className="size-64 rounded-full bg-conic-180 from-indigo-600 via-indigo-50 to-indigo-600"></div>
            <div className="bg-radial from-yellow-500 to-red-500 size-64 rounded-full"></div>
        </div>
    )
}
export default App
