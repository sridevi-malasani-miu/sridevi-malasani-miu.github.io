import React, { useState } from 'react';

function App() {

    const [name, setName] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [skills, setSkills] = React.useState([]);
    const [country, setCountry] = React.useState('');
    const [randomOptions, setRandomOptions] = React.useState([]);

    const handleCheckboxChange = (event) => {
        setSkills((prevSelectedValues) => {
            if (event.target.checked)  // Add value to the array if checked
                return [...prevSelectedValues, event.target.value];
            else // Remove value from the array if unchecked
                return prevSelectedValues.filter(item => item !== event.target.value);
        });
    };
    const handleMultipleSelection = (event) => {
        setRandomOptions([...event.target.selectedOptions].map(option => option.value));
    };

    let formControls = [
        { labelName: 'Name', set: setName, value: name, isInput: true, type: 'text' },
        { labelName: 'Gender', set: setGender, value: gender, isInput: true, type: 'radio', options: ['male', 'female'] },
        { labelName: 'Skills', set: setSkills, value: skills, isInput: true, type: 'checkbox', options: ['java', 'javascript'], onchange: handleCheckboxChange },
        { labelName: 'Country', set: setCountry, value: country, isInput: false, options: ['United States', 'Canada'] },
        { labelName: 'Random Options', set: setRandomOptions, value: randomOptions, isInput: false, options: ['Option 1', 'Option 2'], mulitpleselection: true, onchange: handleMultipleSelection }
    ];

    const handleChange = e => {
        for (let eachControl of formControls) {
            if (e.target.name == eachControl.labelName)
                eachControl.set(e.target.value) // setName(e.target.value)
        }
    }

    const clickEvent = () => alert(name + " " + gender + ' ' + skills + " " + country + " " + randomOptions);


    return (
        <div className="App">
            {formControls.map((eachControl,idx) => {
                return (<><label>{eachControl.labelName} </label>
                    {(eachControl.isInput && eachControl.type == 'text') && <input key={`inputLabel-${idx}`} type={eachControl.type} name={eachControl.labelName} value={eachControl.value} onChange={handleChange} />}
                    {(eachControl.isInput && eachControl.type != 'text') && <>
                        {eachControl.options.map((option,idx) =>
                            <>
                                <input key={idx} type={eachControl.type} name={eachControl.labelName} value={option} onChange={eachControl.onchange ?? handleChange} />
                                <label  key={`checkLabel-${idx}`}>{option}</label>
                            </>
                        )}
                    </>}
                    {!eachControl.isInput && <select  key={`selectLabel-${idx}`} multiple={eachControl.mulitpleselection} name={eachControl.labelName} onChange={eachControl.onchange ?? handleChange} >
                        {eachControl.options.map((option,idx) => <option key={`random-${idx}`}>{option}</option>)}
                    </select>}
                    <br /><br /></>
                )
            })}
            <input type='submit' onClick={clickEvent} value='Submit' />
        </div>
    );
}

export default App;
