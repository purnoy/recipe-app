import { useState, useEffect } from "react";


const Header = ({categoryList, clickReciever} ) => {
    
    const [fixedMenu , setFixedMenu] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>60?setFixedMenu(true):setFixedMenu(false)
        })
    })

  return (
    <header className={`${fixedMenu? 'fixed top-0 left-0 right-0 w-[100%] md:w-[60%] lg:w-[70%] xl:w-[80%] shadow-lg ': 'w-full'} mx-auto transition-all duration-1000 flex justify-center items-center bg-slate-900 rounded-md z-10`}>
        <nav className="flex justify-around gap-[50px] font-semibold text-xl p-5 group ">
        {
                    categoryList.map((item,index)=>{
                        return(
                            <a key={index} onClick={()=>clickReciever(item)} className='nav-item-new' href="#">{item}</a>
                        )
                    })
                }
        </nav>
        
    </header>
  )
}

export default Header
