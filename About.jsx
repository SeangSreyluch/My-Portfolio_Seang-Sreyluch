import React from 'react';
import profileImage from '../assets/images/zeeluch2.png'; 

const About = () => {
    const newProfileImage = profileImage;

    return (
        <section id="about" className="relative h-100 bg-gray-800 flex items-center justify-center">
            <div className="container mx-auto p-8">
                <h2 className="mb-12 text-center text-4xl md:text-5xl font-extrabold bg-primary-dark text-text-light">
                    About <span className="text-accent-gold">Me</span>
                </h2>

                <div className="grid gap-12 md:grid-cols-2 items-start">

                    <div className="flex justify-center md:justify-start">
                        <img
                            src={newProfileImage} 
                            alt="Seang Sreyluch Profile"
                            className="w-full max-w-xs object-cover shadow-xl shadow-accent-gold/30 rounded-lg"
                            style={{ aspectRatio: '4/5' }} 
                        />
                    </div>

                    <div className="text-text-light">
                        <blockquote className="italic border-l-4 border-accent-gold pl-4 text-gray-400 mb-6">
                            "Motivated Frontend Developer in training, focused on building responsive and user-friendly web interfaces using modern web technologies." 
                        </blockquote>
                        <p className="mb-8 text-lg leading-relaxed">
                            I am currently studying web frontend development focusing on how to build beautiful and easy-to-use websites. 
                            I enjoy designing layouts, improving UI/UX, and working with tools like HTML, CSS, JavaScript, 
                            and React to bring ideas to life.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-y-3 text-sm md:text-base">
                            <p><strong>Name:</strong> Seang Sreyluch</p>
                            <p><strong>Date of Birth:</strong> Aug 05, 2002</p>
                            <p><strong>Address:</strong> Sang Kat kakap1, Khan Sen Sok,Phnom Penh, Cambodia</p>
                            <p><strong>Nationality:</strong>Khmer</p>
                            <p><strong>Email:</strong> Seangsreyluch@gmail.com</p>
                            <p><strong>Phone:</strong> (+855) 010 58 10 15</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;