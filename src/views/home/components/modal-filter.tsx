import React from 'react';
import close from '../../../assets/images/Close.png';
import {
  ModalFilterClose,
  ModalFilterCloseImage,
  ModalFilterCloseView,
  ModalFilterContainer,
  ModalFilterContent,
  ModalFilterView,
} from './modal-filter.style';

interface props {
  showModal: () => void;
}

const ModalFilter: React.FC<props> = ({showModal}) => (
  <ModalFilterContainer visible={true} transparent>
    <ModalFilterContent>
      <ModalFilterView>
        <ModalFilterCloseView>
          <ModalFilterClose onPress={showModal}>
            <ModalFilterCloseImage source={close} />
          </ModalFilterClose>
        </ModalFilterCloseView>
      </ModalFilterView>
    </ModalFilterContent>
  </ModalFilterContainer>
);

export default ModalFilter;
