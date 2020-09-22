/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Grid,Paper, FormControl, FormLabel, RadioGroup ,FormControlLabel,Radio, Select, MenuItem,Checkbox,TextareaAutosize,Button} from '@material-ui/core';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import MuiPhoneNumber from 'material-ui-phone-number';
import './Form.css';


// 1) Default Values of Each Field 
const initialValues={
    id:0,
    fullname:"",
    email:"",
    mobile:"+91",
    options:"",
    city:"",
    gender:"male",
    dob:new Date(),
    isUser:true,
}



const form=props=>{
    // Using Hook To Create an array of values and defining a functions to update values
    const [values,setValues]=useState(initialValues);

    const handleInputChange=e=>{
        const {name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleNumberChange=e=>{
        const {name,value}={name:'mobile',value:document.getElementById('phoneNumber').value}
        document.getElementById('phoneNumber').style.background="none"
        setValues({
            ...values,
            [name]:value
        })
    }
    const phoneLengthChecker=()=>{
        console.log(document.getElementById('phoneNumber').value.length);
        if(document.getElementById('phoneNumber').value.length===15){
            window.location.reload();
        }else{
            document.getElementById('phoneNumber').style.background="rgba(243, 175, 175,0.3)"
        }
    }
    
    return(
        <Paper style={{margin:"80px",padding:"24px"}}>
            <ValidatorForm autoComplete="off" onSubmit={phoneLengthChecker}>
                <Grid container>
                    <Grid item xs={6}>
                        <TextValidator
                        variant="outlined"
                        label="Full Name"
                        value={values.fullname}
                        name="fullname"
                        onChange={handleInputChange}
                        style={{width:'80%' ,margin:'8px'}}
                        validators={['required']}
                        errorMessages={['Please provide your full name here']}
                        />
                        <TextValidator
                        variant="outlined"
                        label="E-Mail"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        style={{width:'80%' ,margin:'8px'}}
                        validators={['required','isEmail']}
                        errorMessages={['Please provide a valid E-mail']}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup 
                            row
                            name="gender"
                            value={values.gender}
                            onChange={handleInputChange}
                            >
                                <FormControlLabel value="male" control={<Radio/>} label="Male" />
                                <FormControlLabel value="female" control={<Radio/>} label="Female" />
                                <FormControlLabel value="other" control={<Radio/>} label="Other" />
                            </RadioGroup>
                            <br/>
                            <Select
                            variant="outlined"
                            name="options"
                            placeholder="Options"
                            value={values.options}
                            onChange={handleInputChange}
                            color="primary"
                            >   
                                
                                <MenuItem value="None">None</MenuItem>
                                <MenuItem value="Option 1">Option 1</MenuItem>
                                <MenuItem value="Option 2">Option 2</MenuItem>
                                <MenuItem value="Option 3">Option 3</MenuItem>
                                <MenuItem value="Option 4">Option 4</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        {/* <TextValidator
                            variant="outlined"
                            label="Mobile No."
                            name="mobile"
                            value={values.mobile}
                            placeholder="+91"
                            onChange={handleInputChange}
                            style={{width:'80%' ,margin:'8px'}}
                            validators={['required','isNumber']}
                            errorMessages={['Please provide a valid Number']}
                            
                            ></TextValidator> */}
                            <MuiPhoneNumber 
                                defaultCountry={'in'} 
                                id="phoneNumber" 
                                style={{marginLeft:'10px'}} 
                                onChange={handleNumberChange} 
                                value={values.mobile} 
                                name="mobile"
                                required={true}
                                maxLength={12}
                                minLength={12}
                                />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="isUser"
                                            color="primary"
                                            value={values.isUser}
                                            onChange={handleInputChange}
                                        />
                                    }
                                    label="Are You An Indian"
                                />
                            </FormControl>
                    </Grid>
                    <Grid container style={{justifyContent:"space-around",margin:"10px"}}>
                        <TextareaAutosize 
                        color="primary" 
                        variant="outlined" 
                        cols={190} 
                        rows={15} 
                        placeholder="Your Message"
                        style={{border:"1px solid #D0D0D0",borderRadius:"0.5rem",resize:"none"}}/>
                    </Grid>
                   
                    <Grid item xs={3}>
                    <br/>
                    <br/>
                    <Button variant="contained" size="large" color="primary" type="submit" onSubmit={phoneLengthChecker}>
                        Submit
                    </Button>
                    </Grid>
                </Grid>
            </ValidatorForm>
        </Paper>
    )
}

export default form;