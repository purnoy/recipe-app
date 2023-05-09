import React from 'react'

const Body = ({item, clickReciever}) => {
    const {id, image, name, category, price, description } = item;
    console.log(item);
    return (
        <div className="max-w-sm rounded overflow-hiddeb shadow-lg">
            <img src={image} alt="" className="w-full" />
            <div className="px-6 py-4">
                <p className="text-gray-500 uppercase font-bold">{category}</p>
                <div className="font-bold text-xl mb-2">
                {name}
            </div>
                <p className="pb-3 text-gray-700 text-base">
                    {description}
                </p>
                <p className="text-black  uppercase font-bold">
                    Price: ${price}
                </p>
            </div>
        </div>
      )
}

export default Body
