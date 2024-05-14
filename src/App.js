import { useRef, useState } from "react"
import './App.css'
export default function App() {
    const [eded1, setEded1] = useState('')
    const [eded2, setEded2] = useState('')
    const [command, setCommand] = useState('')
    const [command2, setCommand2] = useState('')
    if (eded2.length !== 0) {
        if (command === '*') {
            let a = Number(eded1) * Number(eded2)
            setEded1(a)
        } else if (command === '+') {
            let a = Number(eded1) + Number(eded2)
            setEded1(a)
        } else if (command === '-') {
            let a = Number(eded1) - Number(eded2)
            setEded1(a)
        } else if (command === ':') {
            let a = Number(eded1) / Number(eded2)
            setEded1(a)
        }
        setEded2('')
        setCommand(command2)
        setCommand2('')
    }
    const inpt = useRef('')
    const value = (e) => {
        const deyer = e.target.innerText
        if (inpt.current.value !== '0') {
            inpt.current.value = inpt.current.value + deyer
        } else {
            inpt.current.value = deyer
        }
    }
    const a = false
    const operation = (e) => {
        const operant = e.target.innerText
        if (operant == "AC") {
            setEded1('')
            inpt.current.value = ''
        } else if (e.target.id == "delete") {
            if (inpt.current.value === 'Infinity') {
                inpt.current.value = ''
            } else {
                inpt.current.value = inpt.current.value.slice(0, -1)
                if (inpt.current.value == '-') {
                    inpt.current.value = 0
                }
            }

        } else if (e.target.id == 'positive') {
            if (inpt.current.value !== '') {
                if (!inpt.current.value.startsWith('-')) {
                    inpt.current.value = '-' + inpt.current.value
                } else {
                    inpt.current.value = inpt.current.value.slice(1)
                }
            }
        } else if (operant === 'X') {
            if (eded1.length === 0) {
                setEded1(inpt.current.value)
                inpt.current.value = ''
                setCommand('*')
            } else {
                setEded2(inpt.current.value)
                inpt.current.value = ''
                setCommand2('*')
            }
        } else if (operant === '+') {
            if (eded1.length === 0) {
                setEded1(inpt.current.value)
                inpt.current.value = ''
                setCommand('+')
            } else {
                setEded2(inpt.current.value)
                inpt.current.value = ''
                setCommand2('+')
            }
        } else if (e.target.id === 'minus') {
            if (eded1.length === 0) {
                setEded1(inpt.current.value)
                inpt.current.value = ''
                setCommand('-')
            } else {
                setEded2(inpt.current.value)
                inpt.current.value = ''
                setCommand2('-')
            }
        } else if (e.target.id === 'dvide') {
            if (eded1.length === 0) {
                setEded1(inpt.current.value)
                inpt.current.value = ''
                setCommand(':')
            } else {
                setEded2(inpt.current.value)
                inpt.current.value = ''
                setCommand2(':')
            }
        } else if (operant === '=') {
            console.log(eded1,eded2,command,command2)
            if (command2.length === 0) {
                let a;
                if (command === '*') {
                    a = Number(eded1) * Number(inpt.current.value)
                } else if (command === '+') {
                    a = Number(eded1) + Number(inpt.current.value)
                } else if (command === ':') {
                    a = Number(eded1) / Number(inpt.current.value)
                } else if (command === '-') {
                    a = Number(eded1) - Number(inpt.current.value)
                }
                setEded1(a)
                inpt.current.value = a
                setCommand('')
                setCommand2('')
            } else {
                inpt.current.value = eded1
            }
        } else if (operant === ',') {
            if (!inpt.current.value.includes('.')) {
                if (inpt.current.value.length == 0) {
                    inpt.current.value = inpt.current.value + '0.'
                } else {
                    inpt.current.value = inpt.current.value + '.'
                }

            }
        }
    }
    return (
        <>
            <div className="mainDiv">
                <input placeholder="0" ref={inpt} type="text"></input>
                <div className="container">
                    <button className="white" onClick={operation}>AC</button>
                    <button className="white" onClick={operation} id="delete">&#8592;</button>
                    <button className="white" onClick={operation} id='positive'>&#8723;</button>
                    <button className="orange" onClick={operation}>X</button>
                    <button className="black" onClick={value}>7</button>
                    <button className="black" onClick={value}>8</button>
                    <button className="black" onClick={value}>9</button>
                    <button className="orange" onClick={operation} id='dvide'>&#8758;</button>
                    <button className="black" onClick={value}>4</button>
                    <button className="black" onClick={value}>5</button>
                    <button className="black" onClick={value}>6</button>
                    <button className="orange" onClick={operation}>+</button>
                    <button className="black" onClick={value}>1</button>
                    <button className="black" onClick={value}>2</button>
                    <button className="black" onClick={value}>3</button>
                    <button className="orange" onClick={operation} id="minus">&#8722;</button>
                    <button className="black zero" onClick={value} >0</button>
                    <button className="black" onClick={operation}>,</button>
                    <button className="orange" onClick={operation}>=</button>
                </div>
            </div>
        </>
    )
}