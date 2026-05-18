import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Business Traveler",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop",
    review:
      "The room was absolutely luxurious and comfortable. The service quality exceeded my expectations.",
  },

  {
    id: 2,
    name: "Sarah Williams",
    role: "Tourist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop",
    review:
      "Beautiful environment, elegant interior, and amazing hospitality. I truly enjoyed my stay.",
  },

  {
    id: 3,
    name: "David Smith",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop",
    review:
      "One of the best luxury hotel experiences I’ve ever had. Everything felt premium and relaxing.",
  },
];

const RoomReviews = () => {
  return (
    <section className="w-full py-24 bg-white dark:bg-black transition duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-16">
          <p className="uppercase tracking-[4px] text-sm text-gray-500 dark:text-gray-400 mb-4">
            Guest Reviews
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            What Guests Say
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 shadow-sm hover:shadow-2xl transition duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                "{review.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {review.name}
                  </h3>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomReviews;