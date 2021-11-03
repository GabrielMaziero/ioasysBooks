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
  showModal: boolean;
}

const ModalFilter: React.FC<props> = ({showModal}) => {
  return (
    <ModalFilterContainer visible={showModal} transparent>
      <ModalFilterContent>
        <ModalFilterView>
          <ModalFilterCloseView>
            <ModalFilterClose>
              <ModalFilterCloseImage source={close} />
            </ModalFilterClose>
          </ModalFilterCloseView>
        </ModalFilterView>
      </ModalFilterContent>
    </ModalFilterContainer>
  );
};
export default ModalFilter;
