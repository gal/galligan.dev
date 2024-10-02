const Header = () => {
    return (
        <header className="header h-[10dvh] mb-[100px] md:grid md:grid-cols-5 sticky bg-inherit">
            <div></div>
            <div></div>
            <nav className="h-full w-full md:col-span-3 flex flex-row justify-center md:justify-start items-center text-xl">
                <a href="/">Home</a>
                <a href="https://blog.galligan.dev">Blog</a>
                <a href="/photography">Photography</a>
            </nav>
        </header>
    )
}

export default Header;
