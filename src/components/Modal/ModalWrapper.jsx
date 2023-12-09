export default function ModalWrapper({children}) {
    return <div className="absolute top-0 left-0 w-full h-full bg-slate-600">
        {children}
    </div>
}