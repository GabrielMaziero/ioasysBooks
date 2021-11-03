import styled from 'styled-components/native';

export const ModalFilterContainer = styled.Modal``;

export const ModalFilterContent = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalFilterView = styled.View`
  background-color: #ffffff;
  width: 90%;
  height: 60%;
  top: 10px;
  border-radius: 4px;
`;

export const ModalFilterCloseView = styled.View`
  align-items: flex-end;
  margin: 10px;
`;

export const ModalFilterClose = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const ModalFilterCloseImage = styled.Image``;
