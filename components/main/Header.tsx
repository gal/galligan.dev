const Header = () => {
    return (
        <header className="z-50 border-box w-full header h-[10dvh] sticky">
            <div className="h-full mx-auto max-w-[1280px] md:grid md:grid-cols-5">
                <div></div>
                <div></div>
                <nav className="h-full max-w-[1280px] md:col-span-3 flex flex-row justify-center md:justify-start items-center text-xl">
                    <a href="/">Home</a>
                    <a href="https://www.blog.galligan.dev">Blog</a>
                    <a href="/photography">Photography</a>
                </nav>
            </div>

        </header>
    )
}

export default Header;
