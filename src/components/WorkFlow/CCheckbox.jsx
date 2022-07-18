export default function CCheckBox({ title, onChange }) {
    
    return(
        <>
            <div>
                <span>{title}</span>
                <input type="checkbox" onChange={onChange}/>
            </div>
        </>
    )
}