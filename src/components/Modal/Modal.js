import React, { forwardRef, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { ModalSC, ModalCloseButton } from "./styled-components/ModalSC";
import { createPortal } from "react-dom";
import { colorStyles } from "../../constants/constants";
import returnValidColor from "../../helpers/returnValidColor";

const { DEFAULT } = colorStyles;

const ModalPortal = forwardRef(
  ({ children, element, show, handleCloseModal, bgColor, hideZIndex }, ref) => {
    return createPortal(
      <ModalSC
        ref={ref}
        show={show}
        tabIndex={1}
        bgColor={(returnValidColor(bgColor) && bgColor) || ""}
        hideZIndex={hideZIndex}
      >
        <div>{children}</div>
        <ModalCloseButton
          size="sm"
          type={DEFAULT}
          text="Close"
          handleClick={handleCloseModal}
        />
      </ModalSC>,
      element
    );
  }
);
ModalPortal.propTypes = {
  children: PropTypes.any,
  element: PropTypes.object,
  show: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  bgColor: PropTypes.string,
  hideZIndex: PropTypes.bool,
};

const Modal = ({ children, showModal, onCloseCallback, bgColor }) => {
  const [modal, setModal] = useState(null);
  const [showContent, setShowContent] = useState(false);
  const [hideZIndex, setHideZIndex] = useState(false);

  const modalRef = useRef();

  useEffect(() => {
    const modalElement = document.createElement("div");
    modalElement.classList.add("chat_modal");
    if (showModal) {
      document.body.appendChild(modalElement);
      setModal(modalElement);
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setShowContent(true);
        setHideZIndex(false);
      }, 250);
    }

    return () => {
      if (showModal) {
        document.body.style.removeProperty("overflow");
        document.body.removeChild(modalElement);
      }
    };
  }, [showModal]);

  const handleCloseModal = () => {
    setShowContent(false);
    setTimeout(() => {
      typeof onCloseCallback === "function" && onCloseCallback();
      setHideZIndex(true);
    }, 300);
  };

  useEffect(() => {
    if (modalRef.current) {
      console.log(modalRef.current);
      modalRef.current.focus();
    }
  }, [modalRef.current]);

  return (
    (showModal && modal && (
      <ModalPortal
        show={showContent}
        element={modal}
        handleCloseModal={handleCloseModal}
        ref={modalRef}
        bgColor={bgColor}
        hideZIndex={hideZIndex}
      >
        {children}
      </ModalPortal>
    )) ||
    null
  );
};
Modal.propTypes = {
  showModal: PropTypes.bool,
  onCloseCallback: PropTypes.func,
  bgColor: PropTypes.string,
};

export default Modal;
