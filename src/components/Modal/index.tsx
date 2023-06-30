import React from "react";
import { BgModal, ButtonStyle, ContainerModal, ModalClose, ModalDescription, ModalTitle, ModalVideo } from "./styles";
import { DividerBar } from "../DividerBar";
import { IoMdClose } from 'react-icons/io';


interface ModalProps {
  isOpen: boolean;
  card: {
    id: number;
    name: string;
    url: string;
  };
  setOpenModal: () => void;
}

export const Modal = ({ isOpen, card, setOpenModal }: ModalProps) => {
  if (isOpen) {
    return (
      <BgModal>
        <ContainerModal>
          <ModalTitle><p><span>Webnar: </span>{card.name}</p> <ModalClose onClick={setOpenModal}><IoMdClose/></ModalClose></ModalTitle>
          <ModalVideo>
          <iframe src={card.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </ModalVideo>

          <ModalDescription>
            <h3>Descrição</h3>
            <DividerBar />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              sequi eos repellendus, iure quia magni optio repudiandae fugiat
              debitis qui quidem odit non! Praesentium dolores impedit quidem
              repellat adipisci ad!
            </p>
            
            <div>
                <h3>Downloads</h3>
                <DividerBar />
                <ButtonStyle background="#a3e7d6" color="#367767">Spredsheet.xls</ButtonStyle>
                <ButtonStyle background="#78d6f5" color="#187797"> Document.doc</ButtonStyle>
                <ButtonStyle background="#fff2a6" color="#ac9b3b">Presentation.ppt</ButtonStyle>
            </div>
            </ModalDescription>
         
        </ContainerModal>
        
      </BgModal>
    );
  }
};
