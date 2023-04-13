import { useEffect, useReducer, useRef, useState } from "react";
import axios from "axios";
import { Btn, Error, Flex, Box } from './style';
import { MdCopyAll,MdOutlineFormatQuote } from "react-icons/md";
import { TiSocialTwitter } from "react-icons/ti";
import { IoVolumeMedium } from "react-icons/io5";
import { TbCopyOff } from "react-icons/tb";

const initialState = {
    quotes: '',
    errors: '',
    loading: true
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'success':
            return {
                loading: false,
                errors: '',
                quotes: action.payload,
            }
        case 'failed':
            return {
                loading: false,
                errors: action.payload,
                quotes: '',
            }
        default:
            return state;
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    function getNewQuote() {
        axios.get('https://type.fit/api/quotes')
            .then((res) => {
                const random = Math.floor(Math.random() * res.data.length);
                dispatch({
                    type: 'success',
                    payload: res.data[random]
                })
            }
            ).catch((e) => {
                dispatch({
                    type: 'failed',
                    payload: e.message
                })
            })
    }
    useEffect(() => {
        getNewQuote();
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(state.quotes.text);
    };

    const handleSound = () => {
        const sound = new SpeechSynthesisUtterance(`${state.quotes.text}`);
        speechSynthesis.speak(sound);
    };

    return (

        <Box>
            <h3>quote for your day </h3>
            {state.loading ? "Loading ... " :
                <><p>{state.quotes.text}</p>
                    <em>{state.quotes.author}</em></>}
            <Error>{state.errors}</Error>
            <Flex>
                <Btn onClick={getNewQuote}><MdOutlineFormatQuote/></Btn>
                <Btn onClick={handleCopy}><MdCopyAll/></Btn>
                <a href={`https://twitter.com/intent/tweet?text=${state.quotes.text}`} target="_blank"><Btn><TiSocialTwitter/></Btn></a>
                <Btn onClick={handleSound}><IoVolumeMedium/></Btn>
            </Flex>
        </Box>

    );
}

