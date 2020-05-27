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

export default function Managemembers(props) {
  const handleOnclickEdit = (id) => {
    console.log(id);
    props.history.push("/Requestmembers/" + id);
  };
  // const handleOnclickprepare = () => {
  //   props.history.push("/Requestmembers");
  // };

  const onRemove = (id) => {
    API.delete(`api/destroy/` + id).then((res) => {
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
    // {
    //   name: "รูป",
    //   cell: (row) => (
    //     <img src={"http://127.0.0.1:8000/storage/" + row.product_picture} alt={row.product_name} height="42" width="42" />
    //   )

    // },
    {
      name: "ชื่อ-นามสกุล",
      selector: "name",
      sortable: true,
    },
    {
      name: "ตำแหน่ง",
      selector: "person_type",
      sortable: true,
    },
    {
      name: "องค์กร",
      selector: "company",
      sortable: true,
    },
    {
      name: "เบอร์โทร",
      selector: "phone_number",
      sortable: true,
    },

    {
      name: "แก้ไข้",
      center: true,
      cell: (row) => (
        <EditButton onClick={() => handleOnclickEdit(row.id)}>
          ดูข้อมูล
        </EditButton>
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
    API.get(`api/show/`).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  return (
    <div className="content-wrapper">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
