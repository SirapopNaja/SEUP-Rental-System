import React, { useEffect , useState } from 'react'
import API from "../../api";

export const Userapi = () => {
    
    const [user, setUser] = useState([]);


  

    function UseUserApi() {

        API.post(`api/details/`).then((res) => {
            console.log("setcon", res.data.user.name);
            setUser(res.data.user.name);
          });


 

    }

    useEffect(() => {
        UseUserApi()
       
     }, [])   

     return [user]
}
