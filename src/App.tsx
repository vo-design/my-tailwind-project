const App = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <ul className="space-y-4 text-center">
                <li className="bg-gray-200 p-4 rounded text-lg not-active:bg-red-500">Item 1</li>
                <li className="active bg-gray-200 p-4 rounded text-lg">Item 2</li>
                <li className="bg-gray-200 p-4 rounded text-lg not-active:bg-red-500">Item 3</li>
            </ul>
        </div>
    )
}
export default App
