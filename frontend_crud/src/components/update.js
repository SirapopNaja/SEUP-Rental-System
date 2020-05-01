import React,{useState, useEffect} from 'react'
import API from '../api'

export default function Update(props) {

    const [data, setData] = useState({
        product_name:"",
        product_type:"",
        product_number:"",
        product_picture:"",
        product_details:"",

    })

    useEffect(() => {
        const id = props.match.params.id
        API.get(`api/product/`+id)
            .then(res =>{
                console.log(res.data)
                setData(res.data)
            })
    }, [props])

    const handle = (e) => {
        const newData = {...data}
        newData[e.target.name] = e.target.value
        setData(newData)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const id = props.match.params.id
        API.put(`api/product/`+id,data)
            .then(res => {
                console.log(res.data);
                props.history.push("/")
            });
        
    }

    return (
        <div  >
            
        <form className="content-wrapper" onSubmit={onSubmit}>
            <div>
            ชื่ออุปกรณ์
                <input type="text" value={data.product_name} name="product_name" onChange={handle} />
            </div>
            <div>
            เลือกหมวดหมู่ให้ตรงกับสินค้า
                <select name="product_type" id="product_type" value={data.product_type}  onChange={handle}>
                    <option value= 'One'>One</option>
                    <option value= 'Two'>Two</option>
                    <option value= 'Three'>Three</option>
                </select>
            </div>
            <div>
            จำนวนอุปกรณ์
                <input type="number" value={data.product_number} name="product_number" onChange={handle} />
            </div>
            <div>
            รูปภาพอุปกรณ์
                <input type="text" value={data.product_picture} name="product_picture" onChange={handle} />
            </div>
            <div>
            รายละเอียดอุปกรณ์
                <input type="text" value={data.product_details} name="product_details" onChange={handle} />
            </div>
            <button type="submit">submit</button>
            
        </form>

        </div>
    )
}