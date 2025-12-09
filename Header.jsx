import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    const navItems = ['Home', 'About', 'Resume', 'Skills', 'Projects','Blog', 'Contact'];

    const HamburgerIcon = (props) => <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>;
    const CloseIcon = (props) => <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>;

    return (
        <header className="fixed top-0 left-0 w-full z-50 h-20 bg-gray-800 flex items-center justify-center shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
                <div class="flex-shrink-0 px-4">
                    <a href="#" class="text-xl font-bold text-gray-700">
                        <span class="px-1 bg-pink-400 rounded-full animate-[ping_1.9s_linear_infinite]">S</span>
                        <span class="px-1 bg-pink-400 rounded-full animate-[ping_2s_linear_infinite]">R</span>
                        <span class="px-1 bg-pink-400 rounded-full animate-[ping_2.1s_linear_infinite]">E</span>
                        <span class="px-1 bg-pink-400 rounded-full animate-[ping_2.2s_linear_infinite]">Y</span>
                        <span class="px-1 bg-pink-400 rounded-full animate-[ping_2.3s_linear_infinite]">L</span>
                        <span class="px-1 bg-pink-400 rounded-full animate-[ping_2.4s_linear_infinite]">U</span>
                        <span class="px-1 bg-pink-400 rounded-full animate-[ping_2.5s_linear_infinite]">C</span>
                        <span class="px-1 bg-pink-400 rounded-full animate-[ping_2.6s_linear_infinite]">H</span>
                    </a>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden space-x-6 md:flex">
                    {navItems.map((item) => (
                        <a key={item} 
                           href={`#${item.toLowerCase()}`} 
                           className="text-text-light hover:text-accent-gold transition duration-300 font-medium">
                            {item}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="text-text-light md:hidden">
                    {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            <nav className={`md:hidden ${isOpen ? 'block' : 'hidden'} top-[80px] bg-black  absolute w-full left-0 bg-primary-dark shadow-xl`}>
                <div className="flex flex-col space-y-2 p-4">
                    {navItems.map((item) => (
                        <a key={item} 
                           href={`#${item.toLowerCase()}`} 
                           onClick={toggleMenu} 
                           className="block rounded-md p-2 text-text-light hover:bg-gray-800 hover:text-accent-gold transition duration-300">
                            {item}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Header;