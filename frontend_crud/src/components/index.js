import React, { useState, useEffect } from "react";
import API from "../api";
import styled from "styled-components";
import DataTable from "react-data-table-component";
import "./App.css";


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
`;

const UPButton = styled.button`
background: #339fff;
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
    console.log(id);
    props.history.push("/update/" + id);
  };

  const handleOnclickEditpicture = (id) => {
    console.log(id);
    props.history.push("/updatapicture/" + id);
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
    // {
    //   name: "รูป",
    //   selector: "product_picture",
    //   sortable: true,
    // },
    {
      name: "รูป",
      cell: (row) => (
        <img src={"http://127.0.0.1:8000/storage/" + row.product_picture} alt={row.product_name} height="42" width="42" />
      )

    },
    
    // {
    //   name: "ID",
    //   selector: "id",
    //   sortable: true,
    // },

    {
      name: "ชื่อ",
      selector: "product_name",
      sortable: true,
    },

    {
      name: "ประเภท",
      selector: "product_type",
      sortable: true,
    },
    {
      name: "รหัสอุปกรณ์",
      selector: "product_number",
      sortable: true,
    },
    {
      name: "ระยะเวลาการยืม",
      selector: "lend_day",
      sortable: true,
    },


    {
      name: "แก้ไข้",
      center: true,
      cell: (row) => (
        <EditButton onClick={() => handleOnclickEdit(row.id)}>แก้ไข้</EditButton>
      ),
    },

    {
      name: "แก้ไข้รูป",
      center: true,
      cell: (row) => (
        <UPButton onClick={() => handleOnclickEditpicture(row.id)}>แก้ไข้รูป</UPButton>
      ),
    },

    {
      name: "ลบ",
      center: true,
      cell: (row) => (
        <div>
          { row.status_id === 1 ? <DeleteButton onClick={() => {if (window.confirm("Are you sure you want delete this item?"))onRemove(row.id);}}>ลบ</DeleteButton> :"" }</div>
      ),
    },
    // {
    //   name: "Test",
    //   center: true,
    //   cell: (row) => (
    //     <div class="input-group">
    //       <input type="button" value="-" class="button-minus" data-field="quantity"/>
    //       <input type="number" step="1" max="" value="0" name="quantity" class="quantity-field"/>
    //       <input type="button" value="+" class="button-plus" data-field="quantity"/>
    //     </div>
    //   ),
    // },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get(`api/product/`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

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
