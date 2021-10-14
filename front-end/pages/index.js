import styles from '../styles/Home.module.css'
import MarkdownIt from "markdown-it"

export default function Home(props) {
  console.log(props.post[0].Imagem.name)

  //const md = new MarkdownIt()
  //const htmlTexto = md.render(props.post[0].Texto)

  return (
    <div className={styles.container}>
      <h1>{props.post.Titulo}</h1>
      {props.post.map((item) => (
        <div key={item.id}>
          <h1 className={styles.titulo}>{item.Titulo} titulo</h1>
          <span>{item.Data}</span>
          <img src={item.Imagem.name} alt={item.Titulo}/>
          <section>{htmlTexto}</section>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:1337/posts')
  .then(res => res.json())
  return {
    props: {
      post: res
    }
  }
}