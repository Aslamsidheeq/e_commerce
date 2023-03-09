const FormInput = ()=>{
    return(
        <div>
        <label>Display Name</label>
                <input
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName}/>
                    </div>
    )
}