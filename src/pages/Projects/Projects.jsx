import React from 'react';
import useTitle from '../../hooks/useTitle';
import project1 from '../../../public/Wavy_Ppl-08_Single-11.jpg';
import project2 from '../../../public/plasterer_painter_4.jpg';
import project3 from '../../../public/20225.jpg';
const Projects = () => {
    useTitle("Projects");
    return (
        <div className='w-10/12 mx-auto'>
            <section className='grid grid-cols-2 gap-5 mt-10 mb-10 justify-center items-center'>
                <div>
                    <img src={project1} alt="" />
                </div>
                <div>
                    <h2 className='text-4xl font-bold mb-5'>Project-1</h2>
                    <p className='text-xl text-gray-500'>Repair of Renovation of Boundary wall making it higher and laying of tiles in mortuary and gate, ancillary, civil sanitary works including cleaning of drains.</p>
                </div>
            </section>
            <section className='grid grid-cols-2 gap-5 mt-10 mb-10 justify-center items-center'>
                <div>
                    <h2 className='text-4xl font-bold mb-5'>Project-2</h2>
                    <p className='text-xl text-gray-500'>Repair work for painting and stop water from the roof 2ros guard rooms, repair work including laying floor tiles, laundry wall renovation plaster renewal, painting, grill and other related work.  .</p>
                </div>
                <div>
                    <img src={project2} alt="" />
                </div>
            </section>
            <section className='grid grid-cols-2 gap-8 mt-10 mb-10 justify-center items-center'>
                <div>
                    <img src={project3} alt="" />
                </div>
                <div>
                    <h2 className='text-4xl font-bold mb-5'>Project-3</h2>
                    <p className='text-xl text-gray-500'>Installing of Thai Partition on the 8th floor of the hostel building of ancillary repair work including welding of portent stain on the roof of the pocket gate, lift and others related work.</p>
                </div>
            </section>
        </div>
    );
};

export default Projects;