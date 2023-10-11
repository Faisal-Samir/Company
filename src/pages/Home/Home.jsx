import React from 'react';
import banner from '../../../public/banner1.jpg'
import abbu from '../../../public/Abbu.png'
import apu from '../../../public/Apu.png'
import NavBar from '../../components/NavBar';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Footer from '../../components/footer';
const Home = () => {
    useTitle('Home');
    return (
        <div>
            <img src="../../../public/Capture.png" className='  h-24 ml-0 lg:ml-20 mb-2 w-2/3' alt="" />
            <NavBar></NavBar>
            <div className="mt-5 w-10/12 mx-auto navbar bg-blue-700 text-white rounded-xl -py-3">
                <div className="w-full navbar-center lg:flex flex">
                    <small className='uppercase font-semibold -mr-10 w-2/12'>Notice & events:</small>
                    <div className="marquee-container w-full overflow-hidden">
                        <marquee behavior="scroll" direction="left" >
                            Real State tender Notice | Holiday Notice (Janmashtami) | 15th August Holiday Notice | Holiday Notice (Durja Puja)
                        </marquee>
                    </div>
                </div>
            </div>
            <div className="banner grid grid-cols-3 w-10/12 mx-auto mt-10 gap-8 mb-20">
                <section className='poster col-span-2'>
                    <img className='rounded-xl' src={banner} alt="" />
                </section>
                <section className='sideImage border flex flex-col gap-5'>
                    <div className='bg-slate-300 border-b-4 border-blue-600 h-3/4 rounded-xl'>
                        <img className='h-1/2 mx-auto mt-5 border-4 border-blue-400' src={abbu} alt="" />
                        <div className='text-center mt-2 -mb-28'>
                            <h2 className='text-2xl font-semibold'>Mr Haider Ali</h2>
                            <h4>President,AATL</h4>
                        </div>
                    </div>
                    <div className='bg-slate-300 rounded-xl border-b-4 border-blue-600'>
                        <img className='h-1/2 mx-auto mt-5 border-4 border-blue-400' src={apu} alt="" />
                        <div className='text-center mt-2 -mb-32'>
                            <h2 className='text-2xl font-semibold'>Mst Sarmin Akter</h2>
                            <h4>Vice President,AATL</h4>
                        </div>
                    </div>
                </section>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;