import React from 'react'
import Image, {StaticImageData} from 'next/image'
import book1 from '../public/images/book1.jpg'
import book2 from '../public/images/book2.jpg'
import book3 from '../public/images/book3.png'
import book4 from '../public/images/book4.png'
import book5 from '../public/images/book5.png'



export async function getStaticProps(){
  return {
    props:{
      pageId: "projects"
    }
  }
}

type ProjectItemProps = {
  name: string
  url: string
  urlDisplay: string
  imageSrc: StaticImageData
}

function ProjectItem(props: ProjectItemProps){
  let {name, url, urlDisplay, imageSrc:image}  = props
  return(
    <li>
      <a href={url}> 
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image className='w-full' src={image} alt={name}/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {name}
            </div>
          </div>
          <div className="px-6 pd-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
             🔗{urlDisplay}
            </span>
          </div>
        </div>
      </a>
    </li>
  )
}

export default function Projects() {
  return (
    <div className='mt-16 px-8'>
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Things I Do</h1>
        <p className="text-base mt-6 text-zinc-600">I have been working on a number of small creative projects</p>
      </header>
      <div className="mt-16">
        <h2 className="text-2xl">Apps</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y16 mt-8">
          <ProjectItem name={"Tracking Chores Reward"} url={"https://apps.apple.com/us/app/tallycoin/id1633932632"} urlDisplay={"App Store"} imageSrc={book5} />
        </ul>
      </div>
      <div className="my-16 ">
        <h2 className="text-2xl">Books</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y16 mt-8">
          <ProjectItem name={"A Practical Learning Guide"} url={"https://www.amazon.com/gp/product/B0BP5P9H31"} urlDisplay={"amazon.com"} imageSrc={book1}/>
          <ProjectItem name={"Nail A Coding Interview:"} url={"https://gracehuang.gumroad.com/l/coding-interview"} urlDisplay={"grace huang.com"} imageSrc={book2}/>
          <ProjectItem name={"A Practical Guide to Writing a Software Tech Design Doc"} url={"https://gracehuang.gumroad.com/l/mqmUt"} urlDisplay={"grace huang.com"} imageSrc={book3}/>
          <ProjectItem name={"Code Reviews in Tech"} url={"https://gracehuang.gumroad.com/l/codereviews"} urlDisplay={"grace huang.com"} imageSrc={book4}/>
        </ul>
      </div>
    </div>
  )
}
