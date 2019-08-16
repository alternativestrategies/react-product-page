import React from 'react';
import Select from 'react-select';

const options = [
  { value: "All", label: "All" },
  { value: "tape", label: "Tape" },
  { value: "organization", label: "Organization" },
  { value: "highlighters", label: "Highlighters" }
];

const customStyles = {
  option: (provided) => ({
    ...provided,
    borderBottom: '2px solid white',
    fontFamily: 'sans-serif',
    background: 'white',
    '&:hover': {color: 'white', background: '#EB0054'}
  }),
  control: (provided) => ({
    ...provided,
    height: '2.4rem',
    minHeight: 'fit-content',
    fontFamily: 'sans-serif',
    fontSize: '15px',
    background: '#EB0054',
    color: 'white'
  })
};

const Menu = (props) => {
    return(
      <div className="flex-menu pt-4">
        <div>
        <label htmlFor="price">Price: High to Low</label>
           <span onClick={props.toggleCheck}>
            <input 
            type="checkbox"
            checked={props.checked}/>
            <span></span>
          </span>
        </div>
        <div>
        <label htmlFor="category">Category</label>
        </div>
        <div>
        <Select
        className="flex-menu-select"
        isSearchable={false}
        styles={customStyles}
        value={props.selectedOption.value}
        onChange={props.handleChange}
        options={options}
        theme={theme => ({
          ...theme,
          borderRadius: "5px",
          padding: '0px 20px',
          colors: {}
        })}/>
        </div>
      </div>
        
    );
}

export default Menu;