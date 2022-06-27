import React, {useState} from "react";

function Input({addPost}) {
    const [Input, setInput] = useState('');

    function onChange(event){
        setInput(event.target.value);
        // console.log(event.target.value)
    };

    function onKeyDown(event) {
        const title = event.target.value;

        if (event.key === 'Enter' && title) {
            addPost(title);
            setInput('');
        } 
    };


    return(
        <div className='Input'>
            <div className="Input__header">Create Post</div>
            <textarea
            className='Input__field' 
            type='text'
            value={Input}
            onChange = {onChange}
            onKeyDown = {onKeyDown}
            />
        </div>
    )
    
}

export default Input;                
            

