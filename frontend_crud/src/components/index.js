import React, {useState, useEffect} from 'react'
import API from '../api'
import styled from "styled-components"
import DataTable from 'react-data-table-component';

 const Button = styled.button`
    background: #339FFF;
    color: white;
    width: 60px;
    height: 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    `;
 const DeleteButton = styled.button`
    background: red;
    color: white;
    width: 60px;
    height: 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;
 const EditButton = styled.button`
    background: green;
    color: white;
    width: 60px;
    height: 30px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;
 const Warpper = styled.div`
    width: 100%;
`;

export default function Index(props) {
    const handleOnclickEdit = (id) => {
        console.log(id)
        props.history.push("/update/"+id)
    }

    const onRemove = (id) => {
        API.delete(`api/product/`+id)
        .then(res=>{
            console.log(res.data)
            const myData = data.filter(item=>item.id !== id)
            setData(myData)
        })
    }
    const columns = [
        {
          name: 'ชื่ออุปกรณ์',
          selector: 'product_name',
          sortable: true,
        },
        {
          name: 'ประเภท',
          selector: 'product_type',
          sortable: true,
        },
        {
          name: 'จำนวน',
          selector: 'product_number',
          sortable: true,
        },
        
        {
          name: 'แก้ไข',
          center: true,
          cell: row => <EditButton onClick={() => handleOnclickEdit(row.id)}>แก้ไข</EditButton>
        },
        {
          name: 'ลบ',
          center: true,
          cell: row => <DeleteButton onClick={() => { if (window.confirm('Are you sure you want delete this item?')) onRemove(row.id)} }>ลบ</DeleteButton>
        }
      ];
    const [data, setData] = useState([])

    useEffect(() => {
        API.get(`api/product/`)
            .then(res =>{
                console.log(res.data)
                setData(res.data)
            })
    }, [])

    
    return (
        <div className="content-wrapper">
                <DataTable
                title="อุปกรณ์"
                columns={columns}
                data={data}
                />
        </div>
    )

}