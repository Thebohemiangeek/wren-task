import React,{useState,useEffect}  from 'react'
import styled from 'styled-components'
import Breed from './Breed'
/* Theres a bug, when you create a new sheep after you brand, in order to see the new sheep you need to click the branding button  , thats because I didnt extract the sheep creator in to an independant component and call it onEffect when submit to update results the same way I do update standar flock.I can fix it by putting it outside , the same way I would be able to reuse it to create an on breeding match then call creator to create a new sheep.
Right now create sheep push any new sheep to the flock of unculled sheeps.
As the sheep match maker only works on Culled sheeps, and not on the unculled array. Again this would all be solved by extracting the creator, and create a function to update state in any new submit.
Theres also another unintended behavior, I call update and !update on a click event, this means that on a series of clicks the sheeps become unbranded every other click, thats because I did some weird experiment to get something working and the table loading is dependant on a conditional check of update.With refactoring I would lift the state up, in order to trigguer changes on to the children components and avoid that bug.
I can definitively do it properly and fix the bugs , but I would require more time, as I know I had to present something fast I would rather showcase my bugged answer in order to showcase how I usually work, theres some code cleanning I would do, and some refactoring aswell.
I used a lot of :any instead of creating some Type in order to save time   build a bugged prototype.
I actually created a Canvas prototype on monday, and had sheeps with sprites, but realize this was to showcase logic, and not my skills to use canvas, and If I stayed on that route I would have need a full week, so I choose to start a new project and just do it with a table and the most basic layout, I could make this look awsome as thats my strong suit, but I dont think that skill of mine needs much to showcase as I have several examples.


*/
const Field = (flock:any ) => {
    const [update, setUpdate] = useState(false)

    const [fertileFemale,setFertileFemale] = useState("")
    const [fertileMale,setFertileMale] = useState("")
const [clicked,setClicked] = useState(false)

const [results, setFilteredResult] = useState( [] as  any);

const cullTheFlock = (flock:any) =>{
   
        return flock.flock.map((sheep:any) => {
            let  placeboOrRussianFluVaccine = Math.round(Math.random()) ? true : false;

            var temp = Object.assign({}, sheep);
            if (temp.branded === false) {
                temp.branded = placeboOrRussianFluVaccine;
                temp.fertile = !placeboOrRussianFluVaccine;
            }
            return temp;
        });
    }
    
  
const handleClick = () => {

   setUpdate(!update)
    setFilteredResult( cullTheFlock(flock));
setFertileFemale(arrayOfFemales[randomIndexOfFemale]);
setFertileMale(arrayOfMales[randomIndexOfMale])

};
const checkCouple = ()   =>{
    if (fertileFemale && fertileMale){
        const nameOfFertileFemale = JSON.parse(JSON.stringify(fertileFemale)).name
        const nameOfFertileMale = JSON.parse(JSON.stringify(fertileMale)).name

    return ` We got a match ${nameOfFertileFemale} ${nameOfFertileMale}  `
    }  else{
        return "Sorry no one is fertile"
    }
}

    /*   let ratioOfSuccess = Math.floor(Math.random() * 100) + 1 > 50 ? true : false; */
      let arrayOfMales = results.filter((f:any) => f.sex =='Male' && f.fertile === true  )
      let arrayOfFemales = results.filter((f:any) => f.sex =='Female' && f.fertile === true  )
      const randomIndexOfMale = arrayOfMales.length * Math.floor(Math.random() )
      const randomIndexOfFemale = arrayOfFemales.length * Math.floor(Math.random() )

const toggle = (e:any) =>{
    e.preventDefault();
setClicked(!clicked);
}
useEffect(() => {
    
  }, [update]);
 const renderTable = () => {
        return flock.flock.map((sheep:any) => {
            return (
                <tr key={sheep.index} >
                    <td className="capitalize">{sheep.name}</td>
                    <td className="capitalize">{sheep.sex}</td>
                    
                </tr>
            )
        })
    } 
   
    const renderPostBranded = () => {
        return results.map((sheep:any)=> {
          let background;
          if(sheep.branded){
              background="greenbackground"
          }else{
              background="regular"
          }
            return (
                <tr key={sheep.index} className={background}>
                    <td className="capitalize">{sheep.name}</td>
                    <td className="capitalize">{sheep.sex}</td>
                   
                </tr>
            )
        })
    }
    
    let table;
if (update) {
  table = renderPostBranded();
} else {
  table = renderTable();
}
let boxForCouple;
if(clicked){
    boxForCouple = checkCouple();
}else{
    boxForCouple = <h1>Check for a match here</h1>;
}
    return (<div>    <Breed > <div className="toggle-container" ><h1>{boxForCouple} </h1><button onClick={toggle}>Check for a match!</button></div> </Breed>
     <Brand onClick={handleClick}>Brand at random</Brand>

        <Table>
            
            <thead>
                <tr>
                    <th> Name:</th>
                    <th>Sex:</th>
                    
                </tr>
            </thead>
            <tbody>   {table
                }</tbody>
        </Table></div>
    )
}
const Table = styled.table`
border-collapse:collapse;
width:70%;
.greenbackground{
    background-color:green;
}`

export default Field

const Brand = styled.button`
 width:120px;
    height:60px;
    margin-left:120px;
    margin-top: 20px;
    background-color: #144705;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5%;
    border: none;
`