import React from 'react'
import {connect} from 'react-redux';
import { setPassword } from '../../actions/userSetPassword/setPasswordAction.js';
class SetPassword extends React.Component{
    constructor(props){
        super(props);
        this.state={
            clientId:'',
            emailId:'',
            newPassword:'',
            confirmPassword:'',
            error:'',
            nullString:''
        };
        this.onClickSetPasswordButton=this.onClickSetPasswordButton.bind(this);
        this.updateClientId=this.updateClientId.bind(this);
        this.updateNewPassword=this.updateNewPassword.bind(this);
        this.updateConfirmPassword=this.updateConfirmPassword.bind(this);
        this.clearInputField=this.clearInputField.bind(this);
        this.validateEmail=this.validateEmail.bind(this);
        this.updateEmailId=this.updateEmailId.bind(this);
     }
    updateEmailId(e){
        let emailtext=e.target.value;
    }
    updateClientId(e){
        this.setState({clientId:e.target.value});
    }
    updateNewPassword(e){
        this.setState({newPassword:e.target.value});
    }
    updateConfirmPassword(e){
        this.setState({confirmPassword:e.target.value});
    }
    clearInputField(e){
        e.target.value=""
        // this.setState({newPassword:''});
        // this.setState({confirmPassword:''});
    }
    onClickSetPasswordButton(){
        if(this.state.clientId && this.state.emailId && this.state.newPassword && this.state.confirmPassword){
            if(this.state.newPassword == this.state.confirmPassword){
                // this.props.dispatch(setPassword(this.state.clientId,this.state.emailId,this.state.newPassword));
                // this.props.userDatabase.push({clientId:this.state.clientId,emailId:this.state.emailId,password:this.state.password});
                let d=this.props.userDatabase;
                let l=d.length;
                let c=this.state.clientId;
                let e=this.state.emailId;
                let p=this.state.newPassword;
                
                // const obj={clientId:c,emailId:e,password:p};
                // this.props.dispatch(setPassword(obj));
                var data=JSON.parse(d);
                data.push({
                    clientId:c,
                    emailId:e,
                    password:p
                });
                d=JSON.stringify(data);
                // d.push(obj);

                console.log("data stored");
                for(let i=0;i<d.length;i++){
                    console.log(d[i].clientId);
                }
                //it should go to the loogedin homepage
                this.props.history.push('/');
            }
            else{
                console.log(this.state.newPassword);
                console.log(this.state.confirmPassword);
                this.setState({error:"Password did not match! Please try again!"});
            }
        }
        else{
            alert("Input field is empty");
        }
        // return false;
    }
    validateEmail(e){
        let emailtext=e.target.value;
        if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailtext))
            {
                this.setState({emailId:emailtext});
                return true;
            }
        else{
            alert("You have entered an invalid email address!");
            return false;
            }

    }
    render(){
        return(
            <div style={{backgroundColor:"red",color:"white", border:"solid",width:"30%", textAlign:"center",borderBlock:"black",transform:"translateX(160%)",marginTop:"10%"}}>
                <form onSubmit={e=>e.preventDefault()}>   
                    <label style={{margin:"5%"}}>Client ID: </label>
                    <input style={{margin:"5%"}} type="text" name="clientid" placeholder="Enter Client ID" onChange={this.updateClientId}/><br/>
                    <label style={{margin:"5%"}}>Email Address:</label>
                    <input style={{margin:"5%"}} type="email" name="emailid" placeholder="Enter email" onChange={this.updateEmailId} onBlur={this.validateEmail} onFocus={this.clearInputField}/><br/>
                    <label style={{margin:"5%"}}>New Password:</label>
                    <input style={{margin:"5%"}} type="password" name="newpassword" onFocus={this.clearInputField} onChange={this.updateNewPassword} placeholder="Enter new password" id="newPassword"/><br/>
                    <label style={{margin:"5%"}}>Confirm Password:</label>
                    <input style={{margin:"5%"}} type="password" name="confirmpassword" onFocus={this.clearInputField} onChange={this.updateConfirmPassword} placeholder="Enter confirm password" id="confirmPassword" /><br/>
                    <input style={{margin:"5%"}} type="submit" name="submitbutton" value="Set Password" onClick={this.onClickSetPasswordButton}/>
                    <h1>{this.state.error}</h1>
                </form>
                {/* <div style={{backgroundColor:"red",color:"white", border:"solid",width:"30%", textAlign:"center",borderBlock:"black",transform:"translateX(160%)",marginTop:"10%"}}>
                Client ID: <input style={{ marginTop:"20%",marginBottom:"5%"}} type="text" onChange={this.updateClientId} /><br/>
                Email ID: <input style={{ marginTop:"5%",marginBottom:"5%"}} type="email" name="email" onChange={this.updateEmailId}/><br/>
                New Password: <input style={{ marginTop:"5%",marginBottom:"5%"}} type="password" onChange={this.updateNewPassword}/><br/>
                Confirm Password: <input style={{ marginTop:"5%",marginBottom:"5%"}} type="password" onChange={this.updateConfirmPassword}/><br/>

                <button style={{ backgroundColor:"red",color:"white",marginTop:"5%",marginBottom:"20%",paddingRight:"7%",paddingLeft:"7%"}} id="setPasswordButton" onClick={this.onClickSetPasswordButton}>Set Password</button>
        
                {/* <h1>Client ID: {this.state.clientId}</h1>
                <h1>Password: {this.state.password}</h1> */}
                {/* </div> */}
                
            </div>
        );
    }
}

const  mapStateToProps = (state) =>{
    return{
        userDatabase:state.setPasswordData
    };
  }
  
  export default connect(mapStateToProps)(SetPassword);