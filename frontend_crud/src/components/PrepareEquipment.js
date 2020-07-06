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
  background: blue;
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



export default function PrepareEquipment(props) {

  const handleOnclickEdit = (id) => {
    console.log(id);
    props.history.push("/request/" + id);
  };

  function statusTotext(status) {
    if (status.status_id == 1){
      return "อุปกรณ์พร้อมรับ"
    }
    if (status.status_id == 2){
      return "กำลังดำเนินการ"
    }
    if (status.status_id == 3){
      return "รับอุปกรณ์แล้ว"
    }
    else{
      return "อุปกรณ์มีปัญหา"
    }
  };
  const columns = [
    // {
    //   name: "รูป",
    //   selector: "product_picture",
    //   sortable: true,
    // },
    {
      name: "ชื่อ-นามสกุล",
      selector: "name",
      sortable: true,
    },
  
    {
      name: "อุปกรณ์",
      selector: "product_name",
      sortable: true,
    },
    {
      name: "รหัสอุปกรณ์",
      selector: "product_number",
      sortable: true,
    },

    // {
    //   name: "เวลาที่ทำการขอยืม",
    //   selector: "created_at",
    //   sortable: true,
    // },

    {
      name: "ระยะเวลาการยืม",
      selector: "lend_day",
      sortable: true,
    },

    {
        name: "สถานะ",
        selector: "status_id",
        sortable: true,
      },

      {
        name: "ขอยืม",
        center: true,
        cell: (row) => (
          <EditButton onClick={() => handleOnclickEdit(row.id)}>จัดการ</EditButton>
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
    API.get(`api/lendproduct/`).then((res) => {
      console.log(res.data);
      for(let i of res.data){
        i.status_id = statusTotext(i);
      }
      setData(res.data);
    });
  }, []);
 

  return (
    <div className="content-wrapper">
      <DataTable
   
        columns={columns}
        data={data}
      />
    </div>
  );
}
