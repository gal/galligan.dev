const Header = () => {
    return (
        <header className="z-50 m-0 w-[100dvw] header h-[10dvh] md:grid md:grid-cols-5 sticky">
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
