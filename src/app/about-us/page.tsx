import Link from "next/link";
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer"

export default function Home() {
 return(
    <div style={{ backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
        <Header />
        <h1 style={{textAlign: 'center'}}>About us</h1>
        <p>

            Lorem, ipsum dolor Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit commodi suscipit aliquam minima libero accusantium similique distinctio doloremque reprehenderit. Sed dolor Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis amet nisi, necessitatibus adipisci inventore minus sed error tempora optio aperiam cum officiis sapiente vitae animi, ut rerum dicta rem! Nam.rem vitae distinctio facilis sequi recusandae odio excepturi eum?sit amet consectetur adipisicing elit. Dicta unde quasi modi nesciunt corrupti consequatur, voluptas, sequi sunt deleniti in fugit cumque veniam cupiditate? Neque fuga nesciunt voluptas ratione similique!Lorem' lorem
        </p>
        
        <Footer />
    </div>
 )   
}

