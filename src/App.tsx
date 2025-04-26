const App = () => {
    return (
        <div className="@container border p-4">
            <div className="flex gap-4">
                <div className="bg-blue-500 h-40 w-64"></div>
                <div className="bg-green-500 h-40 w-64 @min-md:@max-xl:hidden"></div>
                <div className="bg-red-500 h-40 w-64"></div>
            </div>
        </div>
    )
}
export default App
