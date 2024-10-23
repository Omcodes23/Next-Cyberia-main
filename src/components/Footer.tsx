"use client";
import React, { useState } from 'react';
import AnimatedPinDemo from './Locationcard';
// Remove or comment out the problematic import
// import { AnimatedPinDemo } from '@/ui/component/3d-pin';

function Footer() {
    const [email, setEmail] = useState("");

    // Updated chat IDs for multiple devices
    const chatIds = [""];  // Added 6409031492

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Construct the message
        const message = ``;

        // Telegram API URL base
        const telegramAPIBase = ``;

        // Send the message to each chat ID
        for (const chatId of chatIds) {
            try {
                const response = await fetch(telegramAPIBase, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        chat_id: chatId,   // Current chat ID
                        text: message,     // Message content
                    }),
                });

                if (response.ok) {
                    console.log(`Message sent successfully to chat ID: ${chatId}`);
                } else {
                    console.error(`Failed to send message to chat ID: ${chatId}`, await response.json());
                }
            } catch (error) {
                console.error(`Error sending message to chat ID: ${chatId}`, error);
            }
        }

        // Reset form fields
        setEmail("");
    };

    return (
        <footer className='bg-black text-gray-400 py-32 dark:bg-black dark:bg-grid-white/[0.07]'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-40 px-4 sm:px-6 lg:px-8'>
                            
                            
                    <AnimatedPinDemo />
                <div className='p-4 order-2 lg:order-2 flex flex-col lg:flex-row lg:space-x-8'>
                    <div className='mb-8 lg:mb-0'>
                        <h3 className='text-white mb-4 text-2xl font-semibold'>Follow Us</h3>
                        <ul className='flex space-x-4 justify-start mb-4'>
                            <li><a href='https://example.com/facebook' className='hover:text-white'><img src='/logo/discord.png' alt='Facebook' className='w-6 h-6' /></a></li>
                            <li><a href='https://example.com/snap' className='hover:text-white'><img src='/logo/snap.png' alt='Twitter' className='w-6 h-6' /></a></li>
                            <li><a href='https://example.com/instagram' className='hover:text-white'><img src='/logo/instagram.png' alt='Instagram' className='w-6 h-6' /></a></li>
                            {/* <li><a href='https://example.com/linkedin' className='hover:text-white'><img src='/path/to/linkedin-logo.png' alt='LinkedIn' className='w-6 h-6' /></a></li>
                            <li><a href='https://example.com/youtube' className='hover:text-white'><img src='/path/to/youtube-logo.png' alt='YouTube' className='w-6 h-6' /></a></li> */}
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-white mb-4 text-2xl font-semibold'>Quick Links</h3>
                        <ul className='space-y-2'>
                            <li><a href='https://example.com/about' className='hover:text-white'>About Us</a></li>
                            <li><a href='https://example.com/contact' className='hover:text-white'>Contact</a></li>
                            <li><a href='https://example.com/privacy' className='hover:text-white'>Privacy Policy</a></li>
                            <li><a href='https://example.com/terms' className='hover:text-white'>Terms of Service</a></li>
                            <li><a href='https://example.com/blog' className='hover:text-white'>Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-center mt-20 text-gray-500'>
                &copy; {new Date().getFullYear()} MirrAR. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
