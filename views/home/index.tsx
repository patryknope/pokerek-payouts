import React, { useState } from 'react';
import { Text, View, TextInput, Button, ScrollView } from 'react-native';
import { calculatePayouts, parsePlayerMoneyIntoNumber } from '../../utils/calculations';
import { styles } from './styles'

type Player = {
    name: string
    moneyLeft: string
}

const Home: React.FC = () => {
    const [showResults, setShowResults] = useState(false)
    const [players, setPlayers] = useState<Player[]>([{ name: '', moneyLeft: '0'}])
    const [buyInPrice, setBuyInPrice] = useState('0')
    const [results, setResults] = useState<string[]>([])

    const handleAddPlayer = () => {
        setPlayers([...players, { name: '', moneyLeft: '0'}])
    }

    const handleEditPlayerName = (playerIndex: number, name: string) => {
        const newPlayers = [...players]
        newPlayers[playerIndex].name = name
        setPlayers(newPlayers) 
    }

    const handleEditPlayerMoney = (playerIndex: number, money: string) => {
        console.log(money)
        const newPlayers = [...players]
        newPlayers[playerIndex].moneyLeft = money
        setPlayers(newPlayers) 
    }

    return (<View style={styles.scrollView}>
        <Text style={styles.title}>Enter buy-in price per person:</Text>

        <TextInput style={styles.input} keyboardType='numeric' value={String(buyInPrice)} onChangeText={(e) => setBuyInPrice(e)} />

        <Text style={styles.title}>Enter name and the money they finished with:</Text>
        {players.map((player, index) => {
            return <>
                <Text style={styles.playerName}>Player {index + 1}</Text>
                <View style={styles.inputContainer}>
                    
                    <View style={styles.playerContainer}> 
                        <Text style={styles.fieldContainer}>Player name:</Text>
                        <TextInput style={styles.input} value={player.name} onChangeText={(e) => handleEditPlayerName(index, e)} />
                    </View>
                    <View style={styles.playerContainer}>
                        <Text style={styles.fieldContainer}>Money left:</Text>
                        <TextInput style={styles.input} keyboardType='numeric' value={String(player.moneyLeft)} onChangeText={(e) => handleEditPlayerMoney(index, e)} />
                    </View>
                </View>
            </>
        })}
        <View style={styles.button}>
            <Button
                onPress={() => handleAddPlayer()}
                title="Add player"
                color="#1e86ad"
                accessibilityLabel="Add a player"
            />
        </View>
        <View style={styles.button}>
            <Button
                onPress={() => {
                    setResults(calculatePayouts(parsePlayerMoneyIntoNumber(players), parseFloat(buyInPrice)))
                    setShowResults(true)
                }}
                title="Calculate earnings"
                color="#26a14d"
                accessibilityLabel="Calculate earnings"
            />
        </View>
        <View style={styles.button}>
            <Button
                onPress={() => setPlayers([{ name: '', moneyLeft: '0'}])}
                title="Reset"
                color="#971512"
                accessibilityLabel="Reset players"
            />
        </View>
        {showResults && <View style={styles.result} >
            {results.map((result) => <Text>{result}</Text>)}
        </View>}
    </View>)
}


export default Home