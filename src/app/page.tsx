import Link from "next/link"
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';


export default function Home() {
  return (
    <div  style= {{backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
      <Header />
      <div>
        <h1 style={{textAlign: 'center'}} >Welcome to my Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo repudiandae distinctio delectus quas esse eveniet ullam hic tempora, animi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, corporis labore, error totam nobis, quod nihil laboriosam molestiae sed sunt beatae provident odit nemo amet at aperiam similique enim et. eaque consectetur minima laborum obcaecati, natus labore doloribus soluta! Reprehenderit?
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sint aperiam aliquid? Dolore sunt sapiente fuga voluptates a sed molestiae autem, reiciendis, ab illo quas quibusdam distinctio exercitationem eum error!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere ea voluptatibus rerum veniam sapiente exercitationem similique laborum. Perspiciatis magni deserunt numquam voluptatibus laudantium possimus veritatis soluta sequi optio quasi?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium cupiditate iusto deserunt quasi ipsa esse nisi voluptate reiciendis enim ipsam placeat, ullam quam voluptatem modi recusandae a fuga et dolorum.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsa quibusdam soluta earum alias? Unde voluptatem similique accusamus rerum quibusdam officia dolorem a quisquam incidunt commodi? Laborum dicta cumque officiis!</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam deserunt saepe tempore inventore iure eum dolores quaerat magnam obcaecati, exercitationem itaque doloremque accusantium harum ducimus adipisci dignissimos tempora odit! Natus.</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, libero qui. A quod provident ducimus culpa. Quis accusantium explicabo soluta nesciunt temporibus neque praesentium vitae, error nostrum, voluptates reiciendis autem!</li>
          <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, libero qui. A quod provident ducimus culpa. Quis accusantium explicabo soluta nesciunt temporibus neque praesentium vitae, error nostrum, voluptates reiciendis autem!</li>
          </ul>
          <h2 style={{textAlign: 'center'}} >why us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quisquam excepturi nostrum vel neque. Autem sit enim quae soluta! Mollitia tempora ipsa eos asperiores rerum labore deleniti, quam pariatur sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minus optio accusantium consequuntur in voluptate labore ratione sint, dolores maxime? Iusto repudiandae tempora recusandae sed expedita, voluptas quas harum odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, architecto! Culpa, iure esse sit dolore earum illo, laboriosam, exercitationem ab officia nesciunt tempora porro quibusdam quod accusamus vero! Ducimus, iste?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eos earum deserunt maxime? Consequuntur, consequatur eaque suscipit maxime vero ducimus! Perspiciatis iste eligendi voluptatum vel provident? Quasi ex magnam eaque?Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nihil, quisquam dignissimos quaerat doloribus at inventore facere eius sed facilis, beatae cupiditate. Officiis, nobis deserunt cumque totam beatae fuga <quasi className="lore"></quasi>
        </p>



      </div>
      <Footer />
    </div>
  );
}
