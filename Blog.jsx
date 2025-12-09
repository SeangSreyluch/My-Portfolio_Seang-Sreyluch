import React from "react";

const Blog = () => {
  const testimonials = [
    {
      img: "https://lormengsong.vercel.app/images/i6.jpg",
      text: "សុភមង្គលនឹងមិនអាចកើតមានឡើងចំពោះអ្នកដែលមិនសប្បាយចិត្តជាមួយនឹងរបស់ដែលខ្លួនកំពុងមាននោះឡើយ​។សុភមង្គលវាមិនអាស្រ័យថាតើអ្នកជានរណា ឫអ្វីដែលអ្នកមាននោះទេ តែវាអាស្រ័យលើអ្វីដែលអ្នកគិត។",
      name: "ព្រះពុទ្ធ",
      role: "ព្រះពុទ្ធសាសនា",
    },
    {
      img: "https://lormengsong.vercel.app/images/i1.jpg",
      text: "Doing the same thing over and over again and expecting different result.You never fail until you stop trying.If you can not explain it simply, you don't understand it well enough",
      name: "Albert Einstein",
      role: "Theoretical Physicist",
    },
    {
      img: "https://lormengsong.vercel.app/images/i2.jpeg",
      text: "If you only knew the magnificence of 3, 6 and 9 , then you would have a key to the universe.If you want to find the secrets of the Universe, think in terms of energy, frequency and vibration.",
      name: "Nikola Tesla",
      role: "Inventor and Electrical Engineer",
    },
    {
      img: "https://lormengsong.vercel.app/images/i3.jpg",
      text: "បើចង់ស្រាលខ្លួន រៀនសូត្រឱ្យមួន ឱ្យមាំឱ្យស្ទាត់ កុំចេះស្ទាក់ស្ទើរ ល្ងីល្ងើឥតបទ បើចេះប្រាកដ ប្រាក់រត់តាមហៅ។ កុំថ្នមកម្លាំង កាប់ជីកចូកចាំង កុំថារងាក្តៅ ធ្វើអ្វីឱ្យឆ្អិន កុំឱ្យខ្លោចឆៅ កុំដេកតែខ្លៅ ក្រក្រៅ សណ្តាប់។ បើល្ងង់ឱ្យចេះ រករៀនតម្រិះ រិះរកតម្រាប់ ឥន្ទ្រិយឆ្វេងស្តាំ កុំចាំគេប្រាប់ រៀនស្តីរៀនស្តាប់ រៀនមើលឱ្យស្តែង។ កើតមកជាមនុស្ស ទោះស្រីទោះប្រុស មិនដែលចេះឯង បើក្រឱ្យមាន វិញ្ញាណចេះក្រែង គិតគ្រប់កន្លែង កុំដេកតែក្រ។",
      name: " ព្រះ​ភិរម្យ​ភាសា អ៊ូ​ (ក្រមង៉ុយ)",
      role: "កវី និងអ្នកនិពន្ធខ្មែរ",
    },
  ];

  return (
    <sectio id="blog" className="w-screen h-full overflow-y-scroll bg-gray-900 bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1620121692029-d088224ddc74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')]">
      <div className="lg:w-[80%] md:w-[90%] mx-auto md:px-0 px-4 md:my-10 bg-[#111111] dark:bg-white rounded-xl overflow-hidden">

        {/* Testimonials */}
        <section className="w-full h-full flex flex-col justify-center sm:p-10 p-6" id="testimonial">

          {/* Heading */}
          <div className="w-fit sm:mb-20 mb-10">
            <h2 className="text-2xl font-bold text-white dark:text-black pb-2">
              Testimonials
            </h2>
            <div className="rounded-t-full border-[1px] border-gray-500 dark:border-gray-400 overflow-hidden">
              <hr className="border-[3px] border-green-400 w-[40%]" />
            </div>
          </div>

          {/* Loop items */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="flex flex-col border border-gray-400 dark:border-gray-300 md:p-8 p-2 rounded-xl relative"
              >
                <img
                  className="absolute lg:-left-6 lg:-top-10 -left-[25px] -top-4 lg:w-[6rem] lg:h-[6rem] sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem] rounded-full outline outline-offset-2 outline-green-400 dark:outline-green-600"
                  src={item.img}
                  alt="testimonials"
                />
  
                <p className="md:pl-8 text-gray-300 dark:text-gray-700 sm:text-xl font-semibold text-center ">
                  <span className="sm:text-5xl text-xl">❝</span>
                  {item.text}
                  <br />
                  <span className="sm:text-5xl text-xl">❞</span>
                </p>

                <div className="flex flex-col justify-center items-center">
                  <b className="text-gray-400 dark:text-gray-700 sm:text-xl sm:mt-2">{item.name}</b>
                  <i className="text-gray-500">{item.role}</i>
                </div>
              </div>
            ))}
          </div>

        </section>
      </div>
    </sectio>
  );
};

export default Blog;
