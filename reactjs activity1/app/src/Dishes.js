import { useState, useEffect } from "react"
import axios from "axios"
import "./Dishes.css";
    
import { Link } from "react-router-dom"

function Dishes(){
    
    const [data,setData] = useState([]) //const data=[]
    const [category,setCategory] = useState([]) //const category=[]
    const [cnt, setCnt] = useState(0) // const cnt =0
    const [selectcat,setSelectcat] = useState('');
    useEffect(()=>{
        getproductslist()
        getcategory()
    },[selectcat])

    const getproductslist = ()=>{
        axios.get('https://fakestoreapi.com/products').then((response)=>{
           // console.log(response.data)
           let res = response.data
           if(selectcat === ''){
            setData(res)
           }else{
           // console.log(selectcat)
            let filtered_data = res.filter((ele)=>{
                return (ele.category === selectcat)
               })
            if(filtered_data.length == 0){
                setData(res)
            }else{
                setData(filtered_data)
            }               
           }           
        })
    }

    const getcategory = ()=>{
        axios.get('https://fakestoreapi.com/products/categories').then((response)=>{
           // console.log(response.data)
            setCategory(response.data)
        })
    }
    return(
        <div style={{marginLeft:"100px"}}>
            <h1 style={{margin:"50px"}}>New Products</h1>
            {/* <p>{cnt}</p>
            <button onClick={()=>setCnt(cnt +1 )}>Incr by 1</button> */}
            <div>
                <select style={{width:"300px",height:"30px"}} value={selectcat} onChange={(e)=>setSelectcat(e.target.value)}>
                    <option value="">--select category</option>
                    {category.map((ele) => (
                    <option key={ele} value={ele}>
                        {ele}
                    </option>
                    ))}
                </select>
            </div>
            <div className="item-list">
            {
                data.map((ele,i)=>{
                    return(
                        <div className="card" key={i}>
                            <Link to={`../singleproduct/${ele.id}`}><img src={ele.image} alt="" /></Link>


                           
                            <p>{ele.title}</p>
                            <p>{ele.price}</p>
                            <p>{ele.category}</p>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
export default Dishes