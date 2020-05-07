import React,{useState, useEffect} from 'react'
import "./styles.css";
import API from '../api'
import Button from '@material-ui/core/Button';

export default function Update(props) {
    const [picture, setPicture] = useState(null) 
    const [data, setData] = useState({
        product_name:"",
        product_type:"",
        product_number:"",
        product_details:"",

    })
    const handlePicture = (e) =>{
        setPicture(e.target.files[0])
    }

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
        var formData = new FormData();
        formData.append('product_picture', picture);
        formData.append('product_name', data.product_name);
        formData.append('product_type', data.product_type);
        formData.append('product_number', data.product_number);
        formData.append('product_details', data.product_details);
        formData.append('_method', 'put');
        const id = props.match.params.id
        API.post(`api/product/`+id,formData)
            .then(res => {
                console.log(res.data);
                props.history.push("/")
            });
        
    }
    const onSubmitHome = (e) => {
        props.history.push("/")
    }
    return (
        <div class="content-wrapper">
            <section class="content">
                <div class="row">
                    <div class="col-md-6">
                        <div class="box box-primary">
                            <div class="box-header with-border">
                                <h3 class="box-title">Create Equipment</h3><br></br>
                            </div>
                            <form  onSubmit={onSubmit} role="form" >
                                <div class="box-body">
                                    <div class="form-group">
                                        <label>ชื่ออุปกรณ์</label>
                                        <input class="form-control" type="text" value={data.product_name} name="product_name" onChange={handle}></input>
                                    </div>
                                    <div class="form-group">
                                        <label>หมวดหมู่อุปกรณ์</label>
                                        <select class="form-control" name="product_type" id="product_type" value={data.product_type} onChange={handle}>
                                            <option value=""></option>
                                            <option value="One">One</option>
                                            <option value="Two">Two</option>
                                            <option value="Three">Three</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label>จำนวนอุปกรณ์</label>
                                        <input class="form-control" type="number" value={data.product_number} name="product_number" onChange={handle}></input>
                                    </div>
                                    <div>
                                        รูปภาพอุปกรณ์
                                        <input type="file"  name="product_picture" onChange={handlePicture} />
                                    </div>
                                    {/* <div>
                                        <label>UploadImage</label>
                                        <ImageUploading value={data.product_picture} name="product_picture" multiple onChange={onChange} maxNumber={maxNumber}>
                                            {({ imageList, onImageUpload }) => (
                                                <div className="upload__image-wrapper">
                                                    <button onClick={onImageUpload}>Upload images</button>&nbsp;
                                                    {imageList.map(image => (
                                                        <div key={image.key} className="image-item">
                                                            <img src={image.dataURL} alt="" width="100" />
                                                            <div className="image-item__btn-wrapper">
                                                                <button onClick={image.onRemove}>Remove</button>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </ImageUploading>
                                    </div> */}
                                    <div class="form-group">
                                        <label>รายละเอียดอุปกรณ์</label>
                                        <textarea class="form-control" type="text" value={data.product_details} name="product_details" onChange={handle}></textarea>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col">
                                        <Button type="submit" variant="contained" color="primary">submit</Button>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}