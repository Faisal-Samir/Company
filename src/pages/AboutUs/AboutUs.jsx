import React from 'react';
import img1 from '../../../public/executives-negotiating-meeting.jpg' ;
import img2 from '../../../public/4020393.jpg';
import img3 from '../../../public/standard-quality-control-concept-m.jpg';
import useTitle from '../../hooks/useTitle';
const AboutUs = () => {
    useTitle("AboutUs");
    return (
        <div className='w-5/6 mx-auto'>
            <div className='grid grid-cols-2 gap-6 mt-10 mb-20 items-center'>
                <section className=''>
                    <h1 className='text-4xl mb-4 font-semibold'>About AATradeInternational</h1>
                    <p className='text-lg text-justify'>We are on a mission to start a conversation with you and building and developing residential properties as house, apartments, condominiums, and townhouses. Let's discover and build. "Crafting quality Homes, Building Lasting memories."</p>
                </section>
                <section>
                    <img src={img1} alt="" />
                </section>
            </div>
            <div className='grid grid-cols-2 gap-6 mt-10 mb-10 items-center'>
                <section>
                    <img src={img2} alt="" />
                </section>
                <section className=''>
                    <h1 className='text-4xl mb-4 font-semibold'>Our Mission </h1>
                    <p className='text-lg text-justify'>"Empowering Dreams, Building Futures. Our mission is to craft exceptional spaces that inspire and endure. Committed to excellence, we strive to exceed expectations in every project, creating lasting value for our clients and communities."</p>
                </section>
            </div>
            <div className='grid grid-cols-2 gap-6 mt-10 mb-20 items-center'>
                <section className=''>
                    <h1 className='text-4xl mb-4 font-semibold'>Our Service</h1>
                    <p className='text-lg text-justify'>Delivering top-tier construction services with precision and expertise, our team ensures the highest quality in every project, from residential homes to commercial structures.Transforming spaces with innovation and care, our renovation specialists breathe new life into existing structures, enhancing functionality and aesthetics for a modern and timeless appeal.</p>
                </section>
                <section>
                    <img src={img3} alt="" />
                </section>
            </div>
        </div>

    );
};

export default AboutUs;