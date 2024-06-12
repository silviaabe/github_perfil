import styles from './Perfil.module.css';

const Perfil = ({ nomeUsuario }) => {
  // const usuario = {
  //   nome: 'Silvia Abe',
  //   avatar: 'https://github.com/silviaabe.png'
  // }

  return (
    <header className={styles.header}>
      <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`}/>
      <h1 className={styles.name}>
        {nomeUsuario}
      </h1>
    </header>
  )
}
  
export default Perfil;

// export default function() {
// export default () => {