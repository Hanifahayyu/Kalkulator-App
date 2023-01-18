import React, { Component } from 'react';
import { View, StatusBar, Text, TouchableOpacity} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hitung: 0,
     };
  }

  masukkanAngka = (value) => {
    if(this.state.hitung == 0)
    {
      this.setState({ hitung: value})
    }
    else{
      this.setState({hitung: this.state.hitung + '' + value});
    }
  }


  hitungHasil = () => {
    let hasil = eval(this.state.hitung);
    this.setState({hitung: hasil})
  }



  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#212121'}}>
        <StatusBar backgroundColor='black' barStyle='light-content'/>

        <View style={{flex: 0.5, justifyContent: 'center', marginHorizontal: 10 }}>
          <Text style={{color: '#FFFFFF', fontSize: 48, textAlign: 'right', color: '#26c6da'}}>{this.state.hitung}</Text>
        </View>

        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row' }}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', padding: 10, margin: 10 }}
              onPress={() => this.setState({hitung: 0})}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'right', color: '#26c6da'}}>clear</Text>
            </TouchableOpacity>
          </View>
          
          <View style={{flexDirection: 'row', marginVertikal: 10 }}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}
              onPress={() => this.masukkanAngka('(')}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#26c6da'}}>(</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}
              onPress={() => this.masukkanAngka(')')}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#26c6da' }}>)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}
              onPress={() => this.masukkanAngka('/')}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#26c6da'}}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}
              onPress={() => this.masukkanAngka('*')}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#26c6da'}}>X</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row',  marginVertikal: 10}}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}
              onPress={() => this.masukkanAngka(7)}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}
              onPress={() => this.masukkanAngka(8)}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}
              onPress={() => this.masukkanAngka(9)}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}
              onPress={() => this.masukkanAngka('+')}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#26c6da'}}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginVertikal: 20}}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}
              onPress={() => this.masukkanAngka(4)}
            >
             <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}
              onPress={() => this.masukkanAngka(5)}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}
              onPress={() => this.masukkanAngka(6)}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>6</Text>
            </TouchableOpacity>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}
              onPress={() => this.masukkanAngka('-')}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#26c6da'}}>-</Text>
            </View>
          </View>

          <View style={{flexDirection: 'row', marginVertikal: 20}}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}
              onPress={() => this.masukkanAngka(1)}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}
              onPress={() => this.masukkanAngka(2)}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}
              onPress={() => this.masukkanAngka(3)}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}
              onPress={() => this.hitungHasil()}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center', color: '#26c6da'}}>=</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginVertikal: 20}}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}
              onPress={() => this.masukkanAngka(0)}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}
              onPress={() => this.masukkanAngka('%')}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}
              onPress={() => this.masukkanAngka(',')}
            >
              <Text style={{color: '#FFFFFF', fontSize: 24, textAlign: 'center'}}>,</Text>
            </TouchableOpacity>
            
          </View>

          
        </View>
          
      </View>
    );
  }
}

export default App;
