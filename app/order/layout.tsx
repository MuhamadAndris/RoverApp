const MainLayout = ({children}:{children: React.ReactNode}) => {
    return (
        <div className="
            fixed w-full min-h-full
            grid grid-cols-[auto_1fr]
            grid-rows-1
        ">
            <nav className="bg-amber-100">fdfdf</nav>
            <main className="bg-blue-400">
                {children}
            </main>
        </div>
    )
}

export default MainLayout;