import React from "react";
 
const ServiceItem = ({ icon, title, description, steps }) => {
    return (
        <section className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
                <div className="flex items-center mb-4">
                    <img src={icon} alt={title} className="w-8 h-8 mr-2" />
                    <h2 className="text-lg font-semibold">{title}</h2>
                </div>
                <p className="text-gray-600">{description}</p>
            </div>
            <ul className="border-t border-gray-200">
                {steps.map((step, index) => (
                    <li key={index} className="py-2 px-4 border-b border-gray-200">
                        {step}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ServiceItem;
