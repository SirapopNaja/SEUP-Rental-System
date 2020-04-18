import React,{useState, useEffect} from 'react'
import API from '../api'

export default function Update(props) {

    const [data, setData] = useState({
        product_name:"",
        product_type:"",
        product_price:"",
        product_picture:"",
        product_details:"",
        product_address:"",
        phone_number:""
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
        <div>
        <form onSubmit={onSubmit}>
            <div>
                หัวข้อสินค้าที่คุณต้องการให้ยืม
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
                ระบบราคาที่เหมาะสม
                <input type="number" value={data.product_price} name="product_price" onChange={handle} />
            </div>
            <div>
                รูปภาพสินค้า
                <input type="text" value={data.product_picture} name="product_picture" onChange={handle} />
            </div>
            <div>
                รายละเอียดสินค้า
                <input type="text" value={data.product_details} name="product_details" onChange={handle} />
            </div>
            <div>
                ระบุพื่นที่สินค้า
                <input type="text" value={data.product_address} name="product_address" onChange={handle} />
            </div>
            <div>
                เบอร์โทรติดต่อ
                <input type="number" value={data.phone_number} name="phone_number" onChange={handle} />
            </div>
            <button type="submit">submit</button>
            
        </form>

        </div>
    )
}