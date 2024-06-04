// import Image from "next/image";
import { Inter } from "next/font/google";
import blackgirl from '../public/images/blackgirl.jpg'

const inter = Inter({ subsets: ["latin"] });


export async function getStaticProps(){
  return {
    props:{
      pageId: "about_me",
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

type ProjectItemProps = {
  name: string
  
}
export default function Home() {
  return (
    <div className="">
      About me
    </div>
  );
}
