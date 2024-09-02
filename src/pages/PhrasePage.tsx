import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { generateMnemonic } from 'bip39';
import { Buffer } from 'buffer';
import toast from 'react-hot-toast';
import { savePrivateKey } from '../store/storage';
import { useAppSelector } from '../store/store';

(window as any).Buffer = Buffer;


const PhrasePage:React.FC = () => {
    const [Phrase] = useState(generateMnemonic().split(' '));
    const [isCopied, setIsCopied] = useState(false)

    const navigate = useNavigate();
    const {passcode} = useAppSelector(state => state.AuthSlice)

  

const onSubmitHandler = ()=>{
    savePrivateKey(Phrase.join(' '),passcode)
        navigate('/')
    }

    const copyHandler = ()=>{
        navigator.clipboard.writeText(Phrase.join(' ')).then(() => {
            setIsCopied(true)
            toast('Text copied to clipboard',
                {
                  icon: '📋',
                  style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                  },
                }
              );
          }).catch(err => {
            console.error('Failed to copy text: ', err);
          });
        
    }
  return (
    <div className='w-full h-full flex flex-col items-center justify-center p-3 gap-3'>
        <p className='text-2xl font-semibold'>Recovery Phrase</p>
        <p className='text-center text-gray-400'>Save these words in a safe place. And never share with anyone.</p>
        <div onClick={copyHandler} className='w-full bg-gray-800 border border-gray-700 rounded-md'>
        <div  className=' w-full grid grid-flow-row grid-cols-2 items-center justify-center gap-2 p-3'>
            {
                Phrase.map((phrase,index)=>{
                    return <div key={index} className='text-gray-500  flex'><p className='w-6 text-sm'>{index + 1}.</p>  {' '} <span className='text-gray-300 font-semibold'>{phrase}</span> </div>
                })
            }
        </div>
        <div className={`w-11/12 border-t mx-auto text-center p-2 text-sm border-gray-700 ${isCopied ? 'text-green-300':'text-gray-500'} `}>{isCopied ? 'Copied':'Click anywhere on this card to copy'}</div>
        </div>
        <button onClick={onSubmitHandler} className='w-full p-3 rounded-md bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all'>Next</button>
    </div>
  )
}

export default PhrasePage