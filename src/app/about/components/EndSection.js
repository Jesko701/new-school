// components/AboutUsFooter.jsx (or similar name)
const AboutUsFooter = () => (
    <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
        <h3 className="text-xl font-bold mb-3">About Us</h3>
        <p className="text-sm leading-relaxed">
            Brief description of your organization or website.
            You can add more lines here.
        </p>
        <div className="flex justify-center md:justify-start mt-4 space-x-4">
            {/* Note: You'll need to import Font Awesome or use another icon library */}
            <a href="#" className="hover:text-red-300"><i className="fab fa-facebook-f"></i>FB</a>
            <a href="#" className="hover:text-red-300"><i className="fab fa-twitter"></i>TW</a>
            <a href="#" className="hover:text-red-300"><i className="fab fa-instagram"></i>IG</a>
        </div>
    </div>
);

// components/QuickLinksFooter.jsx (or similar name)
const QuickLinksFooter = () => (
    <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
        <h3 className="text-xl font-bold mb-3">Quick Links</h3>
        <ul className="text-sm space-y-2">
            <li><a href="#" className="hover:text-red-300">Home</a></li>
            <li><a href="#" className="hover:text-red-300">Services</a></li>
            <li><a href="#" className="hover:text-red-300">About</a></li>
            <li><a href="#" className="hover:text-red-300">Contact</a></li>
        </ul>
    </div>
);

// components/ContactUsFooter.jsx (or similar name)
const ContactUsFooter = () => (
    <div className="w-full md:w-1/3 text-center md:text-right">
        <h3 className="text-xl font-bold mb-3">Contact Us</h3>
        <p className="text-sm">
            123 Your Street, Your City<br />
            Your State, 12345<br />
            Email: info@example.com<br />
            Phone: (123) 456-7890
        </p>
    </div>
);

// components/EndSection.jsx (or your main footer component)
export function EndSection() {
    return (
        <footer className="w-full text-black py-8 mt-auto"> {/* Added footer tag here */}
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center md:items-start">
                <AboutUsFooter />
                <QuickLinksFooter />
                <ContactUsFooter />
            </div>
        </footer>
    );
}