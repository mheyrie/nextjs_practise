import React from 'react'
import Head from 'next/head'
import Image, {StaticImageData} from 'next/image'
import logomovie from '../public/images/logomovie.png'

type NavItemProps = {
    title: string
    url: string
    // imageSrc: StaticImageData
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
            <nav className='w-full'>
                <img src="" alt="" />
                <ul className="flex justify-between rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
                    <NavItem title={"About Me"} url={"/"} isSelected={pageId === "about_me"}/>
                    <NavItem title={"Projects"} url={"/projects"} isSelected={pageId === "projects"}/>
                    <NavItem title={"Essays"} url={"/essays"} isSelected={pageId === "essays"}/>
                </ul>
            </nav>
        </div>
    )
}
// Creating a Navbar Component ends

type FooterLinkProps= {
    text: string
    url: string
}

function FooterLink(props: FooterLinkProps){
    let {url, text} = props
    return <a href={url} className="transition hover:text-teal-500">{text}</a>
}

// Footer component starts
function Footer(){
    return <footer className='pt-10 px-8 pb-16 border-t'>
        <div className="flex justify-between gap-6">
            <div className="flex gap-6 text-sm font-medium text-zinc-600">
                <FooterLink text={"About Me"} url={"/"}/>
                <FooterLink text={"Projects"} url={"/projects"}/>
                <FooterLink text={"Essays"} url={"/essays"}/>
            </div>
            <p className="text-sm text-zinc-400">
            &copy; 2023 Mary Oladele. All Rights Reserved
            </p>
        </div>
    </footer>
}
// Footer component ends


export default function Layout( {children}: any ) {
    
  return (
    <>
        <Head>
            <link rel="icon" href="/favicon.icon" />
            <title>{children.props.metadata.title}</title>
            <meta name="description"
            content={children.props.metadata.description} />
            {/* Open Graph tags */}
            <meta property="og:title" content={children.props.metadata.title} />
            <meta property="og:description"
            content={children.props.metadata.description} />
            <meta property="og:image"
            content={children.props.metadata.openGraph.image} />
            <meta property="og:url"
            content={children.props.metadata.openGraph.url} />
        </Head>
        <Navbar pageId={children.props.pageId}/>
        <main>{children}</main>
        <Footer/>
    </>
    
  )
}
