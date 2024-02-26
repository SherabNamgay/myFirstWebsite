export default function UrlShortner(){
    return(
        <>
        <div className="text-center">
				<h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
					URL shortner
				</h1>
				<input 
                type="text"
                name="URL"
                id= "urlInput"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Enter your URL">
                </input>
                
			</div>
        </>
    )
}