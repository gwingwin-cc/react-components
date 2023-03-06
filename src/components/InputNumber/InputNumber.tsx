import React, { useEffect, useState } from "react"
import { InputNumberPropTypes } from "./InputNumberPropTypes"
import "./InputNumber.css"

const InputNumber: React.FC<InputNumberPropTypes> = (props) => {
	const [isFocus, setFocus] = useState(false)
    const [focusNumberInput, setFocusNumberInput] = useState(false)
    const [currentVal, setCurrentVal] = useState(props.inputValue ?? 0);
    const [showVal, setShowVal] = useState('0');

    useEffect(() => {
        let f = parseFloat(currentVal.toString())
        if (isNaN(f)) {
            f = 0;
        }
        setShowVal(f.toLocaleString('en'));
    }, [currentVal])

	return (
		<>
		<div  onMouseEnter={ () => {
					setFocus(true)
				}}>
  		<input 
				
				style={props.styles}
				type={'text'}
				className={` ${(isFocus ? 'd-none' : '')} ${props.className ?? ''}`}
				value={showVal}
			/>
		</div>
              
           

                <input className={`${isFocus ? '' :'d-none'} ${props.className ?? ''}`} type={'number'}
						style={props.styles}
                       onMouseLeave={() => {
                           if(!focusNumberInput){
                               setFocus(false)
                               setFocusNumberInput(false)
                           }
                       }}
                       defaultValue={props.inputValue}
                       onBlur={() => {
                           setFocus(false)
                           setFocusNumberInput(false)
                       }}
                       onFocus={ () => {
                           setFocusNumberInput(true)
                       }}
                       onChange={(e) => {
                           let f = parseFloat(e.target.value)
                           if (isNaN(f)) {
                               f = 0;
                           }
                           setCurrentVal(f)
						   if(props.onChange != null)
                           	props.onChange(e);
                       }}/>

</>
	)
}

export default InputNumber
