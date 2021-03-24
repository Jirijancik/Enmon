import React, { useState } from 'react';
import { mainContentStore } from '../../store/mainContentStore';
import { Table } from '../../components/Table/Table';
import { MainLayout, useSignInStore } from '../../layouts/mainLayout/MainLayout';
import { StyledButton } from '../../components/StyledButton/StyledButton';
import { StyledContentWrapper } from './components/StyledContentWrapper';
import { ErrorPage } from '../ErrorPage';



export const MainContentPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pressedSearchOnce, setPressedSearchOnce] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const email = useSignInStore(state => state.email);

  const { getState } = mainContentStore;
  const metersRecords = getState().metersRecords;

  const ButtonText = pressedSearchOnce ? "Refresh" : "Show some interesting data";

  const handleOnClick = async () => {
    try {
      setLoginError(false);
      setIsLoading(true);
      const result = await getState().fetchMetersRecords();
      console.log(result)

      // For smulation purposes
      await new Promise(resolve => setTimeout(resolve, 2500));
    } catch {
      setLoginError(true);
    } finally {
      setIsLoading(false);
      setPressedSearchOnce(true);
    }
  }

  return (
    <MainLayout>
      <StyledContentWrapper>
        <h1>Hi: {email} </h1>
        <StyledButton 
          isDisabled={isLoading}  
          onClick={handleOnClick}
        >
          {ButtonText}
        </StyledButton>
        {
          (isLoading)
          ? <h1>...Loading</h1>
          : <>{ pressedSearchOnce && !loginError && <Table data={metersRecords} /> }</>
        }
        {(loginError && !isLoading) && <ErrorPage/>}
      </StyledContentWrapper>
    </MainLayout>
  );
};

MainContentPage.displayName = 'MainContentPage';
