import './bulma.min.css';
import './App.css'
import Nav from './components/Nav'
import Section from './components/Section';
import ProjectList from './components/ProjectList'
import Footer from './components/Footer'

function App() {
  const projects = [
    {
      title: 'Eats & Beats',
      description: 'Perfectly pairs music and cooking',
      web_url: 'https://team-norm-1.github.io/project-1/',
      github_url: 'https://github.com/Team-Norm-1/project-1'
    },
    {
      title: 'Random Pass',
      description: 'Generates a randomized password based on select criteria.',
      web_url: 'https://radergan.github.io/random-password-creator/',
      github_url: 'https://github.com/radergan/random-password-creator'
    },
    {
      title: 'Weather Dashboard',
      description: 'A dashboard of local weather predictions',
      web_url: 'https://radergan.github.io/weather-dashboard/',
      github_url: 'https://github.com/radergan/weather-dashboard'
    }
  ]
  return (
    <div>
      <Nav />
      <Section 
        mainTitle="Fullstack Web Developer" 
        subTitle="Hello! My name is Patrick, and I love building for the web." 
        classes="section is-white has-text-centered" />
      <Section 
        subTitle="I have worked in the I.T. industry for 10+ years in Chicago, Illinois." 
        classes="is-medium is-primary has-text-centered is-long"/>
      <ProjectList projects={projects}/>
      <Footer />
    </div>
  );
}

export default App;
