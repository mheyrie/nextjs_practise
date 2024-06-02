import React from 'react'



export async function getStaticProps(){
  return {
    props:{
      pageId: "projects"
    }
  }
}

export default function Projects() {
  return (
    <div>Prrojects</div>
  )
}
