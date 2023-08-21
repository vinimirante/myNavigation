import React from 'react';

import {View, Text} from 'react-native';

export default function Contacts ({navigation}){
    return(
        <View style ={{marginTop:60}}>
            <View>
                <Text>
                    Nome: Joao Silva
                </Text>
                <Text>
                    Telefone: (98) 91234-5678
                </Text>
                <Text
                    onPress={()=>navigation.navigate('Information',
                    {
                     nome: "João Silva",
                     telefone: "(98) 91234-5678",
                     endereco:"Rua um",
                     numero: "10",
                     profissao:"Carpinteiro",
                     email:"joao@gmail.com"
                    })}
                >
                    Information ...
                </Text>
            </View>

            <View style ={{marginTop:60}}>
                <Text>
                    Nome: Maria Silva
                </Text>
                <Text>
                    Telefone: (98) 91234-1234
                </Text>
                <Text
                    onPress={()=>navigation.navigate('Information',
                    {
                     nome: "Maria Silva",
                     telefone: "(98) 91234-1234",
                     endereco:"Rua dois",
                     numero: "20",
                     profissao:"Professora",
                     email:"maria@gmail.com",
                    })}
                >
                    Information ...
                </Text>
            </View>
        </View>
    )
}