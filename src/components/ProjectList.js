import Project from './Project'

function ProjectList(props){
    const allProjects = props.projects;
    
    return (
        <section id="projects" className="section has-text-centered">
            <div className="container is-narrow">
                <div className="columns is-multiline level">
                {
                    allProjects.map((p) =>
                        <Project 
                            title={p.title} 
                            description={p.description} 
                            web_url={p.web_url} 
                            github_url={p.github_url} 
                        />
                    )
                }
                </div>
            </div>
        </section>
    )
}
export default ProjectList;