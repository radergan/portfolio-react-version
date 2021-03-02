function Section(props){
    return (
    <section className={props.classes ? props.classes : null}>
        <div className="container">
            <div className="columns is-centered">
                <div className="column">
                    {
                    props.mainTitle ?
                        <h1 id="main-title" 
                        className="is-size-1-desktop is-size-2-tablet is-size-3-mobile is-spaced title">
                        {props.mainTitle}
                        </h1>
                    : null
                    }
                    {
                    props.subTitle ?
                        <h2 class="subtitle mb-3 is-size-4-desktop primary-color">
                        {props.subTitle}
                        </h2>
                    : null
                    }
                </div>
            </div>
        </div>
    </section>
    )
}
export default Section;