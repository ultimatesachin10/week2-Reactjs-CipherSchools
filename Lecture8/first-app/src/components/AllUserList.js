import React from "react";
import UserDetails from "./UserDetails";

const AllUserList = () => {
    let allUsers = [
    { name: "John", email: "john@example.com", phoneNumber: "+91-9876543210"},
    { name: "Sachin", email: "sachinmishra285@gmail.com", phoneNumber: "+91-1234567890"},
    { name: "Shreyus", email: "shreyus@gmail.com", phoneNumber: "+91-9876543210"},
    { name: "UltimateSachin", email: "ultimatesachin@gmail.com", phoneNumber: "+91-7643256790"},
   ];

//    let array = allUsers.map((user, index) => (
//     <UserDetails key={index} user={user} />
//    ));

//    let array = [
//    <UserDetails user={allUsers[0]}/>,
//    <UserDetails user={allUsers[1]}/>,
//    <UserDetails user={allUsers[2]}/>,
//    <UserDetails user={allUsers[3]}/>,
// ];

   return (
    <div>
        {/* <UserDetails user={allUsers[0]}/>
        <UserDetails user={allUsers[1]}/>
        <UserDetails user={allUsers[2]}/>
        <UserDetails user={allUsers[3]}/> */}
        {/* {array} */}
        {allUsers.map((user,index) =>(
            <UserDetails key={index} user={user}/>
        ))}
    </div>
   );
};

export default AllUserList;