import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default class HomeScreen extends React.Component {

    cardView=[];
    viewStyle = {backgroundColor: '#BC986A', alignItems: 'center', height: '100%', flex: 1, flexDirection: 'column'};
    title = ['SIP Calculator', 'Lumpsum Calculator', 'CAGR Calculator'];
    description = ['A Systematic Investment Plan (SIP) in which you can invest fixed amount at regular interval.', 'Lumpsum investment is depositing all money at starting and withdrawing after certain period of time with interest.', 'Compound annual growth rate (CAGR) is the rate of return required for an investment to grow from its initial to final amount'];
    screens = ['SipCalculator', 'LumpsumCalculator', 'CAGRCalculator'];
    textStyle = {padding: 10, fontWeight: 'bold', color: '#1B1B1B', fontSize: 16};
    subTextstyle = {paddingHorizontal: 10, paddingBottom: 10, color: '#1B1B1B', fontSize: 16};

    constructor(props) {
        super(props);
        this.addCardView();
    }

    addCardView = () => {
        for(let i=0; i<3;i ++) {
            this.cardView.push(
                <View key={i} style={{padding: 10, flexDirection: 'column', alignItems: 'center'}}>
                    {this.renderCardView(i)}
                </View>
            );
        }
    }

    renderCardView(index) {
        return (
            <View style={{width:'100%', backgroundColor: '#DAAD86', borderRadius: 10}}>
                <TouchableOpacity activeOpacity={0.4} onPress={() => this.props.navigation.navigate(this.screens[index])}>
                    <View>
                        <Text style={this.textStyle}>{this.title[index]}</Text>
                        <Text style={this.subTextstyle}>{this.description[index]}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
          <View style={this.viewStyle}>
          <Text style={{marginVertical: 50, alignItems: 'center', fontWeight: 'bold', fontSize: 20, color:'#1B1B1B'}}> Choose your option</Text> 
              <View style={this.cardViewStyle}>
                  {this.cardView}
              </View>
              </View>  
        );
    }

}