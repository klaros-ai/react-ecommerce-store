import { Card, List, ListItem, Title } from "@tremor/react";
import React from "react";

var cities = [
    {
      city: "Athens",
      rating: "2 open PR",
    },
    {
      city: "Luzern",
      rating: "1 open PR",
    },
    {
      city: "Zürich",
      rating: "0 open PR",
    },
    {
      city: "Vienna",
      rating: "1 open PR",
    },
    {
      city: "Ermatingen",
      rating: "0 open PR",
    },
    {
      city: "Lisbon",
      rating: "0 open PR",
    },
  ];



//   function Element() { 
  
//     function handleClick(event) { 
      
//       console.log(event) 
      
//     } 
    
//     return ( 
      
//       <div onClick={handleClick}>
        
//         Hello World 
        
//       </div> 
      
//     ); 
    
//   }; 
  
  export {Element};


class Dashboard extends React.Component{

    static add(message) {
        console.log("hey im here");
        console.log(message);
        cities.push({city: message, rating:"b"});
        console.log(cities)
        //this.forceUpdate()


      }


    
    handleClick = () => {
    // force a re-render
        this.forceUpdate();
    };

    render(){
        return (

            <Card className="max-w-xs mx-auto">
                <Title>Tremor's Hometowns</Title>
                <List>
                {cities.map((item) => (
                    <ListItem key={item.city}>
                    <span>{item.city}</span>
                    <span>{item.rating}</span>
                    </ListItem>
                ))}
                </List>
            </Card>
        
              );
    }
}


// const Dashboard = props => {

    


//     const cities = [
//         {
//           city: "Athens",
//           rating: "2 open PR",
//         },
//         {
//           city: "Luzern",
//           rating: "1 open PR",
//         },
//         {
//           city: "Zürich",
//           rating: "0 open PR",
//         },
//         {
//           city: "Vienna",
//           rating: "1 open PR",
//         },
//         {
//           city: "Ermatingen",
//           rating: "0 open PR",
//         },
//         {
//           city: "Lisbon",
//           rating: "0 open PR",
//         },
//       ];


//       return (
//     <Card className="max-w-xs mx-auto">
//         <Title>Tremor's Hometowns</Title>
//         <List>
//         {cities.map((item) => (
//             <ListItem key={item.city}>
//             <span>{item.city}</span>
//             <span>{item.rating}</span>
//             </ListItem>
//         ))}
//         </List>
//     </Card>

//       );






// }


export default Dashboard;




// export default () => (
//   <Card className="max-w-xs">
//     <Title>Tremor's Hometowns</Title>
//     <List>
//       {cities.map((item) => (
//         <ListItem key={item.city}>
//           <span>{item.city}</span>
//           <span>{item.rating}</span>
//         </ListItem>
//       ))}
//     </List>
//   </Card>
// );