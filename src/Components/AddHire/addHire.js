import React, { Component } from 'react'
import './addHire.css'
import formField from '../formFields'
import validator from 'validator';
import plusSvg from './Images/plus.svg'

class AddHire extends Component {
    constructor(props){
        super(props);
        this.onChangeData = this.onChangeData.bind(this);
    }
    state = {activeForm : false, Designation: "", joinDateValid: "", reportToValid: "", salaryValid: "", personalEmail:"", disable: true}

    personalJson = ()=>{
        console.log("aa",this.props)
        return formField.map((item,key)=>{
            return(
                <div key={key}>
                    <div>{item.formTitle}</div>
                    <input type={item.type} onChange={this.onChangeData} name={item.formTitle}/>
                </div>
            )
        })
    }

    onChangeData(e){
        let self=this;
        console.log(e.target.name)
        console.log(e.target.value)
        if(e.target.name === 'Designation'){
            self.setState({Designation: e.target.value});
        } else if(e.target.name === 'Joining Date'){
            self.setState({joinDateValid:e.target.value })
        } else if(e.target.name === 'Reporting Manager'){
            self.setState({reportToValid:e.target.value })
        } else if(e.target.name === 'Annual Salary'){
            self.setState({salaryValid:e.target.value })
        } else if(e.target.name === 'Email'){
            self.setState({personalEmail:e.target.value })
        }
        

        if(this.state.personalEmail !== "" && this.state.Designation !== "" && this.state.joinDateValid !== "" && this.state.reportToValid !== "" && this.state.salaryValid !== ""){
            this.setState({disable: false})
        } else {
            this.setState({disable: true})
        }
    }

    submit(){
        console.log("submit",this.state,this.state.disable);
            // return(
            //     <div>
            //         <p>Email: {this.state.personalEmail}</p>
            //         <p>Designation: {this.state.Designation}</p>
            //         <p>Joining Date: {this.state.joinDateValid}</p>
            //         <p>Reporting Manager: {this.state.reportToValid}</p>
            //         <p>Annual Salary: {this.state.salaryValid}</p>
            //     </div>
            // )
    }

    render(){
        return(
                <React.Fragment>
                    <div className="boxContainer" onClick={()=>{this.setState({activeForm:true})}} >
                        <img className="imageWrapper" src= {plusSvg} />
                    </div>

                    <div className={`noHireContainer ${this.state.activeForm ? "" : 'activeForm'}`}>
                        <p className="noHireContent">No new Hires</p>
                    </div>
                    
                    <div className={`hireWrapper ${this.state.activeForm ? 'activeForm' : ""}`}>
                        <p className="onboardWrapper">Onborading Page</p>
                        <p className="titleWrapper">New Hire Form</p>
                        <form className="formWrapper">
                            {this.personalJson()}
                            <div className="buttonWrapper">
                                <button className="loginButton" disabled={this.state.disable} onClick={this.submit()}>Submit</button>
                            </div>
                        </form>
                    </div>

                    
                    {/* <div className={`noHireContainer ${this.state.activeForm ? "" : 'activeForm'}`}> */}
                    <div>
                        <p>Email: {this.state.personalEmail}</p>
                        <p>Designation: {this.state.Designation}</p>
                        <p>Joining Date: {this.state.joinDateValid}</p>
                        <p>Reporting Manager: {this.state.reportToValid}</p>
                        <p>Annual Salary: {this.state.salaryValid}</p>
                    </div>
                    {/* </div> */}
                </React.Fragment>
        )
    }
    
}

export default AddHire