import Slider from '@/Components/Slider';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    const categories = [
        {
            title: "Kids",
            image: "/images/kids.png", // Ensure this path is correct and the image exists
            value: "kids",
        },
        {
            title: "Men",
            image: "/images/men.png", // Ensure this path is correct and the image exists
            value: "men",
        },
        {
            title: "Women",
            image: "/images/women.png", // Ensure this path is correct and the image exists
            value: "women",
        },
    ];

    const handleCategories = (value) => {
        console.log("OOOK");
        console.log(value);
        
        
    }
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                    <Slider items={categories} onSelect={handleCategories} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
