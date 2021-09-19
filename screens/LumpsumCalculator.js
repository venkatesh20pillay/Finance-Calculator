import * as React from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';
import { TextInput } from 'react-native';
import Slider from '@react-native-community/slider';


export default class LumpsumCalculator extends React.Component {

    textStyle = {fontWeight: 'bold', color: '#1B1B1B', marginLeft: 5, fontSize: 16};
    buttontTextStyle = {fontWeight: 'bold', color: '#1B1B1B', marginLeft: 5, fontSize: 16};
    cardStyle = {backgroundColor: '#DAAD86', borderRadius: 10, padding: 10, margin: 10};
    resultTextStyle = {fontWeight: 'bold', color: '#1B1B1B', marginLeft: 5, fontSize: 16, padding: 5};

    inputView = [];

    constructor(props) {
        super(props);
        this.state = {
            investment: 0,
            period: 1,
            interest: 0,
            showResult: false,
            finalAmount: 0,
            amountInvested: 0,
            profit: 0,
            amountInvestedText: "",
            finalAmountText: "",
            profitText: ""
        };
        this._addInputView();
    }

    _addInputView() {
        this.inputView.push(
            <View key={0} style={{marginBottom: 10}}>
                {this._renderInputView()}
            </View>
        );
        this.inputView.push(
            <View key={1}>
                {this._renderExpectedReturnInputView()}
                </View>
        );
    }

    render() {
        return(
            <View style={{paddingTop: 20, backgroundColor: '#BC986A', height: '100%'}}>
                <View style={this.cardStyle}>
                    {this.inputView}
                    {this._renderPeriodInputView()}
                </View>
                {this._renderCalculateButton()}
                {this._renderResult()}
            </View>
        )
    }

    calculate = () => {
        const error = this._checkError();
        if(!error) {
            const i = (this.state.interest/100);
            const n = (this.state.period);
            const principal = this.state.investment;
            const amount = Math.round(principal * Math.pow((i+1), n));
            const profit = amount - principal;
            var myObj = {
                style: "currency",
                currency: "INR"
            }

            const amountInvestedText = this._currency(principal);
            const finalAmountText = this._currency(amount);
            const profitText =  this._currency(profit);

            this.setState ({
                amountInvested: principal,
                finalAmount: amount,
                profit: profit,
                showResult: true,
                amountInvestedText: amountInvestedText,
                finalAmountText: finalAmountText,
                profitText: profitText
            })

        }
        else {
            this.setState({
                showResult: false
            })
        }
    }

    _currency(num) {
        let currency = num.toString();
        let temp = "";
        let count = 0;
        for(let i = currency.length - 1; i>=0 ; i--) {
            temp = currency[i] + temp;
            if(count==2 && count!=currency.length-1) {
                temp = ',' + temp;
            }
            else if (count >=2 && (count%2==0) && count!=currency.length-1) {
                temp = ',' + temp;
            }
            count++;
        }
        temp = '₹ ' + temp;
        return temp;
    }

    _notifyMessage(msg) {
        if(Platform.OS === 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT);
        }
    }

    _checkError = () => {
        if(this.state.investment <= 0) {
            this._notifyMessage('Please enter amount');
            return true;
        }
        else if(this.state.interest <= 0) {
            this._notifyMessage('Please enter return rate');
            return true;
        }
        return false;
    }

    _investmentValueCHanged = (num) => {
        let temp = 0;
        if(num != "") {
            temp = parseInt(num, 10);
        }
        this.setState ({
            investment: temp
        });
    }

    _returnValueChanged = (num) => {
        let temp = 0;
        if(num != "") {
            temp = parseInt(num, 10);
        }
        this.setState ({
            interest: temp
        });

    }

    _periodValueChanged = (num) => {
        this.setState ({
            period: num
        });
    }

    _renderInputView() {
        return (
            <View>
                <Text style={this.textStyle}>One Time Investment Amount</Text>
                <TextInput
                    style={{height: 40, marginLeft: 10}}
                    placeholder="Enter amount"
                    keyboardType='numeric'
                    onChangeText={text => this._investmentValueCHanged(text)}
                />
                </View>
        )
    }

    _renderExpectedReturnInputView() {
        return(
            <View>
                <Text style={this.textStyle}>Expected Return % (per year)</Text>
                <TextInput
                    style={{height: 40, marginLeft: 10}}
                    placeholder="Enter return rate"
                    keyboardType='numeric'
                    onChangeText={text => this._returnValueChanged(text)}
                />
            </View>
        )
    }

    _renderResult() {
        var myObj =  {style: "currency", currency: "INR"}
        
        if(this.state.showResult) {
            return(
                <View style={this.cardStyle}>
                    <Text style={this.resultTextStyle}>Final Amount - {this.state.finalAmountText}</Text>
                    <Text style={this.resultTextStyle}>Total Amount Invested - {this.state.amountInvestedText}</Text>
                    <Text style={this.resultTextStyle}>Profit - {this.state.profitText}</Text>
                </View>
            )
        }
    }

    _renderCalculateButton() {
        return(
            <TouchableOpacity activeOpacity={0.4}  onPress={this.calculate} style={{backgroundColor: "#FBEEC1", borderRadius: 10, padding: 10, margin: 10, alignItems: 'center'}}>
                <Text style={this.buttontTextStyle}>CALCULATE</Text>
            </TouchableOpacity>
        )
    }
s
    _renderPeriodInputView() {
        return(
            <View style={{paddingTop: 10}}>
                <Text style={{marginLeft: 5}, this.textStyle}>Investment Period In Year</Text>
                <Text style={{marginTop: 10, marginLeft: 10}}>{this.state.period}</Text>
                <Slider
                    step = {1}
                    value = {0}
                    minimumValue = {1}
                    maximumValue = {100}
                    minimumTrackTintColor = "#009688"
                    thumbTintColor = "#009688"
                    onValueChange = {(changedValue) => this._periodValueChanged(changedValue)}
                    style={{marginTop: 5}}
                    thumbTouchSize = {{width: 200, height: 200}}
                    trackStyle = {{height: 100}}
                />
            </View>
        )
    }

}