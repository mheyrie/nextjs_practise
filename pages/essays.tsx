import React from 'react'


export async function getStaticProps(){
    return {
      props:{
        pageId: "essays",
        metadata: {
            title: "Mheyrie",
            description: "Becoming a Full Stack Software Developer... I am committed to continuous improvement and innovations",
            openGraph:{
              image: "https://i.pinimg.com/736x/5a/e2/0e/5ae20efc15017fe469f797e6e9b5a5ae.jpg",
              url:'https://i.pinimg.com'
            }
        }
      }
    }
  }

export default function Essays() {
  return (
    <div>essays</div>
  )
}
