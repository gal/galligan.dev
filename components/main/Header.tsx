const Header = () => {
    return (
        <header className="w-full max-h-[10dvh] mb-[100px]">
            <nav className="flex flex-col md:flex-row justify-center items-center gap-x-16">
                <a href="/">Home</a>
                <a href="https://blog.galligan.dev">Blog</a>
                <a href="/photography">Photography</a>
            </nav>
        </header>
    )
}

export default Header;
