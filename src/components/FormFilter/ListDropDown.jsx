export default function ListDropDown({arr=[], onClick}) {
    
    return <ul className="absolute left-0 top-[52px] w-[224px] h-[272px] p-[18px] shadow rounded-[14px] bg-white  z-10 overflow-hidden">
        {arr.map((el,idx)=><li key={idx} onClick={()=>onClick(el)} className="cursor-pointer">{el}</li>)}

    </ul>
}