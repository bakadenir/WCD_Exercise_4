const Content = () => {
  return (
    <div className="about pt-10">
        <div className="container mx-auto px-4">
            <div className="about grid md:grid-cols-2 grid-cols-1 item center gap-10 pb-20 pt-20">
                <div className="box font-medium text-2xl">
                    <h1>About</h1>
                </div>
                <div className="box font-light">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                </div>
            </div>
            <div className="recent grid md:grid-cols-2 grid-cols-1 item center gap-10 pb-20 pt-20">
                <div className="box font-medium text-2xl">
                    <h1>Recent</h1>
                </div>
                <div className="box font-light">
                    <h1 className="text-4xl">Decodable.com</h1>
                    <br />
                    <p>Brand Design - Webflow Developer - Web Design</p>
                    <br />
                    <hr />
                    <br />
                    <h1 className="text-4xl">Gofirefly.io</h1>
                    <br />
                    <p>Brand Design - Webflow Developer - Web Design</p>
                    <br />
                    <hr />
                    <br />
                    <h1 className="text-4xl">Blinkops.com</h1>
                    <br />
                    <p>Brand Design - Webflow Developer - Web Design</p>
                    <br />
                    <hr />
                    <br />
                    <h1 className="text-4xl">Withcanvas.com</h1>
                    <br />
                    <p>Brand Design - Webflow Developer - Web Design</p>
                    <br />
                </div>
            </div>
            <div className="about grid md:grid-cols-2 grid-cols-1 item center gap-10 pb-20 pt-20">
                <div className="box font-medium text-2xl">
                    <h1>Testimonials</h1>
                </div>
                <div className="box font-light">
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                    <br />
                    <h1 className="font-medium">Ayus Rajh</h1>
                    <p>VP of Marketing @ Webflow</p>
                </div>
                <br />
                <hr />
                <br />
                <div className="box font-light">
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                    <br />
                    <h1 className="font-medium">Alex Cattoni</h1>
                    <p>Founder @ CopyPossy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content