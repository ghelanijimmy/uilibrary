import React, { Fragment, useState } from "react";
import Modal from "../Modal";
import Button from "../../Button/Button";
import { colorStyles } from "../../../constants/constants";

const { PRIMARY } = colorStyles;

export default {
  title: "Modal/CSF",
  component: Modal,
  argTypes: {
    showModal: {
      type: "boolean",
      control: null,
    },
    onCloseCallback: {
      type: "function",
      control: null,
    },
  },
};

const Template = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModalClick = () => setOpenModal(!openModal);

  return (
    <Fragment>
      <Modal onCloseCallback={handleModalClick} showModal={openModal}>
        <p>Test</p>
      </Modal>
      <Button
        handleClick={handleModalClick}
        text="Open"
        type={PRIMARY}
        size="lg"
      />
    </Fragment>
  );
};

export const DefaultModal = Template.bind({});
