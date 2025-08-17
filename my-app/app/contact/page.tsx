import ButtonComponent from "./button"

export default async function Contact(){
    const data=await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log("data",data)
    const posts=await data.json()
    console.log("posts",posts)
    return <div><ButtonComponent/></div>

}