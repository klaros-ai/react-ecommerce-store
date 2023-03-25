// import { Card, List, ListItem, Title } from "@tremor/react";
// import React from "react";

// var cities = [
//     {
//       city: "Athens",
//       rating: "2 open PR",
//     },
//     {
//       city: "Luzern",
//       rating: "1 open PR",
//     },
//     {
//       city: "Zürich",
//       rating: "0 open PR",
//     },
//     {
//       city: "Vienna",
//       rating: "1 open PR",
//     },
//     {
//       city: "Ermatingen",
//       rating: "0 open PR",
//     },
//     {
//       city: "Lisbon",
//       rating: "0 open PR",
//     },
//   ];



// //   function Element() { 
  
// //     function handleClick(event) { 
      
// //       console.log(event) 
      
// //     } 
    
// //     return ( 
      
// //       <div onClick={handleClick}>
        
// //         Hello World 
        
// //       </div> 
      
// //     ); 
    
// //   }; 
  
//   //export {Element};


// class Dashboard extends React.Component{

//     static add(message) {
//         console.log("hey im here");
//         console.log(message);
//         cities.push({city: message, rating:"b"});
//         console.log(cities)
//         //this.forceUpdate()


//       }


    
//     // handleClick = () => {
//     // // force a re-render
//     //     this.forceUpdate();
//     // };

//     render(){
//         return (

//             <Card className="max-w-xs mx-auto">
//                 <Title>Tremor's Hometowns</Title>
//                 <List>
//                 {cities.map((item) => (
//                     <ListItem key={item.city}>
//                     <span>{item.city}</span>
//                     <span>{item.rating}</span>
//                     </ListItem>
//                 ))}
//                 </List>
//             </Card>
        
//               );
//     }
// }


// // const Dashboard = props => {

    


// //     const cities = [
// //         {
// //           city: "Athens",
// //           rating: "2 open PR",
// //         },
// //         {
// //           city: "Luzern",
// //           rating: "1 open PR",
// //         },
// //         {
// //           city: "Zürich",
// //           rating: "0 open PR",
// //         },
// //         {
// //           city: "Vienna",
// //           rating: "1 open PR",
// //         },
// //         {
// //           city: "Ermatingen",
// //           rating: "0 open PR",
// //         },
// //         {
// //           city: "Lisbon",
// //           rating: "0 open PR",
// //         },
// //       ];


// //       return (
// //     <Card className="max-w-xs mx-auto">
// //         <Title>Tremor's Hometowns</Title>
// //         <List>
// //         {cities.map((item) => (
// //             <ListItem key={item.city}>
// //             <span>{item.city}</span>
// //             <span>{item.rating}</span>
// //             </ListItem>
// //         ))}
// //         </List>
// //     </Card>

// //       );






// // }


// export default Dashboard;




// // export default () => (
// //   <Card className="max-w-xs">
// //     <Title>Tremor's Hometowns</Title>
// //     <List>
// //       {cities.map((item) => (
// //         <ListItem key={item.city}>
// //           <span>{item.city}</span>
// //           <span>{item.rating}</span>
// //         </ListItem>
// //       ))}
// //     </List>
// //   </Card>
// // );



// import { Card, Title, Text, Grid } from "@tremor/react";

// export default function Example() {
//   return (
//     <main>
//       <Title>Dashboard</Title>
//       <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

//       {/* Main section */}
//       <Card className="mt-6">
//         <div className="h-96" />
//       </Card>

//       {/* KPI section */}
//       <Grid numColsMd={2} className="mt-6 gap-6">
//         <Card>
//           {/* Placeholder to set height */}
//           <div className="h-28" />
//         </Card>
//         <Card>
//           {/* Placeholder to set height */}
//           <div className="h-28" />
//         </Card>
//       </Grid>
//     </main>
//   );
// }
















import { Card, Text, Tab, TabList, Grid,Metric,Title, AreaChart, List, ListItem , BarChart, Subtitle, ProgressBar} from "@tremor/react";

import { useState } from "react";

export default function Example() {
  const [selectedView, setSelectedView] = useState("1");



  const locationA = [
    {
      name: "Mario Kart",
      share: 68,
      amount: 34,
    },
    {
      name: "Call of Duty",
      share: 10,
      amount: 5,
    },
    {
      name: "Battle Field",
      share: 14,
      amount: 7,
    },
    {
      name: "Sonic",
      share: 6,
      amount: 3,
    },
    {
      name: "Grand Theft Auto V",
      share: 2,
      amount: 1,
    },
  ];

  const chartdata = [
    {
      date: "Jan 22",
      "Mean": 40,
      "Median": 20,
    },
    {
      date: "Feb 22",
      "Mean": 30,
      "Median": 10,
    },
    {
      date: "Mar 22",
      "Mean": 60,
      "Median": 20,
    },
    {
      date: "Apr 22",
      "Mean": 21,
      "Median": 40,
    },
    {
      date: "May 22",
      "Mean": 20,
      "Median": 5,
    },
    {
      date: "Jun 22",
      "Mean": 100,
      "Median": 20,
    },
  ];



  const cities = [
    {
      city: "What is your most popular game?",
      rating: "20",
    },
    {
      city: "What game would you recommend for my big brother?",
      rating: "10",
    },
    {
        city: "Which adventure game is affordable?",
        rating: "5",
      }
  ];


  const dataFormatter = (number: number) => {
    return  Intl.NumberFormat("us").format(number).toString();
  };



  return (
    <main>
      <Title>Merchant Dashboard</Title>
      <Text>A look into how your visitors are engaging with your own concierge</Text>

      <TabList
        defaultValue="1"
        onValueChange={(value) => setSelectedView(value)}
        className="mt-6"
      >
        <Tab value="1" text="At a Glance" />
        <Tab value="2" text="Trends over time" />
      </TabList>

      {selectedView === "1" ? (
        <>
          <Grid numColsMd={2} numColsLg={3} className="gap-10 mt-6">


            <Card  decoration="top" decorationColor="indigo">
    <Text>Number of Sessions</Text>
    <Metric>200</Metric>
  </Card>

  <Card  decoration="top" decorationColor="indigo">
    <Title>Popular messages</Title>
    <List>
      {cities.map((item) => (
        <ListItem key={item.city}>
          <span>{item.city}</span>
          <span>{item.rating}</span>
        </ListItem>
      ))}
    </List>
  </Card>



  <Card  decoration="top" decorationColor="indigo" >
    <Title>Games recommended</Title>
          <List className="mt-4">
            {locationA.map((product) => (
              <ListItem key={product.name}>
                <div className="w-full">
                  <Text>{product.name}</Text>
                  <ProgressBar
                    percentageValue={product.share}
                    label={`${product.share}%`}
                    tooltip={product.amount}
                  />
                </div>
              </ListItem>
            ))}
          </List>
        </Card>


          </Grid>

          {/* <div className="mt-6">
            <Card>
              <div className="h-80" />
            </Card>
          </div> */}
        </>
      ) : (
        <div className="mt-6">
          <Card>
    <Title>User session engagement (seconds)</Title>
    <AreaChart
      className="h-72 mt-4"
      data={chartdata}
      index="date"
      categories={["Mean", "Median"]}
      colors={["indigo", "cyan"]}
      valueFormatter={dataFormatter}
    />
  </Card>
        </div>
      )}
    </main>
  );
}