import create from 'zustand/vanilla'
import { authService, IToken } from '../services/authService'

type AuthState = {
    error: string,
    authorization: IToken["accessToken"],
    loginUser: (email: string, password: string) => void
}

export const authStore = create<AuthState>((set) => ({   
    error: "error",
    authorization: "",
    loginUser: async (email: string, password: string) => {
        const response = await authService.getAccessToken(email, password)
        set({ authorization: await response.accessToken })
    }
}))