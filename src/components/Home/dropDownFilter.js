import React from 'react';
import Select from 'react-select';


const customStyles = {
  singleValue: (provided) => ({
    ...provided,
    color: 'white', // Set the text color of the selected option to red
  }),
  control: (provided) => ({
    ...provided,
    minHeight: '50px', // Set the minimum height to 20px
    height: '50px', 
    borderColor:'grey', 
    fontSize: '25px',
    backgroundColor: 'transparent',
    borderRadius: '20px 20px 0px 00px',
    textAlign: 'center',
    color: 'white',
  }),
  menu: (provided) => ({
    ...provided,
    height: '10px',
    fontSize: '25px',
    textAlign: 'center',
    color: 'grey',
    // backgroundColor: 'white',
  }),
  option: (provided, state) => ({
    ...provided,
    color: 'black',
    backgroundColor: 'white',
  }),
};

function DropDownFilter ({options,onChange}){



    return(
        <Select
        className="basic-single"
        classNamePrefix="select"
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        isRtl={false}
        isSearchable={true}
        name="post"
        options={options}
        styles={customStyles}
        onChange={onChange}
        
      />
    )
}

export default DropDownFilter;