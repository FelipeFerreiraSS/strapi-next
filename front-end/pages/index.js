import styles from '../styles/Home.module.css'

export default function Home(props) {
  console.log(props.post[0].Imagem.name)

  return (
    <div className={styles.container}>
      {props.post.map((item) => (
        <div key={item.id}>
          <h1 className={styles.titulo}>{item.Titulo} titulo</h1>
          <span>{item.Data}</span>
          <img src={item.Imagem.name} alt={item.Titulo}/>
          <section>{item.Texto}</section>
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