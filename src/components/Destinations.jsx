import React from 'react'

export default function Destinations() {
  return (
     <div class="w-[1280px] p-8 font-sans">
                <header class="mb-12 text-center">
                    <h1 class="text-4xl font-bold mb-4">Explore Amazing Destinations</h1>
                    <p class="text-xl max-w-2xl mx-auto">
                        Discover breathtaking locations around the world for your next adventure
                    </p>
                </header>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                        class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                    >
                        <div class="relative h-[240px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1533105079780-92b9be482077"
                                alt="Paris"
                                class="w-full h-full object-cover"
                                keywords="paris, eiffel tower, france, europe, travel"
                            />
                            <div
                                class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-primary-50 transition-colors"
                            >
                                <span class="material-symbols-outlined">favorite_border</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h2 class="text-2xl font-bold">Paris, France</h2>
                                <div class="flex items-center text-primary-600">
                                    <span class="material-symbols-outlined mr-1">star</span> <span>4.8</span>
                                </div>
                            </div>
                            <p class="mb-6">
                                Experience the magic of the City of Light with its iconic architecture, world-class
                                cuisine, and romantic ambiance.
                            </p>
                            <div class="flex justify-between items-center">
                                <span class="font-bold text-lg">$1,200</span>
                                <button
                                    class="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
                                >
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                    >
                        <div class="relative h-[240px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1545389336-cf090694435e"
                                alt="Santorini"
                                class="w-full h-full object-cover"
                                keywords="santorini, greece, island, mediterranean, travel"
                            />
                            <div
                                class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-primary-50 transition-colors"
                            >
                                <span class="material-symbols-outlined">favorite_border</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h2 class="text-2xl font-bold">Santorini, Greece</h2>
                                <div class="flex items-center text-primary-600">
                                    <span class="material-symbols-outlined mr-1">star</span> <span>4.9</span>
                                </div>
                            </div>
                            <p class="mb-6">
                                Discover whitewashed buildings, blue-domed churches, and breathtaking sunsets on this
                                iconic Greek island.
                            </p>
                            <div class="flex justify-between items-center">
                                <span class="font-bold text-lg">$1,500</span>
                                <button
                                    class="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
                                >
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                    >
                        <div class="relative h-[240px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce"
                                alt="Bali"
                                class="w-full h-full object-cover"
                                keywords="bali, indonesia, beach, tropical, travel"
                            />
                            <div
                                class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-primary-50 transition-colors"
                            >
                                <span class="material-symbols-outlined">favorite_border</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h2 class="text-2xl font-bold">Bali, Indonesia</h2>
                                <div class="flex items-center text-primary-600">
                                    <span class="material-symbols-outlined mr-1">star</span> <span>4.7</span>
                                </div>
                            </div>
                            <p class="mb-6">
                                Relax on pristine beaches, explore lush rice terraces, and immerse yourself in rich
                                cultural traditions.
                            </p>
                            <div class="flex justify-between items-center">
                                <span class="font-bold text-lg">$950</span>
                                <button
                                    class="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
                                >
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                    >
                        <div class="relative h-[240px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963"
                                alt="Cinque Terre"
                                class="w-full h-full object-cover"
                                keywords="cinque terre, italy, coast, mediterranean, travel"
                            />
                            <div
                                class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-primary-50 transition-colors"
                            >
                                <span class="material-symbols-outlined">favorite_border</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h2 class="text-2xl font-bold">Cinque Terre, Italy</h2>
                                <div class="flex items-center text-primary-600">
                                    <span class="material-symbols-outlined mr-1">star</span> <span>4.6</span>
                                </div>
                            </div>
                            <p class="mb-6">
                                Explore colorful seaside villages nestled along dramatic cliff edges and hike stunning
                                coastal trails.
                            </p>
                            <div class="flex justify-between items-center">
                                <span class="font-bold text-lg">$1,350</span>
                                <button
                                    class="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
                                >
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                    >
                        <div class="relative h-[240px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                                alt="Maldives"
                                class="w-full h-full object-cover"
                                keywords="maldives, beach, tropical, island, travel"
                            />
                            <div
                                class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-primary-50 transition-colors"
                            >
                                <span class="material-symbols-outlined">favorite_border</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h2 class="text-2xl font-bold">Maldives</h2>
                                <div class="flex items-center text-primary-600">
                                    <span class="material-symbols-outlined mr-1">star</span> <span>4.9</span>
                                </div>
                            </div>
                            <p class="mb-6">
                                Experience paradise with pristine white sand beaches, crystal-clear turquoise waters,
                                and luxurious overwater bungalows.
                            </p>
                            <div class="flex justify-between items-center">
                                <span class="font-bold text-lg">$2,100</span>
                                <button
                                    class="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
                                >
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        class="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                    >
                        <div class="relative h-[240px] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1526392060635-9d6019884377"
                                alt="Kyoto"
                                class="w-full h-full object-cover"
                                keywords="kyoto, japan, temple, asia, travel"
                            />
                            <div
                                class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer hover:bg-primary-50 transition-colors"
                            >
                                <span class="material-symbols-outlined">favorite_border</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <div class="flex justify-between items-center mb-4">
                                <h2 class="text-2xl font-bold">Kyoto, Japan</h2>
                                <div class="flex items-center text-primary-600">
                                    <span class="material-symbols-outlined mr-1">star</span> <span>4.8</span>
                                </div>
                            </div>
                            <p class="mb-6">
                                Immerse yourself in traditional Japanese culture with ancient temples, serene gardens,
                                and historic geisha districts.
                            </p>
                            <div class="flex justify-between items-center">
                                <span class="font-bold text-lg">$1,650</span>
                                <button
                                    class="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
                                >
                                    Explore
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-12 flex justify-center">
                    <button
                        class="bg-white border border-primary-600 text-primary-600 px-8 py-3 rounded-full font-medium hover:bg-primary-50 transition-colors mx-2"
                    >
                        Load More
                    </button>
                    <button
                        class="bg-primary-600 text-white px-8 py-3 rounded-full font-medium hover:bg-primary-700 transition-colors mx-2"
                    >
                        View All Destinations
                    </button>
                </div>
            </div>
  )
}
