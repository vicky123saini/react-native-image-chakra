import React, { Component } from 'react';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
        spin:'0deg',
        spinValue:new Animated.Value(0),
        imageHeight:300,
        imageWidth:300
    };
  }

  onStart = () => {
    this.setState({loading:true, spinValue:new Animated.Value(0)})
    var random = Math.floor((Math.random() * 10) + 1) * 8;
    //var random = 1;
    console.log("random", random)
    var spin = this.state.spinValue.interpolate({
      inputRange: [0, random],
      outputRange: ['0deg', '360deg']
    });
    this.setState({spin})
    //var random=8;
    this.state.spinValue.setValue(0);

     
    // Animated.timing(
    //   this.state.spinValue,
    //   {
    //       toValue: 1,
    //       duration: random,
    //       easing: Easing.linear, // Easing is an additional import from react-native
    //       useNativeDriver: true  // To make use of native driver for performance
    //   }
    // ).start();
    this.chakra=Animated.decay(this.state.spinValue, {
      useNativeDriver: true,
      velocity: 1,
    }).start(()=>{
      const num=JSON.stringify(this.state.spin);
      const deg=parseInt(num.replace(/[^0-9.]/g, ''));
      const mainDeg=deg%360;
      this.props.onSpinnCompleted(mainDeg)
      // console.log("this.state.spin",  mainDeg);
      // var reward=this.state.ChakraData.data.find(o=>mainDeg>=o.start && mainDeg<=o.end);
      // console.log("reward", reward);
      
      // this.setState(prevState=>({loading:true, selectedReward:reward, viewPopup:true, ChakraData:{...prevState.ChakraData, isSpinned:true}}));

     
       
      // this.setState(prevState=>({ChakraData:{...prevState.ChakraData, isSpinned:true}})); 
        
    })
    this.state.spinValue.addListener(value => {
        //const num=Number(this.state.spin.replace(/[^0-9.]/g, ''));
        
        
        //console.log("chakraPosition",this.state.chakraPosition)
        //console.log("value", value);
        //console.log("Animated.Value", Animated.ValueXY)
        // var spin = value.interpolate({
        //   inputRange: [0, 10000],
        //   outputRange: ['0deg', '360deg']
        // });
        // console.log("spin", spin);
      });
      
    }

  render() {
    return (
      <View style={{flex:1, alignItems:"center"}}>
    <View style={{flex:0,minHeight:this.state.imageHeight+70, width:this.state.imageWidth, position:"relative"}}>
        <Image style={{width:100, height:156, top:this.state.imageHeight-70, left:(this.state.imageWidth/2)-50}} resizeMode="stretch" source={this.props.data.centerImage}/>
        <Animated.Image
          //onLayout={(e)=> console.log("onLayout",e)}
          ref={view => this.setState({chakraPosition:view})}
            style={{transform: [{rotate: this.state.spin}], position:"absolute", width:this.state.imageWidth, height:this.state.imageHeight}}
            resizeMode="stretch"
            source={this.props.data.chakraImage} />
        <Image style={{width:50, height:50, position:"absolute", top:(this.state.imageWidth/2)-25, left:(this.state.imageWidth/2)-25}} resizeMode="stretch" source={this.props.data.fingerImage}/>
        
      
      
    </View>
    <View style={{flex:1, padding:20, justifyContent:"center", minHeight:100}}>
        <TouchableOpacity onPress={this.onStart}>
            <Text style={{paddingVertical:10, paddingHorizontal:20, backgroundColor:"#ccc", borderRadius:20, width:100, textAlign:"center"}}>Spin</Text>
        </TouchableOpacity>
      </View>
      
    </View>
    );
  }
}
