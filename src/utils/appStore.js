import { configureStore } from '@reduxjs/toolkit'
import userReduser from './userSlice'
import moviesReduser from './movieSlice'
import GptReduser from "./gptSlice"
import ConfigReduser from './configerSlice'

const appStore = configureStore(
    {
        reducer: {
            user: userReduser,
            movie: moviesReduser,
            gpt: GptReduser,
            config: ConfigReduser
        }
    }
)

export default appStore