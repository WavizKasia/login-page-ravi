import React, { useState } from 'react'
import "./costumTable.css";


const Users = [
  {
    id: 1,
    selected: false,
    name: "amod kumar",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    avatar:"https://reqres.in/img/faces/7-image.jpg"
  },
  {
    id: 2,
    selected: false,
    name: "ashish rao",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    avatar:"https://reqres.in/img/faces/8-image.jpg"
  },
  {
    id: 3,
    selected: false,
    name: "Clementine Bauch",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    avatar:"https://reqres.in/img/faces/9-image.jpg"
  },
  {
    id: 4,
    selected: true,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
    website: "kale.biz",
    avatar:"https://reqres.in/img/faces/10-image.jpg"
  },
  {
    id: 5,
    selected: false,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
    avatar:"https://reqres.in/img/faces/11-image.jpg"
  },
  {
    id: 6,
    selected: false,
    name: "ravi prasad",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
    website: "demarco.info",
    avatar:"https://reqres.in/img/faces/12-image.jpg"

  },
  
];


const CostumeTable = () => {

  const[list,setList]=useState(Users)
  const[ MasterChecked,setMasterChecked]=useState(false)
 
   const onMasterCheck=(e)=>{
    let tempList =list;
    console.log("check status",e.target.checked)
    tempList.map((user) => (user.selected = e.target.checked));
    setMasterChecked(e.target.checked);
    setList(tempList)
   }

  const onItemCheck=(e, item)=>{
    let tempList = list;
   let updatedUser= tempList.map((user) => {
      // console.log("user id",user.id)
      // console.log("item id",item.id)
      if (user.id === item.id) {
      //   console.log("user id",user.id)
      // console.log("item id",item.id)
        user.selected = e.target.checked;
       // console.log(user.selected)
      }
      return user;
    });


    console.log("user1 :", updatedUser)
//To Control Master Checkbox State
const totalItems = list.length;
const totalCheckedItems = tempList.filter((e) => e.selected).length;
setMasterChecked(totalItems === totalCheckedItems);
setList(updatedUser)


  }

  

  return (
    <>
    
  <table className="table table-success table-striped mt-2" >
  <thead>
    <tr>
      
      <th scope="col">
      <input type="checkbox"
        className="form-check-input checkBox"
       checked={MasterChecked}
        id="mastercheck"
        onChange={(e) =>onMasterCheck(e)}
        />
      </th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">phone</th>
      <th scope="col">website</th>
      <th scope="col">avatar</th>
    </tr>
  </thead>
  <tbody>

  {
Users.map((user)=>{
  return(
    <tr key={user.id} >
    <td>
      <input type="checkbox"  
      className=" form-check-input checkBox"
      checked={user.selected}
      id={`rowcheck${user.id}`}
      onChange={(e) =>onItemCheck(e, user)}
      />
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.website}</td>
      <td style={{width:"180px"}}><img src={user.avatar} alt="avatar" /></td>
    </tr>
    
  )
})
  }
    
   
  </tbody>
</table>

    </>
  )
}

export default CostumeTable