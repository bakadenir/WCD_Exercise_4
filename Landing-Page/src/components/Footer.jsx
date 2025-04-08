const Footer = () => {
  return (
    <div className="footer pb-10 bg-black">
        <div className="container mx-auto px-4 pt-5">
            <div className="navbar-box flex items-center justify-between text-white ">
                <div className="logo">
                    <h1 className="font-light">Build with 💖 by Jihan & Deni </h1>
                </div>
                <ul 
                    className="flex gap-12 text-lg"
                >
                    <li>
                        <a href="#" className="font-light">Linkind</a>
                    </li>
                    <li>
                        <a href="#" className="font-light">Twitter</a>
                    </li>
                    <li>
                        <a href="#" className="font-light">Instagram</a>
                    </li>
                    <li>
                        <a href="#" className="font-light">Webflow</a>
                    </li>
                </ul>  
            </div>
        </div>
    </div>
  )
}

export default Footer