import React , { useEffect, useState }  from 'react';

const ProjectsSection = () => {
    const [projects , setProjects] = useState([]);
        const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            const fetchProjects = async () => {
                try {
                    const res =await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
                    const data = await res.json();
                    setProjects(data);
                } catch (error) {
                    console.error("Error fetching projects", error);
                } finally {
                    setLoading(false);
                }
            };
            fetchProjects();
        }, []);

  return (
    <section id="projects" className="p-8 bg-white">
        <h3 className='text-3xl font-bold mb-6 text-center'>Projects</h3>
        {loading ? (<p>Loading Projects...</p>) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {projects.map((proj)=>(
                    <div className='p-4 border rounded-lg shadow hover:shadow-lg' key={proj.id}>
                        <h4 className='text-xl font-semibold'>{proj.title}</h4>
                        <p className='text-gray-600'>{proj.body}</p>
                    </div>
                ))}
            </div>
        )}
    </section>
  )
}

export default ProjectsSection;
