import styles from './Heading.module.css'
export function Heading(){
    const classes = `${styles.fundo} ${styles.cor}`
    return (
        <h1 className={classes}>yasmin</h1>
    )
}