import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #202024;
`;

export const Section = styled.View`
  margin: 24px 0 0 0;
  padding: 20px 20px 16px 20px;
  background-color: #29292E;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.08);
  elevation: 2;
`;

export const Label = styled.Text`
  color: #C4C4CC;
  font-size: 16px;
  font-family: 'Roboto_700Bold';
  margin-top: 8px;
  margin-bottom: 2px;
`;

export const Value = styled.Text`
  color: #00B37E;
  font-size: 16px;
  font-family: 'Roboto_400Regular';
`;

export const Item = styled.Text`
  color: #C4C4CC;
  font-size: 15px;
  font-family: 'Roboto_400Regular';
  margin-left: 12px;
  margin-bottom: 2px;
`;
