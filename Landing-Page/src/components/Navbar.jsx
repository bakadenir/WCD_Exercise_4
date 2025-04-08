import { useEffect, useState } from "react";

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [scroll, setScroll] = useState(false);

    const handleClick = () => {
        setShow(!show);
        // console.log(show);
    };

    let menuActive = show ? "right-0" : "-right-full";

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 5) {
                setScroll(true);
                setShow(false);
            } else {
                setScroll(false);
            }
        });
    });

    let scrollActive = scroll ? "py-4 bg-white" : "py-4";

  return (
    <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
        <div className="container mx-auto px-4">
            <div className="navbar-box flex items-center justify-between">
                <div className="logo">
                    <h1 className="font-light">@bakadenir</h1>
                </div>
                <ul 
                    className={`flex gap-12 text-lg md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:transition-none fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded shadow-lg shadow-slate-300 bg-neutral-900 font-bold text-white transition-all`}
                >
                    <li>
                        <a href="#" className="font-light">About</a>
                    </li>
                    <li>
                        <a href="#" className="font-light">Work</a>
                    </li>
                    <li>
                        <a href="#" className="font-light">Contact</a>
                    </li>
                </ul>
                <i className="ri-menu-3-line md:hidden block" onClick={handleClick}></i>       
            </div>
        </div>
    </div>
  )
}

export default Navbar