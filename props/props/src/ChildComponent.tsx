
interface Props  {
    name : string;
    age : number;
    place : string;
    children : React.ReactNode;

}

export const ChildComponent = ({name,age,place,children}:Props) =>{
  return <div>
            <p>
                name is {name} <br />
                age is {age} <br />
                place is {place} <br />
                children is {children} <br />
                {name}'s place is {place}
            </p>

            <button onClick={(e)=>{
                console.log("btn 2 is clicked",e);
            }}>button 2</button>
         </div>
    
}