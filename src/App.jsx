
import Body from "./assets/components/Body";
import Header from "./assets/components/Header";
import Menu from "./assets/components/menuApi";
import { useState, useEffect } from "react";

useState
const App = () => {
  const [menu, setMenu] = useState(Menu);
  const [categoryReciecer, setCategoryReciecer] = useState([]);
  

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>60?setFixedMenu(true):setFixedMenu(false)
        })
    },[])
const categoryList = [...new Set(Menu.map(item=>{
  return item.category;
})), ];
categoryList.push('All');
const clickReciever = (item=>{
  if(item==='All'){
    setMenu(Menu);
  }
  else{
    const newCate = Menu.filter(product =>{
      return product.category === item;
   })
    setMenu(newCate);
  }
  
})


  return (
    <div className="container mx-auto">
      <Header clickReciever={clickReciever} categoryList={categoryList}></Header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-16 gap-[50px] ">
      {
        menu.map(item=>{

          return(
            <Body item={item} clickReciever={clickReciever} key={item.id} ></Body>
          )
        })
      }
      </div>
    </div>
  )
}

export default App
