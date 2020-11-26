import React , {useState} from 'react'
import styled  from 'styled-components'
import { useForm } from "react-hook-form";
import Field from './Field'

type Sheep = {
    name: string;
    sex: string;
    branded: boolean;
    fertile: boolean;
  };
  
const Input = () => {
    const [flock, setFlock] =  useState<Sheep[]>([]);
 const makeSheepComplete = (name: string,sex:string) =>{
    return {name: name,sex:sex,branded: false, fertile: true}

 }


/*   const randomI = Math.floor(Math.random() * flock.length);
 */

 const onSubmit = (data: Sheep) => {

setFlock([...flock,makeSheepComplete(data.name,data.sex)])
 }
const { register,handleSubmit } = useForm<Sheep>();

    return (<div>
        <Container>
             <h1>Sheep Creator</h1>
             <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
      <label htmlFor="name">Name</label>        <input
            type="text"
            id="name"
            name="name"
            ref={register({required: true})}

        />
      </div>
      <div className="field">
      <label htmlFor="sex">Sex </label>
                            <select id="sex" name="sex"          ref={register({required: true})}
> 
      <option value="empty"></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>      
          
      
      </div>
      <button type="submit" className="orangeButton">Create!</button>

    </form>
        </Container><Field flock={flock}/></div>
    )
}

export default Input
const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
 background-color:#def2f9;
    color:#123f7b;
    font-weight:bold;
 h1{
     text-align:center;
 }
 label, input,select{
     text-align: left;
    height:2.5rem;
    margin: 10px auto;
    width: 250px;


 }

 .box {
     width:360px;
 
    }


.orangeButton{
    width:120px;
    margin-left:120px;
    margin-top: 20px;
    background-color: #f15a25;
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 5%;
    border: none;
}
`