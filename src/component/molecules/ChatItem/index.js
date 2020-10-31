import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IsMe from './IsMe'
import Other from './Other'

const ChatItem = ({isMe, text, date, photo}) => {
    if(isMe) {
        return <IsMe text={text} date={date}/>
    }
    if(!isMe)
    {
        return <Other text={text} date={date} photo={photo}/>
    }
}

export default ChatItem

const styles = StyleSheet.create({})
