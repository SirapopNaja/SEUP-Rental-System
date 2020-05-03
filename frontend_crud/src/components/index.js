import React, { useState, useEffect } from "react";
import API from "../api";
import styled from "styled-components";
import DataTable from "react-data-table-component";

<<<<<<< HEAD
 const Button = styled.button`
    background: #339FFF;
    color: white;
    margin-left: 145%;
    font-size: 15px;
    width: 130px;
    height: 40px;
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
=======
const Button = styled.button`
  background: #339fff;
  font-size: 15px;
  margin-left: 160%;
  color: white;
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
>>>>>>> 1f9ad1de7a543affb63b2fcb7dfdf5e5c24917be
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
<<<<<<< HEAD
  const handleOnclickcreate = () => {
    props.history.push("/create")
  }
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
=======
  const handleOnclickEdit = (id) => {
    console.log(id);
    props.history.push("/update/" + id);
  };
  const handleOnclickprepare = () => {
    props.history.push("/prepare");
  };

  const onRemove = (id) => {
    API.delete(`api/product/` + id).then((res) => {
      console.log(res.data);
      const myData = data.filter((item) => item.id !== id);
      setData(myData);
    });
  };
  const columns = [
    {
      name: "รูป",
      selector: "product_picture",
      sortable: true,
    },
    {
      name: "ชื่ออุปกรณ์",
      selector: "product_name",
      sortable: true,
    },
    {
      name: "ประเภท",
      selector: "product_type",
      sortable: true,
    },
    {
      name: "จำนวน",
      selector: "product_number",
      sortable: true,
    },
>>>>>>> 1f9ad1de7a543affb63b2fcb7dfdf5e5c24917be

    {
      name: "แก้ไข",
      center: true,
      cell: (row) => (
        <EditButton onClick={() => handleOnclickEdit(row.id)}>แก้ไข</EditButton>
      ),
    },
    {
      name: "ลบ",
      center: true,
      cell: (row) => (
        <DeleteButton
          onClick={() => {
            if (window.confirm("Are you sure you want delete this item?"))
              onRemove(row.id);
          }}
        >
          ลบ
        </DeleteButton>
      ),
    },
  ];
  const [data, setData] = useState([]);

<<<<<<< HEAD
    
    return (
        <div className="content-wrapper">
                <DataTable
                title={<Button onClick={() => handleOnclickcreate()}>เพิ่มอุปกรณ์</Button>}
                columns={columns}
                data={data}
                />
        </div>
    )
=======
  useEffect(() => {
    API.get(`api/product/`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
>>>>>>> 1f9ad1de7a543affb63b2fcb7dfdf5e5c24917be

  return (
    <div className="content-wrapper">
      <DataTable
        title={
          <Button onClick={() => handleOnclickprepare()}>เพิ่มอุปกรณ์</Button>
        }
        columns={columns}
        data={data}
      />
    </div>
  );
}
