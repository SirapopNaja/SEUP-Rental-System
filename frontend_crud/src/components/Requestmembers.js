import React,{useState, useEffect} from 'react'
import "./styles.css";
import API from '../api'
import Button from '@material-ui/core/Button';

export default function Requestmembers(props) {
    
    const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
      c_password: "",
      last_name: "",
      phone_number: "",
      company: "",
      position: "",
      person_type: ""
    })
    const [picture, setPicture] = useState("") 
    const handlePicture = (e) =>{
        setPicture(e.target.files[0])
    }
    useEffect(() => {
        const id = props.match.params.id
        API.get(`api/userupdate/`+id)
            .then(res =>{
                console.log(res.data)
                setData(res.data)
            })
    }, [props])

    const handle = (e) => {
        const newData = { ...data }
        newData[e.target.name] = e.target.value
        setData(newData)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        var formData = new FormData();
        formData.append('name_picture', picture);
        formData.append('ssn_picture', picture);
        formData.append('company', data.company);
        formData.append('position', data.position);
        formData.append('name', data.name);
        formData.append('last_name', data.last_name);
        formData.append('phone_number', data.phone_number);
        formData.append('_method', 'put');
        const id = props.match.params.id
        API.post(`api/update/`+id,formData)
            .then(res => {
                console.log(res.data);
                props.history.push("/index")
            });
        
    }
    const onSubmitHome = (e) => {
        props.history.push("/index")
    }
    return (
        <div class="content-wrapper">
            <section class="content">
                <div class="row">
                    <div class="col-md-6">
                        <div class="box box-primary">
                            <div class="box-header with-border">
                                <h3 class="box-title">ตรวจสอบข้อมูลสมาชิก</h3><br></br>
                            </div>
                            <form  onSubmit={onSubmit} role="form" >
                                <div class="box-body">
                                    <div class="form-group">
                                        <label>องค์กร</label>
                                        <input class="form-control" type="text" value={data.company} name="company" onChange={handle}></input>
                                    </div>
                                    <div class="form-group">
                                        <label>ตำแหน่ง</label>
                                        <input class="form-control" type="text" value={data.position} name="position" onChange={handle}></input>
                                    </div>
                                  
                                    <div class="form-group">
                                        <label>first_name</label>
                                        <input class="form-control" type="text" value={data.name} name="name" onChange={handle}></input>
                                    </div>
                                    <div class="form-group">
                                        <label>last_name</label>
                                        <input class="form-control" type="text" value={data.last_name} name="last_name" onChange={handle}></input>
                                    </div>
                                    <div class="form-group">
                                        <label>phone_number</label>
                                        <input class="form-control" type="text" value={data.phone_number} name="phone_number" onChange={handle}></input>
                                    </div>
                                    <div class="form-group">
                                        <label>ให้สถานะผู้ใช้ระบบ</label>
                                        <select class="form-control" name="person_type" id="person_type" value={data.person_type} onChange={handle}>
                                            <option value=""></option>
                                            <option value="1" >นิสิต</option>
                                            <option value="2">อาจารย์</option>
                                            <option value="3">แอดมิน</option>
                                        </select>
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