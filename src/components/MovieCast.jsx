import styles from './MovieCast.module.css'

function MovieCast({data}) {
    return (
        <section className={styles.cast}>
            <h3>Cast</h3>
            {data.Actors}
        </section>
    )
}

export default MovieCast
