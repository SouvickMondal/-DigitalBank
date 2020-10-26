import React from 'react';
import {Slider} from '@material-ui/core';
import {connect} from 'react-redux';
import {setBudget} from '../../actions/cars/filters';

class DealsFilters extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            value: [50,100]
          
          }
        }

        updateBudgetChange(e,data){
          this.setState({value:data});
          console.log(`data[0] val:${data[0]}`);
          console.log(`data[1] val:${data[1]}`);
          if(data[0]<=20){
            console.log(`min price: ${(data[0]/2)*100000}`)
            this.props.dispatch(setBudget((data[0]/2)*100000,data[1]*200000));
          }
          else if(data[0]>20 && data[0]<=60){
            let y=10;
            let x=data[0];
            let inc=(x-20)/5;
            inc=inc*5;
            inc=inc+y;
            console.log(`min price:${inc*100000}`);
            this.props.dispatch(setBudget(inc*100000,data[1]*200000));
          }
          else if(data[0]>60 && data[0]<=80){
            let x=data[0];  
            let y=50;
            let inc=(x-60)/4;
            inc = inc*10;
            inc = inc+y;
            this.props.dispatch(setBudget(inc*100000,data[1]*200000));
            console.log(`min price:${inc*100000}`);
          }
          else if(data[0]>80 && data[0]<=100){
            let x=data[0];
            x = x-80;
            this.props.dispatch(setBudget(x*10000000,data[1]*200000));
            console.log(`min price:${x*10000000}`);
          }
          // this.props.dispatch(setBudget(data[0]*10000,data[1]*10000));//change 
        }
      
        render() {
          const marks = [
            {
              value: 0,
              label: '0L',
            },
            {
              value: 20,
              label: '10L',
            },
            {
              value: 60,
              label: '50L',
            },
            {
              value: 80,
              label: '1Cr',
            },
            {
              value: 100,
              label: '20Cr',
            }
          ];
      
          return (
            <div style={{width:200, margin:30}}>
            Select Budget:
            <Slider
              value={this.state.value}
              onChange={(e,data)=>this.updateBudgetChange(e,data)}
              marks={marks}
              min={0}
              scale={(x) =>{
                if(x%2==0 && x<=20){
                  return x/2;
                }
                else if(x>20 && x%5==0 && x<=60){
                  let y=10;
                  let inc=(x-20)/5;
                  inc=inc*5;
                  return y+inc;
                }
                else if(x>60 && x%4==0 && x<=80){
                  let y=50;
                  let inc=(x-60)/4;
                  inc = inc*10;
                  return inc+y;
                }
                else if(x>80 && x<=100){
                  return x-80;
                }
                
              }
              }//change
              valueLabelDisplay="auto"
             />

            </div>
          )
        }
      }

const  mapStateToProps = (state) =>{
  return{
    filters:state.filters
  };
}

export default connect(mapStateToProps)(DealsFilters);