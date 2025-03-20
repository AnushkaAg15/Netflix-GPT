import Header from "./Header"
const Login = () => {
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img 
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg"
                    alt="logo"
                />
            </div>
            <form className="m-3/12 absolute p-12 bg-black mx-auto right-0 left-0 text-white">
                <h1 className="font-bold text-3xl py-4">Sign In</h1>
                <input type="text" placeholder="Email Address" className="p-2 my-2 w-full" />
                <input type="text" placeholder="Password" className="p-2 my-2 w-full" />
                <button className="p-4 my-4 bg-red-700 w-full">Submit</button>
            </form>
        </div>
    )
}

export default Login