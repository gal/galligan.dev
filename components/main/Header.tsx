const Header = () => {
    return (
        <header className="w-full h-[10dvh] mb-[100px] flex items-center justify-center sticky top-0 bg-inherit">
            <nav className="flex flex-col md:flex-row justify-center items-center gap-2 text-xl">
                <a className="h-full" href="/">Home</a>
                <a href="https://blog.galligan.dev">Blog</a>
                <a href="/photography">Photography</a>
            </nav>
        </header>
    )
}

export default Header;
