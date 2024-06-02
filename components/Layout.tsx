import React from 'react'

type NavItemProps = {
    title: string
    url: string
    isSelected: boolean
}
// Creating a NavItem Component start
function NavItem(props: NavItemProps){
    const {title, url, isSelected} = props
    return (
        <li>
            <a href={url} className={`block px-3 py-2 transition hover:text-teal-500 ${isSelected ? "text-teal-500" : ""}`}>{title}</a>
        </li>
    )
}
// Creating a NavItem Component ends

type NavbarProps = {
    pageId: string
}
// Creating a Navbar Component start
function Navbar(props: NavbarProps){
    const {pageId} = props
    
    return(
        <div className="flex justify-center mx-auto max-w-7xl h-16 pt-6">
            <nav>
                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
                    <NavItem title={"About Me"} url={"/"} isSelected={pageId === "about_me"}/>
                    <NavItem title={"Projects"} url={"/projects"} isSelected={pageId === "projects"}/>
                    <NavItem title={"Essays"} url={"/essays"} isSelected={pageId === "essays"}/>
                </ul>
            </nav>
        </div>
    )
}
// Creating a Navbar Component ends

export default function Layout( {children}: any ) {
    console.log('Page ID:', children.pageId);
  return (
    <>
        <Navbar pageId={children.props.pageId}/>
        <main>{children}</main>
    </>
    
  )
}
