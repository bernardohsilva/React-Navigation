import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, ImageBackground, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';


import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



function TelaA({ navigation }) {
  return (
        <ImageBackground source={{ uri: 'https://assets.codepen.io/1468070/Roblox+Background.jpg' }} style={styles.background}>
    <View style={styles.container}>
        <Text style={styles.title}>ROBLOX</Text>
        <TouchableOpacity style={styles.button1} 
        onPress={() => navigation.navigate('Sing Up')}
        >
          <Text style={styles.buttonText1}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} 
        onPress={() => navigation.navigate('Log In')}
        >
          <Text style={styles.buttonText2}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Terms - Privacy?</Text>
    </View>
      </ImageBackground>

  );
}


function TelaB({ navigation }) {
  return (
   <ImageBackground source={{ uri: 'https://assets.codepen.io/1468070/Roblox+Background.jpg' }} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>ROBLOX</Text>
        <TextInput
          style={styles.input1}
          placeholder="Username/Email/Phone"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input2}
          placeholder="Password"
          onChangeText={(text) => setSenha(text)}
        />
        <TouchableOpacity style={styles.button1} 
        >
          <Text style={styles.buttonText1}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} 
        >
          <Text style={styles.buttonText2}>Log In With Another Device</Text>
        </TouchableOpacity>
          <TouchableOpacity  
        onPress={() => navigation.navigate('Forgot Password')}
        >
        <Text style={styles.forgotPasswordText2}>Forgot Passoword or Username?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}


function TelaC({ navigation }) {
  return (
    <ImageBackground source={{ uri: 'https://assets.codepen.io/1468070/Roblox+Background.jpg' }} style={styles.background}>
          <View style={styles.container2}>    
          <Text style={styles.title2}>ROBLOX</Text> 
          </View>
              <View>
    </View>
      <View style={styles.card}>
      <View style={styles.container3}>
        <Text style={styles.text2}>CADASTRE-SE E DIVIRTA-SE!</Text>
          <View style={styles.containertext}>
          <Text style={styles.text}>Data de nascimento</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Dia"
              onChangeText={(text) => setUsername(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Mês"
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Ano"
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={styles.containertext}>
          <Text style={styles.text}>Usuário</Text>
          </View>
          <TextInput
          style={styles.input3}
          placeholder="Não use seu nome real"
          onChangeText={(text) => setEmail(text)}
        />
          <View style={styles.containertext}>
          <Text style={styles.text}>Senha</Text>
          </View>
        <TextInput
          style={styles.input4}
          placeholder="Mínimo de 8 caracteres"
          onChangeText={(text) => setSenha(text)}
        />
          <View style={styles.containertext}>
          <Text style={styles.text}>Gênero (opcional)</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button3}>
              <Text style={styles.buttonText3}>
              <Icon name="female"  size={20} color="white" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3} >
              <Text style={styles.buttonText3}>
              <Icon name="male"  size={20} color="white" />
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.forgotPasswordText3}>Ao clicar em Cadastrar-se, você aceita os Termos de Uso 
          (incluindo a cláusula de arbitragem) e a Política de Privacidade.</Text>

          <TouchableOpacity style={styles.button4} >
            <Text style={styles.buttonText4}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}


function TelaD({ navigation }) {
  return (
    <View style={styles.containe2}>
      <View style={styles.titleContainer}>
        <Text style={styles.title3}>Esqueceu a senha
        </Text>
      </View>
      <Card style={styles.card2}>
        <View style={styles.imageContainer}>
          <Image source={('https://cdn-icons-png.flaticon.com/512/1483/1483769.png')} style={styles.image} />
        </View>
        <Text style={styles.textborder}>
          Se você não nos forneceu um endereço de e-mail real ao criar a sua conta, não poderemos lhe enviar um e-mail de recuperação.
        </Text>
        <Text style={styles.text3}>
          Insira seu e-mail para redefinir sua senha.
        </Text>
        <TextInput
          style={styles.input5}
          placeholder="E-mail"
        />
        <TouchableOpacity style={styles.button5}>
          <Text style={styles.buttonText5}>Enviar</Text>
        </TouchableOpacity>
        <Text style={styles.text3}>
          Usar número de telefone para redefinir a senha
        </Text>
      </Card>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Sing Up or Log In" component={TelaA} />
        <Stack.Screen name="Log In" component={TelaB} />
        <Stack.Screen name="Sing Up" component={TelaC} />
        <Stack.Screen name="Forgot Password" component={TelaD} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  button1: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 10,
    width: '80%'
  },
  buttonText1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
    margin: 10,
    width: '80%',
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  forgotPasswordText: {
    marginTop: 10,
    color: 'lightblue',
  },


  input1: {
    backgroundColor: 'transparent',
    padding: 10,
    margin: 10,
    width: '80%',
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'grey',
    color: 'grey'
  },
    input2: {
    backgroundColor: 'transparent',
    padding: 10,
    margin: 10,
    width: '80%',
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'grey',
    color: 'grey'
  },

  forgotPasswordText2: {
    marginTop: 10,
    color: 'white',
    fontSize: 10,
  },

  
    card: {
    flex: 1,
    backgroundColor: '#222427',
    borderRadius: 10,
    margin: 20,
    marginBottom: 100,
    marginTop: 100,
    padding: 20,
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
    containertext: {
    width: 230,
    alignItems: 'left',
  },
  title2: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 50,
    color: 'white',
  },
  text: {
    color: 'white',
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'column'
  },
    text2: {
    color: 'white',
    alignItems: 'Center',
    marginBottom: 30,
    flexDirection: 'column'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  input: {
    padding: 10,
    width: '30%',
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'lightgrey',
    color: 'lightgrey',
    backgroundColor:'black',
  },
  input3: {
    padding: 10,
    margin: 10,
    width: '105%',
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'lightgrey',
    color: 'lightgrey',
    backgroundColor:'black',
  },
    input4: {
    padding: 10,
    margin: 10,
    width: '105%',
    fontSize: 10,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: 'lightgrey',
    color: 'lightgrey',
    backgroundColor:'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 10,
  },
  button3: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'black',
    padding: 10,
    width: '70%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    justifyContent: 'center,'
  },


  forgotPasswordText3: {
    marginTop: 10,
    color: 'lightgrey',
    fontSize: 10,
  },
    button4: {
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    padding: 10,
    width: '55%',
    borderWidth: 1,
    borderColor: 'lightgrey',
    marginTop: 20,
  },
  buttonText4: {
    fontSize: 16,
    color: 'grey',
    fontWeight: 500,
  },



    containe2: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title3: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textborder: {
    margin: 24,
    fontSize: 9.5,
    borderWidth: 1,
    borderColor: 'orange',
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 50,
  },
  text3: {
    margin: 10,
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card2: {
    padding: 16,
    marginHorizontal: 16,
  },
  input5: {
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    color: '#ccc',
  },
  button5: {
    backgroundColor: 'transparent',
    padding: 5,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
  },
  buttonText5: {
    color: '#ccc',
    fontSize: 15,
  },
});
