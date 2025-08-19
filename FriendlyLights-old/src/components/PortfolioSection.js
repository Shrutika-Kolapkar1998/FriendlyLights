import React, { useEffect, useState } from 'react';

const PortfolioSection = () => {
    const [portfolio , setPortfolio] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const res =await fetch("https://jsonplaceholder.typicode.com/photos?_limit=6");
                const data = await res.json();
                setPortfolio(data);
            } catch (error) {
                console.error("Error fetching portfolio", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPortfolio();
    }, []);

  return (
    <section id="portfolio" className="p-8 bg-gray-100">
        <h3 className='text-3xl font-bold mb-6 text-center'>Portfolio</h3>

        {loading ? (<p>Loading Portfolio...</p>) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {portfolio.map((item)=>(
                    <div className='rounded-lg shadow overflow-hidden' key={item.id}>
                        <img src={item.thumbnailUrl} alt={item.title} className='w-full h-48 object-cover' />
                        <div className='p-4'>
                            <h4 className='text-xl font-semibold'>{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </section>
  )
}

export default PortfolioSection;
