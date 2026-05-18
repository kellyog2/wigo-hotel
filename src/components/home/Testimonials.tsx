import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    role: "Business Traveler",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop",
    review:
      "Wigo Hotel exceeded all my expectations. The rooms were luxurious, the staff was professional, and the overall experience was exceptional.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Tourist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop",
    review:
      "Absolutely loved my stay here. The environment was peaceful, clean, and beautifully designed. I will definitely visit again.",
  },
  {
    id: 3,
    name: "David Smith",
    role: "Entrepreneur",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=987&auto=format&fit=crop",
    review:
      "One of the best luxury hotels I’ve stayed in. The service quality and comfort level were truly world-class.",
  },
];

const Testimonials = () => {
  return (
    <section className="w-full py-24 bg-black transition duration-300">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          
          <p className="uppercase tracking-[4px] text-sm text-yellow-500 mb-4 font-semibold">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Guests Say
          </h2>

          <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
            Discover why guests love their experience at Wigo Hotel
            & Suite through genuine customer reviews and feedback.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#111111] border border-yellow-500/20 
              p-8 rounded-3xl 
              hover:border-yellow-500 
              hover:-translate-y-2 
              hover:shadow-2xl hover:shadow-yellow-500/10
              transition duration-300"
            >
              
              {/* Stars */}
              <div className="flex items-center gap-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={20}
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-300 leading-relaxed mb-8 italic">
                "{testimonial.review}"
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500"
                />

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="text-yellow-500 text-sm">
                    {testimonial.role}
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

export default Testimonials;