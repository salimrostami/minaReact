import projectData from "./publicationsData.json";
import Project from "../../components/Project";
import PageHeader from "../../components/PageHeader";

const Publications = () => {
  const ProjectList = () =>
    projectData.map((project, i) => (
      <Project
        key={i}
        id={project.id}
        title={project.title}
        top={project.top}
        bottom={project.bottom}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
      />
    ));

  return (
    <section className="portfolio">
      <PageHeader title="Publications" description="View my work" />
      <div className="row">
        <ProjectList />
      </div>
    </section>
  );
};

export default Publications;
