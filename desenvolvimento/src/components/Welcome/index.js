import styles from "./welcome.module.css"; /** olá Gabí aqui está sendo usado o css module  */



export default function welcome(){
    return(
        <div className={styles.cadGeral} > 
            <h1>Bem-vindo à Fofuras em Fio</h1>
            <h4>Crochê para Bebês com Amor e Cuidado</h4>
        </div>
    )
}