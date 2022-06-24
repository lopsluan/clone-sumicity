import React from 'react'
import {View, Text} from 'react-native'

import {styles} from './styles'

import {Button} from '../Button'
import {CardNotificacao} from '../CardNotificacao'
import { NotificationHeader } from '../NotificationHeader'

export const ModalNotificacao = () => {
    const bodyNotificacao = "Caro cliente, detectamos uma anomalia na sua rede, nossa equipe está trabalhando para corrigir o mais breve possível, a previsão para reestanelecimento da conexão é de 10 horas e 27 minutos."
    return (
        <View style={styles.container}>
            <View>
                <NotificationHeader />
                <Text style={styles.title}>Central de notificações</Text>
                <CardNotificacao title='Comunicado de anormalidade na rede' body={bodyNotificacao} date='23/06/2022' />
            </View>
            <View style={styles.containerButtons}>
                <Button className='blue' handlePress={() => { }} text="OK, entendi" />
                <Button className='white' handlePress={() => { }} text="Ainda preciso de ajuda" />
            </View>
        </View>
    )
}
