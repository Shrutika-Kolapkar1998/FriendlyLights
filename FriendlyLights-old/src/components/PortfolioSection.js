import React, { useEffect, useState } from 'react';

const PortfolioSection = () => {
    const [portfolio , setPortfolio] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const res =await fetch("https://jsonplaceholder.typicode.com/photos?_limit=3");
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
    <section id="products" className="mt-0 px-40 py-10 h-auto rounded-2xl flex flex-col justify-center items-center bg-zinc-200">
        <h3 className='text-3xl font-bold mb-6 text-center'>Products</h3>

        {loading ? (<p>Loading Portfolio...</p>) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {portfolio.map((item)=>(
                    <div className='rounded-lg shadow overflow-hidden' key={item.id}>
                        <img src='3.png' alt={item.title} className='w-full h-48 object-top' />
                        <div className='p-2'>
                            <h4 className='text-xl font-medium'>{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        )}
    </section>
  )
}

export default PortfolioSection;
