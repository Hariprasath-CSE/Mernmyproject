const StudentCard =(props)=>{
    console.log(props)
return(
    <div className="shadow-lg p-4 rounded-md">
        FirstName:{props.fn}<br></br>
        LastName:{props.ln}<br></br>
        FullName:{props.fn} {props.ln} <br></br>
        Age:{props.age}
        </div>
)
}
export default StudentCard;
