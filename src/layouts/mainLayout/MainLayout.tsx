import React, { useState } from 'react';
import create from 'zustand'
import { StyledButton } from '../../components/StyledButton/StyledButton';
import { authStore } from '../../store/authStore';
import { StyledLoginWrapper } from './components/StyledLoginWrapper';
import { StyledMainWrapper } from "./components/StyledMainWrapper";


type AppState = {
  email: string,
  password: string,
  isLoading: boolean,
  setIsLoading: (isLoading: boolean) => void
}
  
export const useSignInStore = create<AppState>((set) => ({
  email: "homework@enmon.tech",
  password: "VerySecretPassword",
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set((state) => ({
    ...state,
    isLoading
  }))
}))
  
export const MainLayout: React.FC = ({children}) => {
    const [loginError, setLoginError] = useState(false);

    const email = useSignInStore(state => state.email);
    const password = useSignInStore(state => state.password);
    const isLoading = useSignInStore(state => state.isLoading);
    const setIsLoading = useSignInStore(state => state.setIsLoading);

    const { getState } = authStore;
    const isAuthenticated = !!getState().authorization;
  
    const handleOnClick = async () => {
      try {
        setLoginError(false);
        setIsLoading(true);

        await getState().loginUser(email as string, password as string);
        // For smulation purposes
        await new Promise(resolve => setTimeout(resolve, 3500));
      } catch {
        setLoginError(true);
      } finally {
        setIsLoading(false);
      }
    }

  return (
    <StyledMainWrapper>
    {
      isAuthenticated 
      ? <>
          {children}
        </>
      : (
        <StyledLoginWrapper>
          <StyledButton 
            isDisabled={isLoading} 
            onClick={handleOnClick}
          >
            LOGIN
          </StyledButton>
          {isLoading && <h1>...VERIFYING USER....</h1>}
          {loginError && <h2 style={{color: "#ff69b4"}}> There was a porblem with user credentials, try again please</h2>}
        </StyledLoginWrapper>
      )
    }
    </StyledMainWrapper>
  );
}
