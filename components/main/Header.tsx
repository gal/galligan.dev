const Header = () => {
    return (
        <header className="w-full h-[10dvh] mb-[100px]">
            <nav className="flex flex-col md:flex-row justify-center items-center gap-3 text-2xl">
                <a className="h-full" href="/">Home</a>
                <a href="https://blog.galligan.dev">Blog</a>
                <a href="/photography">Photography</a>
            </nav>
        </header>
    )
}

export default Header;
