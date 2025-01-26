
import Carddd from "./Carddd";


function Foreground() {
  const data =[
    {
      desc: "Lorem Ipsum is simply dummy text of the printing and web development",
      filesize : "0.9 mb"
        
    },
  ];
  return(
    <>
  <div className="fixed w-full h-full z-[3] top-0 left-0 flex gap-5 flex-wrap p-5">
    <Carddd/>
    <Carddd/>
   
  </div>
  
</>
  
  );
}

export default Foreground;
