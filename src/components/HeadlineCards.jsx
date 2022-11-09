import React from 'react';

const HeadlineCards = () => {
    return (
      <div className='max-w-[1640px] mx-auto grid md:grid-cols-3 gap-6 px-4 py-12'>
        {/* Card */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="bg-black/50 absolute w-full h-full rounded-xl text-white ">
            <p className="font-bold text-2xl px-2 pt-4">
              The Fellowship of The Ring
            </p>
            <p className="px-2">J R R Tolkien</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1618845072579-853968656c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=783&q=80"
            alt="/"
          />
        </div>
        
        {/* Card */}
        <div className=" relative">
          {/* Overlay */}
          <div className="bg-black/50 absolute w-full h-full rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">
              The Dead Zone
            </p>
            <p className="px-2">Stephen King</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1635007129134-814c0b7c777e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="/"
          />
        </div>
        {/* Card */}
        <div className="rounded-xl relative">
          {/* Overlay */}
          <div className="bg-black/50 absolute w-full h-full rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">
              Harry Potter
            </p>
            <p className="px-2">J K Rowling</p>
            <button className="border-white bg-white text-black mx-2 absolute bottom-4">
              Order Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="/"
          />
        </div>
      </div>
    );
};

export default HeadlineCards;