const App = () => {
    return (
        <div className="min-h-screen grid gap-4 place-items-center bg-deepblue">
            <input type="text" placeholder="Search for..."  className="inset-shadow-sm inset-shadow-amber-500 border-4 rounded-sm w-96 h-18 p-4 text-xl text-amber outline-none"/>
            <input type="text" placeholder="Search for..."  className="inset-shadow-sm inset-shadow-amber-500 ring-4 rounded-sm w-96 h-18 p-4 text-xl text-amber outline-none"/>
            <input type="text" placeholder="Search for..."  className="inset-ring-4 inset-ring-amber-500 rounded-sm w-96 h-18 p-4 text-xl text-amber outline-none"/>
        </div>
    )
}
export default App
