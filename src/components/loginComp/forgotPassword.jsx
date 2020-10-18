import React from 'react'
class ForgotPassword extends React.Component{
    constructor(props){
        super(props);
        this.state={
            emailId:'',
            clientId:''
        };
        this.onClickFindPasswordButton=this.onClickFindPasswordButton.bind(this);
        this.updateEmailId=this.updateEmailId.bind(this);
        this.updateClientId=this.updateClientId.bind(this);
        this.clearInputField=this.clearInputField.bind(this);
        this.validateEmail=this.validateEmail.bind(this);
     }
     
    updateEmailId(e){
        this.setState({emailId:e.target.value});
        
    }
    
     updateClientId(e){
        this.setState({clientId:e.target.value});
    }
    

    onClickFindPasswordButton(){
        if(this.state.emailId || this.state.clientId){
            //find the password in the db and mail the password to the email id
            console.log(this.state.clientId);
            console.log(this.state.emailId);
            if(this.state.emailId)
            alert(`Email sent to the email id: ${this.state.emailId}`);
            else
            alert(`Email sent to the email id associated with the client id: ${this.state.clientId}`);
            this.props.history.push('/');
        }
        else{
            alert("input field is empty");
            
        }
    }
    clearInputField(e){
        e.target.value="";
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
                <label style={{margin:"5%"}}>Email Address:</label>
                <input style={{margin:"5%"}} type="email" name="email" placeholder="Enter email" onChange={this.updateEmailId} onFocus={this.clearInputField} onBlur={this.validateEmail} /><br/>
                <p>OR</p><br/>
                <label style={{margin:"5%"}}>clientId:</label>
                <input style={{margin:"5%"}} type="text" name="clientid" placeholder="Enter Client Id" onChange={this.updateClientId} /><br/>
                <input style={{margin:"5%"}} type="submit" name="submit" value="Find Password" onClick={this.onClickFindPasswordButton}/><br/>
            </form>
                {/* <div style={{backgroundColor:"red",color:"white", border:"solid",width:"30%", textAlign:"center",borderBlock:"black",transform:"translateX(160%)",marginTop:"10%"}}>
                Client ID: <input style={{ marginTop:"20%",marginBottom:"5%"}} type="text" onChange={this.updateClientId} /><br/>
                <p>OR</p>
                Email ID: <input style={{ marginTop:"5%",marginBottom:"5%"}} type="password" onChange={this.updateEmailId}/><br/>
                <button style={{ backgroundColor:"red",color:"white",marginTop:"5%",marginBottom:"20%",paddingRight:"7%",paddingLeft:"7%"}} id="findPasswordButton" onClick={this.onClickFindPasswordButton}>Find Password</button> */}
                {/* </div> */}
                
            </div>
        );
    }
}

export default ForgotPassword;