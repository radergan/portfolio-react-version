function Project(props){
    return (
       <div className="column is-12-mobile is-half-tablet is-one-third-desktop level-item">
        <div className="box">
            <h4 className="title is-size-4 is-spaced mb-2">{props.title}</h4>
            <p className="mb-3">{props.description}</p>
            <a href={props.web_url} target="_blank" className="link has-text-primary button">Website</a>
            <span className="divider">|</span>
            <a href={props.github_url} target="_blank" className="link has-text-primary button">GitHub Repository</a>
            </div>
        </div>
    )
}
export default Project