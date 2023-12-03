
import {configurestore} from '@reduxjs/toolkit'
import react from 'react'
import reactDOM from 'react-dom/client'
import {provider} from 'react-redux'
import app from './app'
import userreducer from './userreducer'





const store = configurestore ({
    reducer: {
         user: userreducer 
    }
})

reactDOM.createRoot(document.getElementById('root')).render(
    <react.strictmode>
        <provider store={store}>
        <app />

        </provider>
    </react.strictmode>
)